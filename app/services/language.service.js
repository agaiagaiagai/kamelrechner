(function () {
    'use strict';

    angular.module('kamelrechner').service('LanguageService', ["$q", "$http", "$localStorage", "$stateParams", LanguageService]);

    function LanguageService($q, $http, $localStorage, $stateParams) {

        var service = {
            language: $stateParams.language,
            content: {}
        }

        var appContent = {};

        service.SetLanguage = function() {
            $localStorage.language = $stateParams.language;

            var def = $q.defer();

            $http.get('/data/data.json').success(function (data) {
                service.content = data[0][$stateParams.language];
                def.resolve(data);
            }).error(function () {
                def.reject("Failed to get data from JSON file");
            });
            return def.promise;
        };

        return service;
    }



})();