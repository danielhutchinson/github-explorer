var module = angular.module('githubExplorer');

var searchController = function ($scope, $location) {
	
	$scope.query = '';

	$scope.search = function () {
		if($scope.query)
			$location.path('/search/users').search('q', $scope.query);
	};

};

module.controller('SearchController', ['$scope', '$location', searchController]);