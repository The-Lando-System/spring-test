(function() { 'use strict';

angular.module('myapp').factory('testFactory', testFactory);

testFactory.$inject = ['$http','exception'];

function testFactory($http, exception) {
	return {
        getHelloObj: getHelloObj,
        getWorldObj: getWorldObj
    };
    
    function getHelloObj(){
    	return $http.get('/testsvc/hello')
    	.success(function(data){
    		return data;
    	})
    	.error(function(error){
    		var err = exception.catchSvcException(error);
    		return err.name + err.message;
    	});
    };
    
    function getWorldObj(successCallback,errorCallback){
    	return $http.get('/testsvc/world')
    	.success(function(data){
    		return successCallback(data);
    	})
    	.error(function(error){
    		var err = exception.catchSvcException(error);
    		return errorCallback(err.name + err.message);
    	});
    };
};

})();