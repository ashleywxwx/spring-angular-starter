'use strict';
angular
    .module('webApp')
    .controller('HomeCtrl',['$scope', '$http', function($scope, $http) {
        console.log("HomeCtrl created.");

        var vm = this;
        vm.greeting = "Hello world";

        //$http.get('/resource/').success(function(data) {
        //    $scope.greeting = data;
        //})

    }]);

