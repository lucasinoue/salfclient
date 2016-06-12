
angular.module('app.controllers')
	.controller('MotivoInsertController', ['$scope', '$location', 'Motivo', function($scope, $location, Motivo){
		
		$scope.motivo = new Motivo();

		$scope.salvar = function() {
			$scope.motivo.$save().then(function() {
					$location.path('/motivo');
				});
		}

		$scope.voltar = function(){
			$location.path('/motivo');
		};


	}]);