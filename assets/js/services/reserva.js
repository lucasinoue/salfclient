angular.module('app.services')
	.service('Reserva', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/reserva/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/reserva',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/reserva/:id',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/reserva/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/reserva/:id',
				isArray: false
			}	

		})
	}]);