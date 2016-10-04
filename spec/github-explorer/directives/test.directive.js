describe('Test Directive', function () {

	var compiledElement;
	var scope;

	beforeEach(angular.mock.module('githubExplorer'));

	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
		var element = angular.element('<test-directive message="penguin" />');
		compiledElement = $compile(element)(scope);
		scope.$digest();
	}));
	
	it('should have the correct message in its scope', function () {
		expect(compiledElement.isolateScope().message).to.equal('penguin');
	});

	it('should create a Heading 3 element on the page', function () {
		var textElement = compiledElement.find('h3');
		expect(textElement).to.be.defined;
	});

	it('should display the message passed into the scope', function () {
		var textElement = compiledElement.find('h3');
		expect(textElement.text()).to.equal(compiledElement.isolateScope().message);
	});

});