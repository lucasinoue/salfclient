
angular.module('app.controllers')
	.controller('IncidenciaEditController', ['$scope', '$location', '$routeParams','Incidencia', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Incidencia){
		
		$scope.incidencia = new Incidencia.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Incidencia.update({id: $routeParams.id}, 
					            $scope.incidencia, 
			    function(){
					$location.path('/incidencia');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);