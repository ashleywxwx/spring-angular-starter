'use strict';
angular
    .module('webApp')
    .controller('HomeCtrl', function() {
        console.log("HomeCtrl created.");

        var vm = this;
        vm.greeting = "Hello world";

    });

