/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('LoginController', ['$scope', '$location','Login', function($scope,$location,Login){
			

		$scope.login = function(){

			$location.path('/home');
		};

	}]);