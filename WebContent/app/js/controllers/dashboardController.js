var app = angular.module('sialg-sinti');

app.controller('dashboardController',  ['$rootScope','$scope','$route','$q', 'loginService', function($rootScope, $scope, $route, $q, loginService){

	var deferred = $q.defer();
	loginService.logar(sessionStorage.auth).then(function(response){
		deferred.resolve(response.data);
		$scope.data = response.data;
		
		var token = response.data.token;
	    var urlOpenDocument = sessionStorage.urlOpenDocument;
		//Domínio do SAP-BO 
		var dominio = urlOpenDocument+"?token="+token+"&sIDType=CUID&iDocID=";//"http://SRJDEAPLNT0018.desenvolvimento.extracaixa:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=";
		
		var getEndereco = dominio+''+$rootScope.relatorio.endereco;
	    var getNome = $rootScope.relatorio.nome;
	    var getBotao = $rootScope.relatorio.botaoVoltar;
	    
	    document.getElementById("id_voltar").href = getBotao;
	    document.getElementById("id_iframe").src = getEndereco;
	    document.getElementById("id_nome").innerHTML = decodeURI(getNome);
	});
    
}]);