(function () {
    'use strict';

    angular.module('kamelrechner').controller('MaleController', ["$scope", "$localStorage", MaleController]);

    function MaleController($scope, $localStorage) {

        $scope.ageSlider = {
            value: 22,
            options: {
                floor: 14,
                ceil: 70,
                step: 1,
                hidePointerLabels: true,
                hideLimitLabels: true,
                showSelectionBar: true
            }
        };

        $scope.heightSlider = {
            value: 176,
            options: {
                floor: 140,
                ceil: 220,
                step: 1,
                hidePointerLabels: true,
                hideLimitLabels: true,
                showSelectionBar: true
            }
        };

    }
})();
