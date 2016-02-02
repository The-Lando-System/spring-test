(function() { 'use strict';

angular.module('myapp').controller('view2Controller', view2Controller);

view2Controller.$inject = ['testFactory'];

function view2Controller(testFactory) {
	var vm = this;
	
	vm.hello = "Hello from view 2!";
	vm.testCall = testCall;
	vm.testData = {};
	vm.errorMessage = false;
	
	function testCall(){
		vm.errorMessage = false;
		testFactory.getWorldObj(successCallback,errorCallback);
		
		function successCallback(data){
			vm.testData = data;
		};
		
		function errorCallback(err){
			vm.errorMessage = err;
		};
		
	};
};

})();