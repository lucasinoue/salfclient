/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('SalaListController', ['$scope', '$location','Sala', function($scope,$location,Sala){
			
		$scope.salas = Sala.query();

	}]);