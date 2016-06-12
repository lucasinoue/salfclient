/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('IncidenciaListController', ['$scope', '$location','Incidencia', function($scope,$location,Incidencia){
			
		$scope.incidencias = Incidencia.query();

	}]);