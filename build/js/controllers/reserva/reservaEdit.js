
angular.module('app.controllers')
	.controller('ReservaEditController', ['$scope', '$location', '$routeParams','Reserva', 'Sala', 'User', 'Motivo', 'Horarios', 'ngNotify', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			Reserva,
			Sala,
			User,
			Motivo,
			Horarios,
			ngNotify){
		
		$scope.reserva = new Reserva.show({id: $routeParams.id});
		$scope.salas = new Sala.query();
		$scope.users = new User.query();
		$scope.motivos = new Motivo.query();
		$scope.horarios = new Horarios.query();
		
		$scope.salvar = function(){
			if($scope.form.$valid){

				Reserva.update({id: $routeParams.id}, 
					            $scope.reserva, 
			    function(){
					$location.path('/reserva');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/reserva');
		};


	}]);