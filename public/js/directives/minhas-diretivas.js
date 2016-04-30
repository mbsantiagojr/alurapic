angular.module('minhasDiretivas', [])
	.directive('meuPainel', function () {
		// body...
		var ddo = {};

		ddo.restrict = "AE";
		ddo.scope = {
			titulo: "@titulo"
		}
		ddo.transclude = true;
		ddo.templateUrl = "js/directives/meu-painel.html";

		return ddo;

	})
	.directive('minhaFoto', function () {
		// body...
		var ddo = {};

		ddo.restrict = "AE";
		ddo.scope = {
			url: "@url",
			titulo: "@titulo"
		}

		ddo.template= '<img src="{{url}}" alt="{{titulo}}" class="img-responsive center-block">';

		return ddo;

	})