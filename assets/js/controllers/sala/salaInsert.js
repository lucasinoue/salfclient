
angular.module('app.controllers')
	.controller('SalaInsertController', ['$scope', '$location', 'Sala', function($scope, $location, Sala){
		
		$scope.sala = new Sala();

		$scope.salvar = function() {
			$scope.sala.$save().then(function() {
					$location.path('/sala');
				});
		}

		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);