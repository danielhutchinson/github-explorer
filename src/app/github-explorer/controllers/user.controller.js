var module = angular.module('githubExplorer');

var userController = function ($scope, $routeParams, githubApi) {
	$scope.user;
	
	githubApi.users.find($routeParams.username)
		.then(function (data) {
			$scope.user = data;
		});
};

module.controller('UserController', userController);