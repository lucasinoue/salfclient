angular.module('app.services')
	.service('Horarios', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/horarios/:id', {id: '@id'}, 
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/horarios',
				isArray: true
			}	

		})
	}]);