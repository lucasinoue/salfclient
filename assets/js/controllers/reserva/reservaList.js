/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('ReservaListController', ['$scope', '$location','Reserva', function($scope,$location,Reserva){
			
		$scope.reservas = Reserva.query();

		$scope.novo = function(){

			$location.path('/reserva/cadastro');
		};

		$scope.menu = function(){

			$location.path('/home');
		};

	}]);