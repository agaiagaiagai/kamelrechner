(function () {
    'use strict';

    angular.module('kamelrechner').controller('ResultController', ["$scope", "$localStorage", "$state", "CalculatorService", ResultController]);

    function ResultController($scope, $localStorage, $state, CalculatorService) {

        var labels = $localStorage.content.labels;

        console.log($localStorage.previousState);

        $scope.headerText = '';
        $scope.overscore = '';
        $scope.underscore = labels.underscore;
        $scope.facebook = labels.facebook;
        $scope.twitter = labels.twitter;
        $scope.whatsapp = labels.whatsapp;
        $scope.recalculate = labels.recalculate;

        if($localStorage.previousState.name === 'female'){
            $scope.headerText = $localStorage.content.homePage.femaleBox;
            $scope.overscore =  labels.overscore.female;
        }
        else {
            $scope.headerText = $localStorage.content.homePage.maleBox;
            $scope.overscore =  labels.overscore.male;
        }

        $scope.result = CalculatorService.score;

        if($scope.result === 0) {
            $state.go($localStorage.gender, {language: $localStorage.language});
        }

        $scope.NewGame = function() {
            $state.go('home', {language: $localStorage.language});
        }

    }
})();
