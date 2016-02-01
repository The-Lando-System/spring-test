(function() { 'use strict';

angular.module('myapp').controller('view2Controller', view2Controller);

function view2Controller() {
	var view2Vm = this;
	
	view2Vm.hello = "Hello from view 2!";
};

})();