angular.module('app.controllers')
	.controller('MotivoRemoveController', ['$scope', '$location', '$routeParams','Motivo', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Motivo){
		
		$scope.motivo = new Motivo.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.motivo.$delete().then(function(){
				$location.path('/motivo');
			});
		};

		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);