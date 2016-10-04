var module = angular.module('githubExplorer');

module.directive('testDirective', function () {
	return {
		restrict: 'E',
		scope: {
			message: '@'
		},
		template: '<h3>{{message}}</h3>'
	}
});