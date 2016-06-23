angular.module('app.controllers')
	.controller('DepartamentoRemoveController', ['$scope', '$location', '$routeParams','Departamento', 'ngNotify', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Departamento,
			ngNotify){
		
		$scope.departamento = new Departamento.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.departamento.$delete().then(function(){
				$location.path('/departamento');
				ngNotify.set('Departamento removido com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);