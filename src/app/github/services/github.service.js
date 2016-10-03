var module = angular.module('github', []);

var githubApi = function($http) {
	var service = {};
	var BASE_URL = 'http://api.github.com/';

	var _serverRequest = function (url) {
		return $http.get(url)
			.then(function (response) {
				return response.data;
			});
	};

	service.users = {
		search: function (query) {
			return _serverRequest(BASE_URL + 'search/users?q=' + query);
		},

		find: function (username) {
			return _serverRequest(BASE_URL + 'users/' + username);
		}
	};

	service.repos = {
		search: function (username) {
			return _serverRequest(BASE_URL + 'users/' + username + '/repos');
		},

		find: function (username, repoName) {
			return _serverRequest(BASE_URL + 'users/' + username + '/' + repoName);
		}
	};

	return service;
};	

module.factory('githubApi', ['$http', githubApi]);