(function() { 'use strict';

angular.module('myapp').directive('navbar', navbar);

function navbar() {
	return {
		templateUrl: '/testapp/app/common-components/nav-bar.html',
		restrict: 'E'
	};
};

})();