var app = angular.module('angularApp', [])


app.controller('MainController', ['$scope', function($scope){

  $scope.test = 'A test message.'

}])
