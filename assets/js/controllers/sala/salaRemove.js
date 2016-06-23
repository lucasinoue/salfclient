angular.module('app.controllers')
	.controller('SalaRemoveController', ['$scope', '$location', '$routeParams','Sala', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Sala,
			ngNotify){
		
		$scope.sala = new Sala.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.sala.$delete().then(function(){
				$location.path('/sala');
				ngNotify.set('Sala removida com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);