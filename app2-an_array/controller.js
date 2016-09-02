angular.module('arrayApp').controller('arrayController', function($scope, svc) {
$scope.people = svc.data;

});
