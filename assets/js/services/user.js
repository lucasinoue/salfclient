angular.module('app.services')
	.service('User', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/usuario/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/usuario',
				isArray: true
			},

			update:{
				method:'PUT',
				url: appConfig.baseUrl + '/usuario/:id',
				isArray: false
			},
			show:{
				method:'GET',
				url: appConfig.baseUrl + '/usuario/:id',
				isArray: false
			},
			delete: {
				method: 'DELETE',
				url: appConfig.baseUrl + '/usuario/:id',
				isArray: false
			}	

		})
	}]);