angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$http.get('v1/fotos')
		.success(function(fotos) {
			$scope.fotos = fotos;
		})
		.error(function(erro) {
			console.erro('As fotos não foram carregadas')
		});
});