angular.module('app.controllers')
	.controller('IncidenciaRemoveController', ['$scope', '$location', '$routeParams','Incidencia', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Incidencia,
			ngNotify){
		
		$scope.incidencia = new Incidencia.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.incidencia.$delete().then(function(){
				$location.path('/incidencia');
				ngNotify.set('Incidência removida com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);