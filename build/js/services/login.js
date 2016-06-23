angular.module('app.services')
	.service('Login', ['$resource', 'appConfig', function($resource,appConfig){
		return $resource(appConfig.baseUrl + '/login',
		{
			query:{
				method:'GET',
				url: appConfig.baseUrl + '/login',
				isArray: true
			}	

		})
	}]);