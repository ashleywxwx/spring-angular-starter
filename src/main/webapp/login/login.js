'use strict';
angular
    .module('webApp')
    .controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$location', '$route', function($rootScope, $scope, $http, $location, $route) {
        console.log("LoginCtrl created.");

        var vm = this;
        vm.credentials = {
            username: "",
            password: ""
        };
        vm.login = login;

        $scope.tab = function(route) {
            return $route.current && route === $route.current.controller;
        };

        var authenticate = function(callback) {

            $http.get('user').success(function(data) {
                console.log("/user success: " + JSON.stringify(data));
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();
            }).error(function(response) {
                console.log("/user failure." + JSON.stringify(response));
                $rootScope.authenticated = false;
                callback && callback();
            });

        };

        authenticate();

        function login() {

            var data2 = 'username=' + encodeURIComponent(vm.credentials.username) +
                '&password=' + encodeURIComponent(vm.credentials.password);

            $http.post('login', data2, {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function() {
                authenticate(function() {
                    if ($rootScope.authenticated) {
                        console.log("Login succeeded");
                        $location.path("/");
                        $scope.error = false;
                        $rootScope.authenticated = true;
                    } else {
                        console.log("Login failed with redirect");
                        $location.path("/login");
                        $scope.error = true;
                        $rootScope.authenticated = false;
                    }
                });
            }).error(function() {
                console.log("Login failed");
                $location.path("/login");
                $scope.error = true;
                $rootScope.authenticated = false;
            })
        }

        $scope.logout = function() {
            $http.post('logout', {}).success(function() {
                $rootScope.authenticated = false;
                $location.path("/");
            }).error(function() {
                console.log("Logout failed");
                $rootScope.authenticated = false;
            });
        }

    }]);
