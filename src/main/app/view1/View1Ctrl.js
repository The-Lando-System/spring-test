(function() { 'use strict';

angular.module('myapp').controller('view1Controller', view1Controller);

view1Controller.$inject = ['testFactory'];

function view1Controller(testFactory) {
	
	var vm = this;
	
	vm.hello = "Hello from view 1!";
	vm.testCall = testCall;
	vm.testData = {};
	
	function testCall(){
		testFactory.getHelloObj()
		.success(function(data){
			vm.testData = data;
		})
		.error(function(err){
		});
	};
	
};

})();