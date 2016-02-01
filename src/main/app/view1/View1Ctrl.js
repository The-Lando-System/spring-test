(function() { 'use strict';

angular.module('myapp').controller('view1Controller', view1Controller);

function view1Controller() {
	
	var view1Vm = this;
	
	view1Vm.hello = "Hello from view 1!";
};

})();