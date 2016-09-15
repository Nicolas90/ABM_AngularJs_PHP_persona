var miapp = angular.module("angularABM",['ui.router']);


miapp.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state(
		"inicio",
		{
			url:'/inicio',
			controller: "controlInicio",
			templateUrl: "inicio.html"
		}
		)
	.state(
		"persona",
		{
			url:'/persona',
			abstract:true,
			templateUrl:"abstractaPersona.html"
		}
		)
	.state(
		"persona.menu",
		{
			url:'/menu',
			//templateUrl:"personaMenu.html"
			views:{
				"contenido":
				{
					templateUrl:"personaMenu.html",
					controller:"controlPersonaMenu"
				}
				
			}
		}
		)
	.state(
		"persona.alta",
		{
			url:'/alta',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"personaalta.html",
					controller:"controlPersonaalta"
				}
				
			}
		}
		)
	.state(
		"persona.login",
		{
			url:'/login',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"personalogin.html",
					controller:"controlPersonalogin"
				}
				
			}
		}
		)
	$urlRouterProvider.otherwise("/inicio");


});

miapp.controller("controlInicio",function($scope){


});

miapp.controller("controlPersonaMenu",function($scope,$state){

	$scope.iraalta = function(){

		$state.go("persona.alta");
		/*
			<a ui-sref="persona.menu()">About</a>
		
			ejemplo  para un redireccionamiento en un html
		*/
	};

});

miapp.controller("controlPersonaalta",function($scope){


});

miapp.controller("controlPersonalogin",function($scope){


});