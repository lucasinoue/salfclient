/*angular.module('app.controllers')
	.controller('SalaEditController', ['$scope', '$location', '$routeParams','Sala', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Sala,
			ngNotify){
		
		$scope.sala = new Sala.show({id: $routeParams.id});

		$scope.salvar = function(){
			if($scope.form.$valid){

				Sala.update({id: $routeParams.id}, 
					            $scope.sala, 
			    function(){
					$location.path('/sala');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};


		$scope.voltar = function(){
			$location.path('/sala');
		};


	}]);*/


angular.module('app.controllers')
	.controller('SalaEditController', ['$scope', '$location', '$routeParams','Sala', 'ngNotify',
		function(
			$scope, 
			$location, 
			$routeParams, 
			Sala,
			ngNotify){
		
		$scope.sala = new Sala.show({id: $routeParams.id});


		$scope.salvar = function(){
			if($scope.form.$valid){

				Sala.update({id: $routeParams.id}, 
					            $scope.sala, 
			    function(){
					$location.path('/sala');
					ngNotify.set('Cadastro atualizado com sucesso!','success');
				});
			}
		};
		$scope.voltar = function(){
			$location.path('/departamento');
		};
	}]);