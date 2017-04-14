(function () {
    'use strict';

    angular.module('kamelrechner')
        .directive('krHeader', function () {
            return {
                restrict: 'E',
                templateUrl: '/app/views/header.view.html',
                replace: true,
                link: function (scope, el, attrs) {
                    scope.text = attrs.text;
                }
            }
        })

})();