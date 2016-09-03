angular.module('apiApp').controller('mainCtrl', function($scope, mainService){

  $scope.test = 'Ctrl is working';




  $scope.getStatePop = function(){

    var cPromise = mainService.getStatesPopulation();

      cPromise.then(function(population){
        $scope.statePop = population;
      });
  };
  $scope.getStatePop();
});
