angular.module('app.controllers')
	.controller('SalaEditController', ['$scope', '$location', '$routeParams','Sala', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Sala){
		
		$scope.sala = new Sala.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Sala.update({id: $routeParams.id}, 
					            $scope.sala, 
			    function(){
					$location.path('/sala');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);