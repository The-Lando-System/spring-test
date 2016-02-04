(function() { 'use strict';

describe('View1Ctrl', function () {
    
	// Include the main angular module
    beforeEach(module('myapp'));
    
    var controller;
    
    // Mock the factory that is injected into the controller
    var mockTestFactory = {
    	getHelloObj: mockHello
    };
    
    function mockHello(successCallback,errorCallback){
    	var data = {
    		name: "Hello",
    		description: "World"
    	};
    	return successCallback(data);
    };
    
    // Create the controller with the mocked factory
    beforeEach(inject(function($controller){
    	controller = $controller('view1Controller', {
    		testFactory: mockTestFactory
    	});
    }));
    
    // Define the tests to be run on the controller
    it('should say hello', function(){
    	expect(controller.hello).toBe("Hello from view 1!");
    });
    
    it('should make a test service call', function(){
    	controller.testCall();
    	expect(controller.tableData.name).toBe("Hello");
    	expect(controller.tableData.description).toBe("World");
    });
});

})();