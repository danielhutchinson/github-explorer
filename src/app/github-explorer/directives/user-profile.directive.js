var module = angular.module('githubExplorer');


module.directive('userProfile', function () {
	return {
		element: 'E',
		scope: {
			user: '=' 
		},
		templateUrl: 'app/github-explorer/templates/user-profile.directive.html'
	}
}); 