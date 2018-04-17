var app = angular.module('sialg-sinti');

app.controller('loginController',  ['$rootScope','$scope','$route','$q', 'loginService', function($rootScope, $scope, $route, $q, loginService){
	
	$scope.logar = function (parm1, param2){
		
		var deferred = $q.defer();
		loginService.executarAcao(parm1, param2).then(function(response){
			deferred.resolve(response.data);
			$scope.data = response.data;
			window.location= "#/home";
		});
	}
	
	
	$scope.loginBOE = function (){
		
		var username = document.getElementById("user").value;
		var password = document.getElementById("pass").value;
		var auth = btoa(username + ":" + password);
		
		document.getElementById("load").innerHTML = "<div class=\"loader\"></div>";
		
		var deferred = $q.defer();
		loginService.logar(auth).then(function(response){
			deferred.resolve(response.data);
			$scope.data = response.data;
			document.getElementById("load").innerHTML = "";
			
			console.log($scope.data);
			
			if(typeof $scope.data.error == 'undefined'){
				sessionStorage.auth = auth;
				sessionStorage.token = $scope.data.token;
				sessionStorage.urlBOE = $scope.data.urlBOE;
				sessionStorage.urlOpenDocument = $scope.data.urlOpenDocument;
				//window.location.replace('/SIALG/index.html');
				window.location= "#/home";
			}else{
				document.getElementById("message_error").innerHTML = $scope.data.error;
				document.getElementById("message_error").style.display = "block";
			}
		});
		
		
//		var url = "/SIALG/rest/service/auth";
//		var xhr = new XMLHttpRequest();
//		
//		xhr.open("POST", url, true);
//		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//		xhr.setRequestHeader('Authorization', auth);// 'f725962:First@01');
//		xhr.setRequestHeader('Accept', 'application/json');
//		xhr.send();//(params);
//		console.log("Request status: "+xhr.readyState);
//		document.getElementById("load").innerHTML = "<div class=\"loader\"></div>";
//		xhr.onreadystatechange = function() {
//			
//		    if (xhr.readyState === 4) {
//		    		document.getElementById("load").innerHTML = "";
//		    		var body = jQuery.parseJSON(xhr.response);
//				console.log(body);
//				if(typeof body.error == 'undefined'){
//					sessionStorage.auth = auth;
//					sessionStorage.token = body.token;
//					sessionStorage.urlBOE = body.urlBOE;
//					sessionStorage.urlOpenDocument = body.urlOpenDocument;
//					window.location.replace('/SIALG/index.html');
//				}else{
//					document.getElementById("message_error").innerHTML = body.error;
//					document.getElementById("message_error").style.display = "block";
//				}
//				
//		    }
//		}
		
	}

	$scope.enterSubmit = function (event){
		if(event.which == 13){
			loginBOE();
		}
	}
	
	$scope.renovarToken = function (auth){
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		xhr.setRequestHeader('Authorization', auth);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.send();
		console.log("Request status: "+xhr.readyState);
		//document.getElementById("load").innerHTML = "<div class=\"loader\"></div>";
		xhr.onreadystatechange = function() {
		    if (xhr.readyState === 4) {
		    		//document.getElementById("load").innerHTML = "";
		    		var body = jQuery.parseJSON(xhr.response);
				console.log(body);
				if(typeof body.error == 'undefined'){
					sessionStorage.auth = auth;
					sessionStorage.token = body.token;
					sessionStorage.urlBOE = body.urlBOE;
					sessionStorage.urlOpenDocument = body.urlOpenDocument;
				}else{
					/*TODO FALHA AO RENOVAR O TOKEN
					 * ADICIONAR UMA MODAL INFORMANDO E TENTANDO NOVAMENTE
					 */
				}
				
		    }
		}
	}
	
}]);
