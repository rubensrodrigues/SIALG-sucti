var app = angular.module('sialg-sinti', ['ngRoute']);


app.config(function($routeProvider, $httpProvider) {
	
		  $httpProvider.defaults.headers["delete"] = {
		    'Content-Type': 'application/json;charset=utf-8'
		  };
	
	$routeProvider
		.when('/login', {
			templateUrl	: 'app/views/login.html',
			controller	: 'loginController'
		})
		.when('/home', {
			templateUrl	: 'app/views/home.html',
			controller	: 'homeController'
		})
		.when('/unidades', {
			templateUrl	: 'app/views/unidades.html',
			controller	: 'painelController'
		})
		.when('/orcamentos_ti', {
			templateUrl	: 'app/views/orcamentos_ti.html',
			controller	: 'painelController'
		})
		.when('/fnt', {
			templateUrl	: 'app/views/fnt.html',
			controller	: 'painelController'
		})
		.when('/pessoas_vitec', {
			templateUrl	: 'app/views/pessoas_vitec.html',
			controller	: 'painelController'
		})
		.when('/projetos', {
			templateUrl	: 'app/views/projetos.html',
			controller	: 'painelController'
		})
		.when('/custos_abc', {
			templateUrl	: 'app/views/custos_abc.html',
			controller	: 'painelController'
		})
		.when('/auditorias', {
			templateUrl	: 'app/views/auditorias.html',
			controller	: 'painelController'
		})
		.when('/desenvolvimento_sistemas', {
			templateUrl	: 'app/views/desenvolvimento_sistemas.html',
			controller	: 'painelController'
		})
		.when('/itens_configuracao', {
			templateUrl	: 'app/views/itens_configuracao.html',
			controller	: 'painelController'
		})
		.when('/desempenho_ti', {
			templateUrl	: 'app/views/desempenho_ti.html',
			controller	: 'painelController'
		})
		.when('/sistemas', {
			templateUrl	: 'app/views/sistemas.html',
			controller	: 'painelController'
		})
		.when('/resultados', {
			templateUrl	: 'app/views/resultados.html',
			controller	: 'painelController'
		})
		.when('/dashboard', {
			templateUrl	: 'app/views/relatorios_sialg.html',
			controller	: 'dashboardController'
		})
		.otherwise({
			redirectTo	: '/home'
		});
});


app.run(['$rootScope', '$q' , '$location', '$window', function($rootScope, $q, $location, $window) {
	
	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		
		if(!(typeof $window.sessionStorage.auth !== 'undefined' && $window.sessionStorage.auth != "")){
			$location.path('/login');
		}
	});
	
}]);
