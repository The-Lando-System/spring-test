(function() { 'use strict';

describe('ExceptionFactory', function () {
    
	// Include the main angular module
	beforeEach(module('myapp'));
	
	var exceptionFactory;
	
	// Create the factory under test
    beforeEach(inject(function($injector){
    	exceptionFactory = $injector.get('exceptionFactory');
    }));
      
    // Define the tests to be run on the factory
    it("should catch a 404 service exception", function() {
    	var mockedServerResponse = "blah blah blah HTTP Status 404 blah blah";
    	var result = exceptionFactory.catchSvcException(mockedServerResponse);
    	expect(result.name).toBe("Error from Server: ");
    	expect(result.message).toBe("HTTP Status 404 - Service is not available!");
    });
    
});

})();