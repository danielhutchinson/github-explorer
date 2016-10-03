var module = angular.module('githubExplorer', ['ngRoute', 'github']);

module.config(function ($routeProvider) {

	$routeProvider
		.when('/search/users', {
			templateUrl: './app/github-explorer/templates/results.html',
			controller: 'ResultsController'
		})
		.otherwise({ redirectTo: '/' });

});