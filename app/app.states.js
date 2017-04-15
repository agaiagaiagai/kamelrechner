angular.module('kamelrechner')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        ////Error page show for unknown URL
        $urlRouterProvider.otherwise('/404');
        $urlRouterProvider.when('/', '/de/home');
        $urlRouterProvider.when('/de', '/de/home');
        $urlRouterProvider.when('/en', '/en/home');
        $urlRouterProvider.when('/es', '/en/home');

        //ROUTES
        $stateProvider
        .state('home', {
            url: '/{language}/home',
            templateUrl: 'app/views/home.view.html',
            controller: 'HomeController',
            data: {
                cssClassnames: 'home'
            }
        })
        .state('male', {
            url: '/{language}/male',
            templateUrl: 'app/views/male.view.html',
            controller: 'MaleController',
            data: {
                cssClassnames: 'male'
            }
        })
        .state('female', {
            url: '/{language}/female',
            templateUrl: 'app/views/female.view.html',
            controller: 'FemaleController',
            data: {
                cssClassnames: 'female'
            }
        })
        .state('result', {
            url: '/{language}/result',
            templateUrl: 'app/views/result.view.html',
            controller: 'ResultController',
            data: {
                cssClassnames: 'result'
            },
            reloadOnSearch: false
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/views/404.html',
            data: {
                cssClassnames: 'error'
            }
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
