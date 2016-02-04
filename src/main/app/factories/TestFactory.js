(function() { 'use strict';

angular.module('myapp').factory('testFactory', testFactory);

testFactory.$inject = ['$http','exceptionFactory'];

function testFactory($http, exceptionFactory) {
	return {
        getHelloObj: getHelloObj,
        getWorldObj: getWorldObj
    };
    
    function getHelloObj(successCallback,errorCallback){
    	return $http.get('/testsvc/hello')
    	.success(function(data){
    		return successCallback(data);
    	})
    	.error(function(error){
    		var err = exceptionFactory.catchSvcException(error);
    		return errorCallback(err.name + err.message);
    	});
    };
    
    function getWorldObj(successCallback,errorCallback){
    	return $http.get('/testsvc/world')
    	.success(function(data){
    		return successCallback(data);
    	})
    	.error(function(error){
    		var err = exceptionFactory.catchSvcException(error);
    		return errorCallback(err.name + err.message);
    	});
    };
};

})();