
angular.module('app.controllers')
	.controller('IncidenciaEditController', ['$scope', '$location', '$routeParams','Incidencia', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Incidencia,
			ngNotify){
		
		$scope.incidencia = new Incidencia.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Incidencia.update({id: $routeParams.id}, 
					            $scope.incidencia, 
			    function(){
					$location.path('/incidencia');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);