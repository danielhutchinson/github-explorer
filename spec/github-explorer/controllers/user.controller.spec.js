describe('User Controller', function () {

	var controllerConstructor;
	var scope;
	var q;
	var mockGithubApi = { users: {}, repos: {} };
	var mockRouteParams;

	beforeEach(angular.mock.module('github'));
	beforeEach(angular.mock.module('githubExplorer'));

	beforeEach(inject(function ($controller, $rootScope, $q, $location) {
		controllerConstructor = $controller;
		scope = $rootScope.$new();
		q = $q;
		mockGithubApi.users = sinon.stub({ find: function () {} });
	}));

	beforeEach(function () {
		var defer = q.defer();
		defer.resolve(userFindResult);
		mockGithubApi.users.find.returns(defer.promise);

		mockRouteParams = { username: 'danielhutchinson' };

		controllerConstructor('UserController', { $scope: scope, $routeParams: mockRouteParams, githubApi: mockGithubApi });
		scope.$apply();
	});

	it('should make a call to the github service user find, passing in the correct username from the URL', function () {
		expect(mockGithubApi.users.find.calledWith(mockRouteParams.username));
	});

	it('should retrieve the correct user on load', function () {
		expect(scope.user.login).to.equal(userFindResult.login);
		expect(scope.user.id).to.equal(userFindResult.id);
	});

});