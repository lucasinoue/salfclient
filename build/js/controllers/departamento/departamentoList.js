/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('DepartamentoListController', ['$scope', 'Departamento', function($scope,Departamento){
			
			$scope.departamentos = Departamento.query();

	}]);