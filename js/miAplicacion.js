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
					templateUrl:"personaAlta.html",
					controller:"controlPersonaAlta"
				}
				
			}
		}
		)
	.state(
		"persona.grilla",
		{
			url:'/grilla',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"personaGrilla.html",
					controller:"controlPersonaGrilla"
				}
				
			}
		}
		)
	.state(
		"entrada",
		{
			url:'/entrada',
			abstract:true,
			templateUrl:"abstractaEntrada.html"
		}
		)
	.state(
		"entrada.login",
		{
			url:'/login',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"entradaLogin.html",
					controller:"controlEntradaLogin"
				}
				
			}
		}
		)
	.state(
		"entrada.registro",
		{
			url:'/registro',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"entradaRegistro.html",
					controller:"controlEntradaRegistro"
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

miapp.controller("controlPersonaAlta",function($scope){


});

miapp.controller("controlPersonaGrilla",function($scope){
	//aca deberia copiar lo de app.js , el controlador de grilla

});


miapp.controller("controlEntradaLogin",function($scope,$state){




  $scope.Ingresar=function(){
    console.log("Logueo de la persona:");
    console.log($scope.login);


    $state.go("persona.menu");
  };


  $scope.irALogin=function(){
  	console.log("irALogin");
  	$state.go("entrada.login");
  };
$scope.irARegistro=function(){
  	console.log("irARegistro");
  	$state.go("entrada.registro");
  };

});


miapp.controller("controlEntradaRegistro",function($scope,$state){
  $scope.DatoTest="**registro**";

//inicio las variables
  $scope.registro={};
  /*
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";
  */


  $scope.Registrarse=function(){
    console.log("Registro de la persona:");
    console.log($scope.registro);


    $state.go("persona.menu");
  };


  $scope.irARegistro=function(){
  	console.log("irARegistro");
  	$state.go("entrada.registro");
  };
$scope.irALogin=function(){
  	console.log("irALogin");
  	$state.go("entrada.login");
  };

});