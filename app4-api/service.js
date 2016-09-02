angular.module('apiApp').service('mainService', function($http){

// test to make sure svc is connected to controller
    // this.svctest = 'SVC connected';

    var baseUrl = 'http://swapi.co/api/starships';

    this.getStarships = function() {
      var promise =  $http({
        method: 'GET',
        url: baseUrl
      }).then(function(response){
          if(response.status === 200) { //is everthing went ok, return data
            return response.data;
          } else {
            return "Error getting data";
          }
      });
      return promise;
    };

});
