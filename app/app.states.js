angular.module('kamelrechner')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        ////Error page show for unknown URL
        $urlRouterProvider.otherwise('/404');

        //ROUTES
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.view.html',
            controller: 'HomeController',
            data: {
                cssClassnames: 'home',
                pageTitle: "Home"
            }
        })
        .state('male', {
            url: '/male',
            templateUrl: 'app/views/male.view.html',
            controller: 'MaleController',
            data: {
                cssClassnames: 'male',
                pageTitle: "Male"
            }
        })
        .state('female', {
            url: '/female',
            templateUrl: 'app/views/female.view.html',
            controller: 'FemaleController',
            data: {
                cssClassnames: 'female',
                pageTitle: "Female"
            }
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/views/404.html',
            data: {
                cssClassnames: 'error',
                pageTitle: "Error Page"
            }
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
