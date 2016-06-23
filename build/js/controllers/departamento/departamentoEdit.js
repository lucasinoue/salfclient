
angular.module('app.controllers')
	.controller('DepartamentoEditController', ['$scope', '$location', '$routeParams','Departamento', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Departamento,
			ngNotify){
		
		$scope.departamento = new Departamento.show({id: $routeParams.id});


		$scope.salvar = function(){
			if($scope.form.$valid){

				Departamento.update({id: $routeParams.id}, 
					            $scope.departamento, 
			    function(){
					$location.path('/departamento');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);