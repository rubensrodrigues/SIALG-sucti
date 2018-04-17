var app = angular.module('sialg-sinti');

app.controller('painelController',  ['$rootScope','$scope','$route','$q', '$location', function($rootScope, $scope, $route, $q, $location ){
	
	   var token = sessionStorage.token;
	    var urlBOE = sessionStorage.urlBOE;
	    var urlOpenDocument = sessionStorage.urlOpenDocument;
	   
	    $rootScope.relatorio = {}
	    
	    //PAINEL CONTRATOS
	    $scope.contrato01 = function(){
	    	$rootScope.relatorio.endereco = "AcoruGbWbBJMiAkmCQd.g1g";
	    	$rootScope.relatorio.nome = "Resumo Orçamento";
	    	$rootScope.relatorio.botaoVoltar = "#!/contratos";
	        
	        $location.path('/dashboard');
	    }
	    $scope.contrato02 = function(){
	        $rootScope.relatorio.endereco = "AVUvxgrEl1FDskV3QJ7Atsw";
	        $rootScope.relatorio.nome = "Resumo por Rubrica";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }
	    $scope.contrato03 = function(){
	        $rootScope.relatorio.endereco = "AXun5iOD2DZLvjKoEyAW5wk";
	        $rootScope.relatorio.nome = "Resumo por Unidade";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');    
	    }
	    $scope.contrato04 = function(){
	        $rootScope.relatorio.endereco = "AUTTU6Os5AlCuyvWkMBxCZE";
	        $rootScope.relatorio.nome = "Resumo por GN";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');      
	    }
	    $scope.contrato05 = function(){
	        $rootScope.relatorio.endereco = "AbeZCstMPLJKhSyAoMtA8Fg";
	        $rootScope.relatorio.nome = "Resumo por Fornecedor";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');    
	    }
	    $scope.contrato06 = function(){
			$rootScope.relatorio.endereco = "AXMId8cGbNpMnkk1EVf2J2A";
	        $rootScope.relatorio.nome = "Resumo por Contrato";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }
	    $scope.contrato07 = function(){
	        $rootScope.relatorio.endereco = "AVm941cMp_RJp41djXTgXOA";
	        $rootScope.relatorio.nome = "Pagamento Contrato";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }
	    $scope.contrato08 = function(){
	        $rootScope.relatorio.endereco = "AdvqqsDXcDRInhodLffLnGw";
	        $rootScope.relatorio.nome = "Termo Recebimento a Emitir";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');      
	    }
	    $scope.contrato09 = function(){
	        $rootScope.relatorio.endereco = "Aer7hBh7eDZHpH5tPcfgWEs";
	        $rootScope.relatorio.nome = "Termo de Aceite a Emitir";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard'); 
	    }
	    $scope.contrato010 = function(){
	        $rootScope.relatorio.endereco = "ARd_DUku6l5FjZRHacTTmzU";
	        $rootScope.relatorio.nome = "Termos de Aceite Pendentes por Gerência";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }
	    $scope.contrato011 = function(){
	        $rootScope.relatorio.endereco = "AfUtOpfw9N9BtcUr9Ni_rgk";
	        $rootScope.relatorio.nome = "Entrega Dentro e Fora do Prazo";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');    
	    }

	    $scope.contrato012 = function(){
	        $rootScope.relatorio.endereco = "ATQPIgsz5LdOnbswO5k3u6E";
	        $rootScope.relatorio.nome = "VDP - Termos a Validar";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }

	    $scope.contrato013 = function(){
	        $rootScope.relatorio.endereco = "AdMvmFmmXapAgR91pSGP6Ec";
	        $rootScope.relatorio.nome = "Entregas VDP por Site";
	        $rootScope.relatorio.botaoVoltar = "contratos.html";
	       $location.path('/dashboard');     
	    }

	    //PAINEL GESTAO DE DEMANDAS
	    $scope.gestao01 = function(){
	        $rootScope.relatorio.endereco = "AY5HSTzVbUBFgK7pq6Mdvck";
	        $rootScope.relatorio.nome = "Matriz Sistemas";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard'); 
	    }
	    $scope.gestao02 = function(){
	        $rootScope.relatorio.endereco = "AaJJSCbnVg9PpsPoMUNeKEk";
	        $rootScope.relatorio.nome = "Tempo Médio de Entrega";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	    $scope.gestao03 = function(){
	        $rootScope.relatorio.endereco = "AbGp1d7FZ0JInTh7moBFRsE";
	        $rootScope.relatorio.nome = "Top 30 Sistemas";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	    $scope.gestao04 = function(){
	        $rootScope.relatorio.endereco = "AV1jPR_Hk7VEpoH55wwv6No";
	        $rootScope.relatorio.nome = "DN Criadas e Concluídas, Só Criadas e Só Concluídas";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	     $scope.gestao05 = function(){
	        $rootScope.relatorio.endereco = "AWjb5DL.PHhLpRIb7e_LGBg";
	        $rootScope.relatorio.nome = "DMS/DNS por Sistema";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	     $scope.gestao06 = function(){
	        $rootScope.relatorio.endereco = "AQxlLgPm9WVJgvxhJ0H4dD0";
	        $rootScope.relatorio.nome = "DMS/DNS por Status";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	     $scope.gestao07 = function(){
	        $rootScope.relatorio.endereco = "AZNHlei9895Kt0SUlUVGDTU";
	        $rootScope.relatorio.nome = "Serviços/Defeitos - Abertos, Fechados e Em Atendimento";
	        $rootScope.relatorio.botaoVoltar = "gestao.html";
	       $location.path('/dashboard');
	    }
	    //PAINEL INDICADORES
	    $scope.indicador01 = function(){
	        $rootScope.relatorio.endereco = "AfG.s6Z9TTNMh3fDdp58qMU";
	        $rootScope.relatorio.nome = "Índice de Entregas das Demandas DMS/DNS";
	        $rootScope.relatorio.botaoVoltar = "indicadores.html";
	       $location.path('/dashboard');
	    }

}]);