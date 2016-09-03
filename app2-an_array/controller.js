angular.module('arrayApp').controller('arrayController', function($scope, mainService){
  // $scope.test = "testing";

    $scope.people = mainService.data;


});
