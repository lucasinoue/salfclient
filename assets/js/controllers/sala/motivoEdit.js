
angular.module('app.controllers')
	.controller('MotivoEditController', ['$scope', '$location', '$routeParams','Motivo', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Motivo){
		
		$scope.motivo = new Motivo.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Motivo.update({id: $routeParams.id}, 
					            $scope.motivo, 
			    function(){
					$location.path('/motivo');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);