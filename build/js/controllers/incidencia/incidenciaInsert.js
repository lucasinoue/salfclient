
angular.module('app.controllers')
	.controller('IncidenciaInsertController', ['$scope', '$location', 'Incidencia', function($scope, $location, Incidencia){
		
		$scope.incidencia = new Incidencia();

		$scope.salvar = function() {
			$scope.incidencia.$save().then(function() {
					$location.path('/incidencia');
				});
		}

		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);