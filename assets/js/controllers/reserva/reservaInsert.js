
angular.module('app.controllers')
	.controller('ReservaInsertController', ['$scope', '$location', 'Reserva', 'Sala', 'User', 'Motivo', 'Horarios', 'ngNotify',  function($scope, $location, Reserva, Sala, User, Motivo, Horarios, ngNotify){
		
		$scope.reserva = new Reserva();
		$scope.salas = new Sala.query();
		$scope.users = new User.query();
		$scope.motivos = new Motivo.query();
		$scope.horarios = new Horarios.query();

		$scope.salvar = function() {
			$scope.reserva.$save().then(function() {
					$location.path('/reserva');
					ngNotify.set('Reserva cadastrada com sucesso!','success');
				});
		}

		$scope.voltar = function(){
			$location.path('/reserva');
		};


	}]);