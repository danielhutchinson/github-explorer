describe('Github Service', function () {

	describe('Users', function () {

		var _githubApi;
		var httpBackend;

		var userSearchUrl = 'http://api.github.com/search/users?q=daniel';
		var userFindUrl = 'http://api.github.com/users/danielhutchinson';

		beforeEach(angular.mock.module('github'));

		beforeEach(inject(function (githubApi, $httpBackend) {
			_githubApi = githubApi;
			httpBackend = $httpBackend;
		}));

		it('should call the correct url on search', function () {
			httpBackend.expectGET(userSearchUrl);
			httpBackend.when('GET', userSearchUrl).respond(200, {});

			_githubApi.users.search('daniel');
			httpBackend.flush();

			httpBackend.verifyNoOutstandingExpectation();
     		httpBackend.verifyNoOutstandingRequest();
		});

		it('should return a list of users on search', function () {
			httpBackend.when('GET', userSearchUrl).respond(200, userSearchResults);
			var results;

			_githubApi.users.search('daniel')
				.then(function (data) {
					results = data;
				});
			httpBackend.flush();

			expect(results.items[0].login).to.deep.equal(userSearchResults.items[0].login);
			expect(results.items[1].login).to.deep.equal(userSearchResults.items[1].login);
		});

		it('should call the correct url on find', function () {
			httpBackend.expectGET(userFindUrl);
			httpBackend.when('GET', userFindUrl).respond(200, {});

			_githubApi.users.find('danielhutchinson');
			httpBackend.flush();

			httpBackend.verifyNoOutstandingExpectation();
     		httpBackend.verifyNoOutstandingRequest();
		});

		it('should return a single user on find', function () {
			httpBackend.when('GET', userFindUrl).respond(200, userFindResult);
			var result;

			_githubApi.users.find('danielhutchinson')
				.then(function (data) {
					result = data;
				});

			httpBackend.flush();
			expect(result.login).to.equal(userFindResult.login);
		});

	});

});