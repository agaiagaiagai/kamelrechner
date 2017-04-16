(function () {
    'use strict';

    angular.module('kamelrechner')
        .directive('krCounter', function () {
            return {
                restrict: 'E',
                scope: {
                  number: '@number'
                },
                link: function (scope, element, attr) {
                    element.prop('number', 0).animateNumber({
                        number: scope.number
                    },3000);
                }
            }
        })
})();