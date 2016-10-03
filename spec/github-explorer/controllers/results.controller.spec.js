describe('results controller', function () {

	var scope;
	var rootScope;
	var location;
	var controllerConstructor;
	var mockGithubApi;
	var q;

	beforeEach(angular.mock.module('github'));
	beforeEach(angular.mock.module('githubExplorer'));

	beforeEach(inject(function ($controller, $rootScope, $location, $q) {
		controllerConstructor = $controller;
		scope = $rootScope.$new();
		rootScope = $rootScope;
		location = $location;
		mockGithubApi = sinon.stub({ search: function () { } });
		q = $q;
	}));

	beforeEach(function () {
		var deferred = q.defer();
		deferred.resolve(userSearchResults);
		mockGithubApi.search.returns(deferred.promise);
		
		location.search('q', 'daniel');

		controllerConstructor('ResultsController', { $scope: scope, $location: location, githubApi: mockGithubApi });
		rootScope.$apply();
	});

	it('should retrive a list of results on load', function () {
		expect(scope.results.items[0].login).to.equal(userSearchResults.items[0].login);
		expect(scope.results.items[1].login).to.equal(userSearchResults.items[1].login);
	});

	it('should use the search query from the URL when retrieving data from the server', function () {
		expect(mockGithubApi.search.calledWith(location.search().q)).to.equal(true);
	});

});