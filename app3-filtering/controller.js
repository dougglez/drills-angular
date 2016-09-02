angular.module('app3').controller('mainCtrl', function($scope, mainService){

// testing if controller and service are connected
    // $scope.test = "controller is connected";
    // $scope.svcTest = mainService.svcTest;

// connect myData array to controller

$scope.people = mainService.data;







});
