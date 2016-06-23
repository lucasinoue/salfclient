angular.module('app.controllers')
	.controller('UserRemoveController', ['$scope', '$location', '$routeParams','User', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			User,
			ngNotify){
		
		$scope.user = new User.show({id: $routeParams.id});

		$scope.remove = function(){
			$scope.user.$delete().then(function(){
				$location.path('/usuario');
				ngNotify.set('Usuário removido com sucesso!','success');
			});
		};

		$scope.voltar = function(){
			$location.path('/usuario');
		};


	}]);