'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {

	$scope.names = ["mikko", "markus"];
	
	$http.get('data/data.json').
    success(function(data, status, headers, config) {
      $scope.ages = data.ages;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
}]);