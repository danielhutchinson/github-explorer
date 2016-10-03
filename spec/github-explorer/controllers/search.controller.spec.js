describe('search controller', function () {

	var scope;
	var location;
	var controllerConstructor;

	beforeEach(angular.mock.module('githubExplorer'));

	beforeEach(inject(function ($controller, $rootScope, $location) {
		controllerConstructor = $controller;
		scope = $rootScope.$new();
		location = $location;
	}));

	it('should redirect to the results page when a search has been made', function () {
		controllerConstructor('SearchController', { $scope: scope, $location: location });
		scope.query = 'daniel';
		scope.search();

		expect(location.url()).to.equal('/search/users?q=daniel');
	});

	it('should not redirect when a blank search has been made', function () {
		controllerConstructor('SearchController', { $scope: scope, $location: location });
		scope.query = '';
		scope.search();

		expect(location.url()).to.equal('');
	}); 

});