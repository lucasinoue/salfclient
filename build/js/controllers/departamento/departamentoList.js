/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('DepartamentoListController', ['$scope', '$location','Departamento', function($scope,$location,Departamento){
			
		$scope.departamentos = Departamento.query();

	}]);