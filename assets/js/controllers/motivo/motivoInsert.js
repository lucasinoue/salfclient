
angular.module('app.controllers')
	.controller('MotivoInsertController', ['$scope', '$location', 'Motivo', 'ngNotify', function($scope, $location, Motivo, ngNotify){
		
		$scope.motivo = new Motivo();

		$scope.salvar = function() {
			$scope.motivo.$save().then(function() {
					$location.path('/motivo');
					ngNotify.set('Motivo cadastrado com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);