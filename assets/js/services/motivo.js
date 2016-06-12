angular.module('app.services')
	.service('Motivo', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/motivo/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/motivo',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/motivo/:id',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/motivo/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/motivo/:id',
				isArray: false
			}	

		})
	}]);