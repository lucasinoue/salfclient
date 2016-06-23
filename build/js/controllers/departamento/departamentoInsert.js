
angular.module('app.controllers')
	.controller('DepartamentoInsertController', ['$scope', '$location', 'Departamento', 'ngNotify', function($scope, $location, Departamento, ngNotify){
		
		$scope.departamento = new Departamento();

		$scope.salvar = function() {
			$scope.departamento.$save().then(function() {
					$location.path('/departamento');
					ngNotify.set('Departamento cadastrado com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/departamento');
		};


	}]);