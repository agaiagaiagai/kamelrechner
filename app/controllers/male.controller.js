(function () {
    'use strict';

    angular.module('kamelrechner').controller('MaleController', ["$scope", "$rootScope", "$localStorage", "$state", "CalculatorService", "LanguageService", MaleController]);

    function MaleController($scope, $rootScope,$localStorage, $state, CalculatorService, LanguageService) {

        $localStorage.gender = 'male';

        $scope.labels = '';
        $scope.headerText = '';

        LanguageService.SetLanguage().then(function (data) {
            $localStorage.content = LanguageService.content;
            $scope.labels = $localStorage.content.labels;
            $scope.headerText = $localStorage.content.homePage.maleBox;
        });

        $scope.ageSlider = CalculatorService.ageSlider;
        $scope.heightSlider = CalculatorService.heightSlider;
        $scope.hairLength = 'long';
        $scope.hairColor = 'blonde';
        $scope.eyeColor = 'blue';
        $scope.beard = 'a';
        $scope.bodyType = 'normal';


        $scope.CalculateScore = function() {

            var male = {
                gender: $localStorage.gender,
                age: $scope.ageSlider.value,
                height: $scope.heightSlider.value,
                hairLength: $scope.hairLength,
                hairColor: $scope.hairColor,
                eyeColor: $scope.eyeColor,
                beard: $scope.beard,
                bodyType: $scope.bodyType
            };

            CalculatorService.CalculateScore(male);

            $state.go('result', {language: $localStorage.language});

        }

        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
            $localStorage.previousState = from;
        });

    }
})();
