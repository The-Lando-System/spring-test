(function() { 'use strict';

describe('View2Ctrl', function () {
    
	// Include the main angular module
    beforeEach(module('myapp'));
    
    var controller;
    
    // Mock the factory that is injected into the controller
    var mockTestFactory = {
    	getWorldObj: mockWorld
    };
    
    function mockWorld(successCallback,errorCallback){
    	var data = {
    		name: "World",
    		description: "Hello"
    	};
    	return successCallback(data);
    };
    
    // Create the controller with the mocked factory
    beforeEach(inject(function($controller){
    	controller = $controller('view2Controller', {
    		testFactory: mockTestFactory
    	});
    }));
    
    // Define the tests to be run on the controller
    it('should say hello', function(){
    	expect(controller.hello).toBe("Hello from view 2!");
    });
    
    it('should make a test service call', function(){
    	controller.testCall();
    	expect(controller.tableData.name).toBe("World");
    	expect(controller.tableData.description).toBe("Hello");
    });
});

})();