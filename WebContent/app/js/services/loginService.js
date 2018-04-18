app.factory("loginService", [ '$http', function($http) {
	retorno =  {
    		executarAcao : function(param1, param2){
    			var body = {
						"nome" : param1, 
						"sobrenome" : param2
					};
        	
    			var adressResource = prefixModule + "/endpointteste";
			
    			return $http.post(adressResource, body);
    		
    		},
    		logar : function(auth){
    			var url = "/SINTI/rest/service/auth";
    			
    			var body = {};
        	
    			var config = {
    					headers : {
    					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    					'Authorization': auth,
    					'Accept': 'application/json'
    					}
    			}
    			
    			
    			return $http.post(url, body, config);
    		
    		}
    		
    	}
    return retorno;
}]);
