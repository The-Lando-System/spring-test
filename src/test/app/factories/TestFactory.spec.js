(function() { 'use strict';

describe('TestFactory', function () {
    
	// Include the main angular module
    beforeEach(module('myapp'));
    
    var $httpBackend;
    var testFactory;
    
    // Mock the factory that is injected into the other factory
    var mockExceptionFactory = {
    	catchSvcException: mockCatchSvcException
    };
    
    function mockCatchSvcException(response){
    	var message = {
    		name: "Error from Server: ",
        	message: "Unknown Error"
    	};
    	return message;
    };
    
    // Provide the mock factory so that the factory being tested can use it
    beforeEach(function () {
        module(function ($provide) {
            $provide.value('exceptionFactory', mockExceptionFactory);
        });
    });
    
    // Create the httpBackend service (mocks $http) and the factory under test
    beforeEach(inject(function($injector){
    	$httpBackend = $injector.get('$httpBackend');
    	testFactory = $injector.get('testFactory');
    }));
    
    // Define the tests to be run on the factory
    it("should get the hello object", function() {
    	
    	// Define what the mock $http service should return
    	$httpBackend.expectGET('/testsvc/hello').respond({name:"hello", description:"world"});
    	
    	// Call the http service in the factory provided method
        testFactory.getHelloObj(successCallback,errorCallback);      
        function successCallback(data){
    		expect(data.name).toBe("hello");
    		expect(data.description).toBe("world");
    	};
    	function errorCallback(msg){
    	};
        
    	// Execute the pending http calls
    	$httpBackend.flush();
    });
    
});

})();