angular.module('app.services')
	.service('Departamento', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/departamento/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/departamento',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/departamento/:id',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/departamento/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/departamento/:id',
				isArray: false
			}	

		})
	}]);