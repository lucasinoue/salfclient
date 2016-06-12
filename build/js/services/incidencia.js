angular.module('app.services')
	.service('Incidencia', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/incidencia/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/incidencia',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/incidencia/:id',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/incidencia/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/incidencia/:id',
				isArray: false
			}	

		})
	}]);