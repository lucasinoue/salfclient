angular.module('app.controllers')
	.controller('SalaRemoveController', ['$scope', '$location', '$routeParams','Sala', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Sala){
		
		$scope.sala = new Sala.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.sala.$delete().then(function(){
				$location.path('/sala');
			});
		};

		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);