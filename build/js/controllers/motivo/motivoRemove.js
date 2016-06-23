angular.module('app.controllers')
	.controller('MotivoRemoveController', ['$scope', '$location', '$routeParams','Motivo', 'ngNotify', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Motivo,
			ngNotify){
		
		$scope.motivo = new Motivo.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.motivo.$delete().then(function(){
				$location.path('/motivo');
				ngNotify.set('Motivo removido com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);