'use strict';

angular.module('myApp.other', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/other', {
    templateUrl: 'other/other.html',
    controller: 'OtherCtrl'
  });
}])

.controller('OtherCtrl', [function() {

}]);