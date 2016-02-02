(function() { 'use strict';

angular.module('myapp').directive('objectTable', objectTable);

function objectTable() {
	return {
		templateUrl: '/testapp/app/common-components/object-table.html',
		restrict: 'E'
	};
};

})();