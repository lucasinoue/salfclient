angular.module('app.services')
	.service('Departamento', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/departamento/:id', {id: '@id'})
	}]);