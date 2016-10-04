var module = angular.module('githubExplorer');

var resultsController = function ($scope, $location, githubApi) {
	$scope.results;

	githubApi.users.search($location.search().q)
		.then(function (data) {
			$scope.results = data;
		});
};

module.controller('ResultsController', ['$scope', '$location', 'githubApi', resultsController]);