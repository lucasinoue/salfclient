
angular.module('app.controllers')
	.controller('UserEditController', ['$scope', '$location', '$routeParams','User', 'Departamento', 'ngNotify', 
		function(
			$scope, 
			$location, 
			$routeParams, 
			User,
			Departamento,
			ngNotify){
		
		$scope.user = new User.show({id: $routeParams.id});
		
		$scope.departamentos = new Departamento.query();

		$scope.salvar = function(){
			if($scope.form.$valid){

				User.update({id: $routeParams.id}, 
					            $scope.user, 
			    function(){
					$location.path('/usuario');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/usuario');
		};


	}]);