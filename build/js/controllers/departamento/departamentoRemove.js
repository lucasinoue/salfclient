angular.module('app.controllers')
	.controller('DepartamentoRemoveController', ['$scope', '$location', '$routeParams','Departamento', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Departamento){
		
		$scope.departamento = new Departamento.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.departamento.$delete().then(function(){
				$location.path('/departamento');
			});
		};

		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);