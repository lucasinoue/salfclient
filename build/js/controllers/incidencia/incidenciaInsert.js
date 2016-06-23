
angular.module('app.controllers')
	.controller('IncidenciaInsertController', ['$scope', '$location', 'Incidencia', 'ngNotify', function($scope, $location, Incidencia, ngNotify){
		
		$scope.incidencia = new Incidencia();

		$scope.salvar = function() {
			$scope.incidencia.$save().then(function() {
					$location.path('/incidencia');
					ngNotify.set('Incidência cadastrada com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/incidencia');
		};


	}]);