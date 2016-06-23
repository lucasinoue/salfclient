angular.module('app.controllers')
	.controller('ReservaRemoveController', ['$scope', '$location', '$routeParams','Reserva', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Reserva,
			ngNotify){
		
		$scope.reserva = new Reserva.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.reserva.$delete().then(function(){
				$location.path('/reserva');
				ngNotify.set('Reserva removida com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/reserva');
		};


	}]);