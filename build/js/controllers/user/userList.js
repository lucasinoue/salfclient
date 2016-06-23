/**
* app.controllers Module
*
* Description
*/
angular.module('app.controllers')
	.controller('UserListController', ['$scope', '$location', 'User', function($scope,$location,User){
			
		$scope.user = new User.query();

		$scope.novo = function(){

			$location.path('/usuario/cadastro');
		};

		$scope.menu = function(){

			$location.path('/home');
		};

	}]);