(function() { 'use strict';

angular.module('myapp').factory('exceptionFactory', exceptionFactory);

function exceptionFactory() {
	return {
		catchSvcException: catchSvcException
    };
    
    function catchSvcException(response){
    	var message = response ? response : "Unknown Error";
    	var errMatch = message.match(/HTTP\sStatus\s(\d{3})/);
    	if (errMatch) {
    		switch(errMatch[1]){
    			case "404":
    				message = "HTTP Status 404 - Service is not available!";
    				break;
    			case "500":
    				message = "HTTP Status 500 - Service could not process the request!";
    				break;
    			default:
    				message = "Unknown Error";
    		}
    	}
    	
    	return {
    		name: "Error from Server: ",
    		message: message	
    	};
    };
};

})();