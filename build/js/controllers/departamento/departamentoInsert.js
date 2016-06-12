
angular.module('app.controllers')
	.controller('DepartamentoInsertController', ['$scope', '$location', 'Departamento', function($scope, $location, Departamento){
		
		$scope.departamento = new Departamento();

		$scope.salvar = function() {
			$scope.departamento.$save().then(function() {
					$location.path('/departamento');
				});
		}

		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);