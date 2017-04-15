(function () {
    'use strict';

    angular.module('kamelrechner')
        .directive('routeCssClassnames', function ($rootScope, $route) {
            return {
                restrict: "A",
                scope: {},
                link: function (scope, element, attr, ctrl) {

                    $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
                        var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                        var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                        // don't do anything if they are the same
                        if (fromClassnames != toClassnames) {
                            if (fromClassnames) {
                                element.removeClass(fromClassnames);
                            }

                            if (toClassnames) {
                                element.addClass(toClassnames);
                            }
                        }


                    });
                }
            }
        })
        .directive('updateTitle', ["$rootScope", "$timeout", "$localStorage",
            function ($rootScope, $timeout, $localStorage) {
                return {
                    link: function (scope, element) {
                        var listener = function (event, toState) {

                            $timeout(function () {
                                element.text($localStorage.content.homePage.headerText);
                            }, 0, false);
                        };

                        $rootScope.$on("$stateChangeSuccess", listener);
                    }
                };
            }
        ]);
}());
