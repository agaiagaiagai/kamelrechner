(function () {
    'use strict';

    angular.module('kamelrechner').controller('HomeController', ["$scope", "$localStorage", "$state", "LanguageService", HomeController]);

    function HomeController($scope, $localStorage, $state, LanguageService) {

        $scope.homePage = '';

        LanguageService.SetLanguage().then(function (data) {
            $localStorage.content = LanguageService.content;
            $scope.homePage = $localStorage.content.homePage;
        });

        $scope.SelectFemale = function() {
            $state.go('female', {language: $localStorage.language});
        }

        $scope.SelectMale = function() {
            $state.go('male', {language: $localStorage.language});
        }

    }
})();
