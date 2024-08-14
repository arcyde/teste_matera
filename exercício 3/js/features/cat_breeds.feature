Feature: Testing a cat's breed API - method GET

    Scenario: Success in retrieve all breeds
        Given I am making a GET request to the valid "/breeds" endpoint
        When I send the valid request
        Then I should receive a succesful "200" response
		And the response body should contain a list of cat breeds
		
	Scenario: Failure at invalid endpoint route
	    Given I am making a GET request to the invalid "/invalid-route" endpoint
        When I send the invalid request
        Then I should receive a unsuccesful "404 Not Found" response