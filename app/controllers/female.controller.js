(function () {
    'use strict';

    angular.module('kamelrechner').controller('FemaleController', ["$scope", "$rootScope", "$localStorage", "$state", "CalculatorService", "LanguageService", FemaleController]);

    function FemaleController($scope, $rootScope, $localStorage, $state, CalculatorService, LanguageService) {

        $localStorage.gender = 'female';

        $scope.labels = '';
        $scope.headerText = '';

        LanguageService.SetLanguage().then(function (data) {
            $localStorage.content = LanguageService.content;
            $scope.labels = $localStorage.content.labels;
            $scope.headerText = $localStorage.content.homePage.femaleBox;
        });

        $scope.ageSlider = CalculatorService.ageSlider;
        $scope.heightSlider = CalculatorService.heightSlider;
        $scope.hairLength = 'long';
        $scope.hairColor = 'blonde';
        $scope.eyeColor = 'blue';
        $scope.boobSize = 'a';
        $scope.bodyType = 'thin';


        $scope.CalculateScore = function() {

            var female = {
                gender: $localStorage.gender,
                age: $scope.ageSlider.value,
                height: $scope.heightSlider.value,
                hairLength: $scope.hairLength,
                hairColor: $scope.hairColor,
                eyeColor: $scope.eyeColor,
                boobSize: $scope.boobSize,
                bodyType: $scope.bodyType
            };

            CalculatorService.CalculateScore(female);

            $state.go('result', {language: $localStorage.language});

        }

        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
            $localStorage.previousState = from;
        });

    }
})();
