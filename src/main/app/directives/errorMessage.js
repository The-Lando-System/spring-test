(function() { 'use strict';

angular.module('myapp').directive('errorMessage', errorMessage);

function errorMessage() {
	return {
		templateUrl: '/testapp/app/common-components/error-message.html',
		restrict: 'E'
	};
};

})();