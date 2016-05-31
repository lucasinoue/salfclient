var app = angular.module('app', ['ngRoute','app.controllers', 'app.services']);

angular.module('app.controllers', []);
angular.module('app.services', ['ngResource']);


app.provider('appConfig', function(){
	var config = {
		baseUrl: 'http://192.168.173.1:8080/salf-server/webresources/salf_server'
	};


	return {
		config: config,
		$get: function() {
			return config;
		}
	}

});

app.config(function($routeProvider, appConfigProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'build/views/login.html',
			controller: 'LoginController'
		})

		.when('/departamentos', {
			templateUrl: 'build/views/departamento/lista.html',
			controller: 'DepartamentoListController'
		})
});