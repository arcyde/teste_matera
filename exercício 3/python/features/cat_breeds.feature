Feature: Testing a cat's breed API - method GET

    Scenario: Success in retrieve all breeds
        Given I am making a GET request to the "/breeds" endpoint
        When I send the request
        Then I should receive a "200 OK" response
		And the response body should contain a list of cat breeds
		
	Scenario: Failure at invalid endpoint route
	    Given I am making a GET request to the "/invalid-route" endpoint
        When I send the invalid request
        Then I should receive a "404 Not Found" response