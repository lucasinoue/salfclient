angular.module('app.services')
	.service('Sala', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/sala/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/sala',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/sala/:id/editar',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/sala/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/sala/:id',
				isArray: false
			}	

		})
	}]);