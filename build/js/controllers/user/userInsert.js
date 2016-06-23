
angular.module('app.controllers')
	.controller('UserInsertController', ['$scope', '$location', 'User', 'Departamento', 'ngNotify', function($scope, $location, User, Departamento, ngNotify){
		
		$scope.user = new User();
		$scope.departamentos = new Departamento.query();

		$scope.salvar = function() {
			$scope.user.$save().then(function() {
					$location.path('/usuario');
					ngNotify.set('Usuário cadastrado com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/usuario');
		};


	}]);