angular.module('apiApp').service('mainService', function($http){


  var baseUrl = 'http://api.census.gov/data/2014/acs1?get=NAME,B01001_001E&for=state:*&key=';

  this.getStatesPopulation = function(){
    var promise = $http ({
      method: 'GET',
      url: baseUrl
    }).then(function(response){
      if(response.status === 200) {
        return response.data;
      } else {
        return "Error retrieving data";
      }
    });
    return promise;
  };


});
