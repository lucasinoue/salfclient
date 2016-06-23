/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('MotivoListController', ['$scope', '$location','Motivo', function($scope,$location,Motivo){
			
		$scope.motivos = Motivo.query();

		$scope.novo = function(){
			$location.path('/motivo/cadastro');
		};

		$scope.menu = function(){
			$location.path('/home');
		};

	}]);