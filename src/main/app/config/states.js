(function() { 'use strict';

angular.module('myapp')
.config(config);

function config($urlRouterProvider,$stateProvider,$locationProvider) {
	
	$locationProvider.html5Mode(true);
	
	$urlRouterProvider.otherwise('/view1');

	$stateProvider
	.state('view1', {
		url: '/view1',
		templateUrl: '/testapp/app/view1/view1.html',
		controller: 'view1Controller',
		controllerAs: 'vm'
	})
	.state('view2', {
		url: '/view2',
		templateUrl: '/testapp/app/view2/view2.html',
		controller: 'view2Controller',
		controllerAs: 'vm'
	});
};

})();