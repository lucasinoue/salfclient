
angular.module('app.controllers')
	.controller('SalaInsertController', ['$scope', '$location', 'Sala', 'ngNotify', function($scope, $location, Sala, ngNotify){
		
		$scope.sala = new Sala();

		$scope.salvar = function() {
			$scope.sala.$save().then(function() {
					$location.path('/sala');
					ngNotify.set('Sala cadastrada com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);