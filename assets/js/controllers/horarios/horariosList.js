/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('HorariosListController', ['$scope', '$location','Horarios', function($scope,$location,Horarios
		){
			
		$scope.horarios = Horarios.query();

	}]);