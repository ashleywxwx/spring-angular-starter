'use strict';
angular
    .module('webApp')
    .controller('LoginCtrl', function() {
        console.log("LoginCtrl created.");

        var vm = this;
        vm.login = login;

        function login() {
            console.log("Login function called");
        };

    });
