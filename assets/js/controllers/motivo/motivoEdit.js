
angular.module('app.controllers')
	.controller('MotivoEditController', ['$scope', '$location', '$routeParams','Motivo', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Motivo,
			ngNotify){
		
		$scope.motivo = new Motivo.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Motivo.update({id: $routeParams.id}, 
					            $scope.motivo, 
			    function(){
					$location.path('/motivo');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);