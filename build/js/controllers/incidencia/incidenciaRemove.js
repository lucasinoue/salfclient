angular.module('app.controllers')
	.controller('IncidenciaRemoveController', ['$scope', '$location', '$routeParams','Incidencia', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Incidencia){
		
		$scope.incidencia = new Incidencia.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.incidencia.$delete().then(function(){
				$location.path('/incidencia');
			});
		};

		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);