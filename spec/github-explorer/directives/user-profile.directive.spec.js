describe('User Profile Directive', function () {

	var compile;
	var compiledElement;

	beforeEach(angular.mock.module('githubExplorer')) 
	beforeEach(angular.mock.module('app/github-explorer/templates/user-profile.directive.html'));

	beforeEach(inject(function ($compile, $rootScope) {
		var scope = $rootScope.$new();
		scope.user = userFindResult;
		var element = angular.element('<user-profile user="user" />');
		compiledElement = $compile(element)(scope);
		scope.$digest();
	}));

	it('should bind the users name', function () {
		var nameElement = compiledElement.find('h4');
		expect(nameElement.text()).to.contain(userFindResult.name);
	});

	it('should bind the users login', function () {
		var loginElement = compiledElement.find('h4').find('small');
		expect(loginElement.text()).to.contain(userFindResult.login);
	});

	it('should bind the users avatar', function () {
		var avatarElement = compiledElement.find('img');
		expect(avatarElement.attr('src')).to.equal(userFindResult.avatar_url);
	});

}); 