
angular.module('app.controllers')
	.controller('DepartamentoEditController', ['$scope', '$location', '$routeParams','Departamento', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Departamento){
		
		$scope.departamento = new Departamento.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Departamento.update({id: $routeParams.id}, 
					            $scope.departamento, 
			    function(){
					$location.path('/departamento');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);