'use strict';
angular
    .module('webApp')
    .controller('NavigationCtrl', function() {
        console.log("NavigationCtrl created.");

        var vm = this;
        vm.authenticated = false;
        vm.logout = logout

        function logout(){
          console.log("Logout function called.");
        };
    });
