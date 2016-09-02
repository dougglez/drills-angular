angular.module('apiApp').controller('mainCtrl', function($scope, mainService){

// tests to make sure controller is connected to view and svc
 $scope.test = 'Ctrl connected';
 // $scope.svctest = mainService.svctest;





$scope.retrieveStarships = function(){

  var cPromise = mainService.getStarships();

  cPromise.then(function(starships){
    $scope.starships = starships;
    });
};



$scope.retrieveStarships();
















});
