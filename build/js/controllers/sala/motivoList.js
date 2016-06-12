/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('MotivoListController', ['$scope', '$location','Motivo', function($scope,$location,Motivo){
			
		$scope.motivos = Motivo.query();

	}]);