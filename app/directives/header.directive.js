(function () {
    'use strict';

    angular.module('kamelrechner')
        .directive('krHeader', function ($localStorage, $state, LanguageService) {
            return {
                restrict: 'E',
                templateUrl: '/app/views/header.view.html',
                scope: {
                    text: '@text'
                },
                replace: true,
                link: function(scope) {

                    var currentPage = $state.current.name;

                    scope.activateLanguage = function(lang) {
                        if(currentPage === 'result'){
                            $state.go('home', {language: lang});
                        }
                        else {
                            $state.go(currentPage, {language: lang});
                        }
                    };
                }
            }
        })

})();