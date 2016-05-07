angular.module('alurapic')
	.controller('CadastroController', function ($scope, $http) {

		$scope.submeter = function () {
			if ($scope.formulario.$valid) {
				$http.post('v1/fotos', $scope.foto)
					.success(function() {
						$scope.mensagem = 'Foto Cadastrada com Sucesso!';
						console.log($scope.mensagem);

					})
					.error(function(erro) {
						console.log(erro);
						$scope.mensagem = 'Não foi Possível Cadastrar a Foto!';
					})
			}
		}
		// body...
	})