var app = angular.module('app', ['ngRoute','app.controllers', 'app.services', 'ngNotify', 'mp.datePicker']);

angular.module('app.controllers', []);
angular.module('app.services', ['ngResource']);


app.provider('appConfig', function(){
	var config = {
		baseUrl: 'http://localhost:8000'
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
		
		/*
		 * LOGIN
		 */
		.when('/login', {
			templateUrl: 'build/views/login.html',
			controller: 'LoginController'
		})

		/*
		 * HOME
		 */
		.when('/home', {
			templateUrl: 'build/views/home.html'
		})

		/*
		 * DEPARTAMENTO
		 */
		.when('/departamento', {
			templateUrl: 'build/views/departamento/lista.html',
			controller: 'DepartamentoListController'
		})

		.when('/departamento/cadastro', {
			templateUrl: 'build/views/departamento/cadastro.html',
			controller: 'DepartamentoInsertController',
			title: 'Incluir departamento'

		})
		
		.when('/departamento/:id/editar', {
			templateUrl: 'build/views/departamento/editar.html',
			controller: 'DepartamentoEditController',
			title: 'Editar departamento'
		})

		.when('/departamento/:id/excluir' , {
			templateUrl: 'build/views/departamento/excluir.html',
			controller: 'DepartamentoRemoveController',
			title: 'Remover departamento'
		})

		/*
		 * MOTIVO
		 */
		.when('/motivo', {
			templateUrl: 'build/views/motivo/lista.html',
			controller: 'MotivoListController'
		})

		.when('/motivo/cadastro', {
			templateUrl: 'build/views/motivo/cadastro.html',
			controller: 'MotivoInsertController',
			title: 'Incluir motivo'

		})
		
		.when('/motivo/:id/editar', {
			templateUrl: 'build/views/motivo/editar.html',
			controller: 'MotivoEditController',
			title: 'Editar motivo'
		})

		.when('/motivo/:id/excluir' , {
			templateUrl: 'build/views/motivo/excluir.html',
			controller: 'MotivoRemoveController',
			title: 'Remover motivo'
		})

		/*
		 * INCIDENCIA
		 */
		.when('/incidencia', {
			templateUrl: 'build/views/incidencia/lista.html',
			controller: 'IncidenciaListController'
		})

		.when('/incidencia/cadastro', {
			templateUrl: 'build/views/incidencia/cadastro.html',
			controller: 'IncidenciaInsertController',
			title: 'Incluir incidencia'

		})
		
		.when('/incidencia/:id/editar', {
			templateUrl: 'build/views/incidencia/editar.html',
			controller: 'IncidenciaEditController',
			title: 'Editar incidencia'
		})

		.when('/incidencia/:id/excluir' , {
			templateUrl: 'build/views/incidencia/excluir.html',
			controller: 'IncidenciaRemoveController',
			title: 'Remover incidencia'
		})

		/*
		 * SALA
		 */
		.when('/sala', {
			templateUrl: 'build/views/sala/lista.html',
			controller: 'SalaListController'
		})

		.when('/sala/cadastro', {
			templateUrl: 'build/views/sala/cadastro.html',
			controller: 'SalaInsertController',
			title: 'Incluir sala'
		})
		
		.when('/sala/:id/editar', {
			templateUrl: 'build/views/sala/editar.html',
			controller: 'SalaEditController',
			title: 'Editar sala'
		})

		.when('/sala/:id/excluir' , {
			templateUrl: 'build/views/sala/excluir.html',
			controller: 'SalaRemoveController',
			title: 'Remover sala'
		})

		/*
		 * USUARIO
		 */
		.when('/usuario', {
			templateUrl: 'build/views/user/lista.html',
			controller: 'UserListController'
		})

		.when('/usuario/cadastro', {
			templateUrl: 'build/views/user/cadastro.html',
			controller: 'UserInsertController',
			title: 'Incluir usuário'
		})
		
		.when('/usuario/:id/editar', {
			templateUrl: 'build/views/user/editar.html',
			controller: 'UserEditController',
			title: 'Editar usuário'
		})

		.when('/usuario/:id/excluir' , {
			templateUrl: 'build/views/user/excluir.html',
			controller: 'UserRemoveController',
			title: 'Remover usuário'
		})

		/*
		 * RESERVA
		 */
		.when('/reserva', {
			templateUrl: 'build/views/reserva/lista.html',
			controller: 'ReservaListController'
		})

		.when('/reserva/cadastro', {
			templateUrl: 'build/views/reserva/cadastro.html',
			controller: 'ReservaInsertController',
			title: 'Incluir reserva'
		})
		
		.when('/reserva/:id/editar', {
			templateUrl: 'build/views/reserva/editar.html',
			controller: 'ReservaEditController',
			title: 'Editar reserva'
		})

		.when('/reserva/:id/excluir' , {
			templateUrl: 'build/views/reserva/excluir.html',
			controller: 'ReservaRemoveController',
			title: 'Remover reserva'
		})


});