var miapp = angular.module("angularABM",['ui.router','angularFileUpload']);


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
			templateUrl:"abstractaPersona.html",
			controller:"controlPersonaAbstracta"
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
			templateUrl:"abstractaEntrada.html",
			controller:"controlEntrada"
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
	.state(
		"juego",
		{
			url:'/juego',
			abstract:true,
			templateUrl:"abstractaJuegos.html",
			//controller:"controlPersonaAbstracta"
		}
		)
	.state(
		"juego.adivinaElNumero2",
		{
			url:'/adivinaElNumero2',
			//templateUrl:"personaMenu.html"
			views:{
				"contenido":
				{
					templateUrl:"AdivinaElNumero2.html",
					controller:"controladorAdivinaElNumero2"
				}
				
			}
		}
		)
	$urlRouterProvider.otherwise("/inicio");


});

miapp.controller("controlInicio",function($scope,$state){


});


miapp.controller("controlPersonaAbstracta",function($scope,$state){
	//aca deberia hacer los  $state.go para que se redireccione hacia las paginas persona y no a los formularios

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

miapp.controller("controlPersonaAlta",function($scope,$state,$http,FileUploader){
	$scope.DatoTest="**alta**";

//inicio las variables

  $scope.registro={};
  $scope.registro.nombre= "natalia" ;
  $scope.registro.apellido= "natalia" ;
  $scope.registro.edad= 20 ;
  $scope.registro.dni= 1234567 ;
  $scope.registro.email= "qwe@asd" ;
  $scope.registro.password= "123" ;
  $scope.registro.copiaPassword= "123" ;


  //$scope.persona.foto="sinfoto";



  $scope.SubidorDeArchivos = new FileUploader({url:'servidor/archivos.php'});
  $scope.SubidorDeArchivos.onSuccessItem=function(item,response,status,headers){

  	console.info('onSuccessItem', item, response, status, headers);

  };





  $scope.Guardar=function(){


  	console.log("persona a guardar:");
    console.log($scope.registro);

    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  */

  }

});

miapp.controller("controlPersonaGrilla",function($scope,$state){
	//aca deberia copiar lo de app.js , el controlador de grilla

});


miapp.controller("controlEntrada",function($scope,$state){


  $scope.irALogin=function(){
  	console.log("irALogin");
  	$state.go("entrada.login");
  };
$scope.irARegistro=function(){
  	console.log("irARegistro");
  	$state.go("entrada.registro");
  };

});


miapp.controller("controlEntradaLogin",function($scope,$state){




  $scope.Ingresar=function(){
    console.log("Logueo de la persona:");
    console.log($scope.login);


    $state.go("persona.menu");
  };




  	/*sacar esto y los botones en el html, solo esta de prueba*/
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




  	/*sacar esto y los botones en el html, solo esta de prueba*/
  $scope.irARegistro=function(){
  	console.log("irARegistro");
  	$state.go("entrada.registro");
  };
$scope.irALogin=function(){
  	console.log("irALogin");
  	$state.go("entrada.login");
  };

});



miapp.controller('controladorAdivinaElNumero2',function($scope,$state){
	$scope.datos={};
	$scope.datos.NumeroIngresado="Ingrese número";
	$scope.datos.Intentos="intentos";
	
	var numeroSecreto = 0;



	$scope.comenzar=function(){

		$scope.datos.Intentos = 0;
  		numeroSecreto = Math.floor((Math.random() * 100) + 1);

  		alert(numeroSecreto);
 	}

 	$scope.verificar=function(){
  		
 		++$scope.datos.Intentos;
 		var num = parseInt($scope.datos.NumeroIngresado);

 		if ( num > numeroSecreto ) 
 		{
 			alert("se pasó…");
 		}
 		else if ( num < numeroSecreto ) 
 		{
 			alert("falta…");
 		}
 		else
 		{
 			if ($scope.datos.Intentos==1) { alert("usted es un Psíquico"); }
 			else if ($scope.datos.Intentos==2) { alert("excelente percepción"); }
 			else if ($scope.datos.Intentos==3) { alert("Esto es suerte"); }
 			else if ($scope.datos.Intentos==4) { alert("Excelente técnica"); }
 			else if ($scope.datos.Intentos==5) { alert("usted está en la media"); }
 			else if (($scope.datos.Intentos>=6) && ($scope.datos.Intentos<10)) { alert("falta técnica"); }
 			else if ($scope.datos.Intentos>=10) { alert("afortunado en el amor!!"); }
 			

 			//alert("Usted es un ganador!!! y en solo " + $scope.datos.Intentos + " intentos");
 		}
 	}
});