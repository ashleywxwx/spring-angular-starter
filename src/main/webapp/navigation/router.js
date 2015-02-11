'use strict';
angular
    .module('webApp')
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home/home.html',
            controller : 'HomeCtrl as homeCtrl'
        }).when('/login', {
            templateUrl : 'login.html',
            controller : 'LoginCtrl as loginCtrl'
        }).otherwise('/');
    });
