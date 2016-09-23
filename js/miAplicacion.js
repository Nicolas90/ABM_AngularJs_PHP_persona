var miapp = angular.module("angularABM",['ui.router','angularFileUpload','satellizer']);


miapp.config(function($stateProvider,$urlRouterProvider,$authProvider){

	//$authProvider.loginUrl = 'ABM_AngularJs_PHP_Persona';
	$authProvider.loginUrl = 'ABM_AngularJs_PHP_persona/jwt/php/auth.php';
	$authProvider.tokenName = 'ElNombreDelToken';
	$authProvider.tokenPrefix = 'Aplicacion';
	$authProvider.authHeader = 'data';


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




	/*			traidos de app.js			*/
	.state(
		"persona.altaOriginal",
		{
			url:'/altaOriginal',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"alta.html",
					controller:"controlAlta"
				}
				
			}
		}
		)
	.state(
		'persona.modificacionOriginal',
		{
			url: '/modificacionOriginal/{id}?:nombre:apellido:dni:foto',
			views:{
				"contenido":
				{
					templateUrl: 'alta.html',
					controller: 'controlModificacion'
				}
	
			}
		}
		)
	.state(
		"persona.grillaOriginal",
		{
			url:'/grillaOriginal',
			//templateUrl:"personaalta.html"
			views:{
				"contenido":
				{
					templateUrl:"grilla.html",
					controller:"controlGrilla"
				}
				
			}
		}
		)
	/*			traidos de app.js FIN		*/




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



/////////////////////////////CONTROLLERS ORIGINALES (MODIFICADOS)







/////////////////////////////CONTROLLERS NUEVOS

miapp.controller("controlInicio",function($scope,$state){


});


miapp.controller("controlPersonaAbstracta",function($scope,$state){
	//aca deberia hacer los  $state.go para que se redireccione hacia las paginas persona y no a los formularios

});


miapp.controller("controlPersonaMenu",function($scope,$state,$auth){

	if (!$auth.isAuthenticated()) 
	{
		$state.go("entrada.login");
	}


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


miapp.controller("controlEntradaLogin",function($scope,$state,$auth){
$scope.login={};
$scope.login.email="email@qwe";
$scope.login.password="1234";

$auth.logout();//para destruir si tengo un token de antes,aunque este expirado y no me deje pasar a menu igual lo destruyo por si las dudas

/*
	if ($auth.isAuthenticated()) 
	{
		console.log("token",$auth.getPayload());
	}
	else
	{
		console.log("no token",$auth.getPayload());
	}
*/



  $scope.Ingresar=function(){
    
    //esto es una llamada $http , va a ir a $authProvider.loginUrl , en este caso es 'ABM_AngularJs_PHP_persona/jwt/php/auth.php';
    $auth.login($scope.login).then(function(response){

    	console.info("correcto",response);
    	console.log("token ingresado",$auth.getPayload());

    	$state.go("persona.menu");

    }).catch(function(response){
    	console.info("NO VOLVIO BIEN",response);
    });
  };

	$scope.Token=function(){

    	
    	console.log("token ingresado",$auth.getPayload());
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





























/*		ORIGINALES (MODIFICADOS)		*/


miapp.controller('controlAlta', function($scope, $http, $state, FileUploader) {
  $scope.DatoTest="**alta**";
  

//inicio las variables
  $scope.uploader=new FileUploader({url:'PHP/nexo.php'});
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="pordefecto.png";
  //$scope.foto="fotos/pordefecto.png";
  //$scope.persona.foto="fotos/pordefecto.png";
  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
	$http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
	  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores      	
		 console.log(respuesta.data);
		 $state.go("persona.grillaOriginal");

	},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
			console.log( response);     			
	  });
	console.info("Ya guardé el archivo.", item, response, status, headers);
  };


  $scope.Guardar=function(){
	console.log($scope.uploader.queue);
	if($scope.uploader.queue[0]!=undefined)
	{
		var nombreFoto = $scope.uploader.queue[0]._file.name;
		$scope.persona.foto=nombreFoto;
	}
	$scope.uploader.uploadAll();
  	console.log("persona a guardar:");
    console.log($scope.persona);
	

  

  }
});




miapp.controller('controlGrilla', function($scope, $http, $state) {
  	$scope.DatoTest="**grilla**";
 	
 	$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     			/*

					https://docs.angularjs.org/api/ng/service/$http

     			the response object has these properties:

				data – {string|Object} – The response body transformed with the transform functions.
				status – {number} – HTTP status code of the response.
				headers – {function([headerName])} – Header getter function.
				config – {Object} – The configuration object that was used to generate the request.
				statusText – {string} – HTTP status text of the response.
						A response status code between 200 and 299 is considered a success
						 status and will result in the success callback being called. 
						 Note that if the response is a redirect, XMLHttpRequest will 
						 transparently follow it, meaning that 
						 the error callback will not be called for such responses.
 	 */
 	 });
	/*$scope.Modificar=function(persona)
	{
		$state.go("modificacion", persona);
	};*/

 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);



$http.post("PHP/nexo.php",{datos:{accion :"borrar",persona:persona}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
 .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);
		 $http.get('PHP/nexo.php', { params: {accion :"traer"}})
		.then(function(respuesta) {     	

			 $scope.ListadoPersonas = respuesta.data.listado;
			 console.log(respuesta.data);

		},function errorCallback(response) {
				 $scope.ListadoPersonas= [];
				console.log( response);
		 });

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
 	}




 	/*$scope.Modificar=function(persona){
 		$http.post('PHP/nexo.php', { datos: {accion :"modificar",persona:$scope.persona}})
		  .then(function(respuesta) {     	
				 //aca se ejetuca si retorno sin errores      	
			 console.log(respuesta.data);
			 location.href="formGrilla.html";

		},function errorCallback(response) {     		
				//aca se ejecuta cuando hay errores
				console.log( response);     			
		  });
 		/*console.log("Modificar"+id);
		$http.post("PHP/nexo.php", {datos:{accion:"buscar", id:id}})
		.then(function(respuesta)
		{
			var persona=respuesta.data;
			$state.go("alta");//location.href="formAlta.html";
			$scope.DatoTest=persona.nombre;
			console.log(persona);
		} ,function errorCallback(response) {        
			//aca se ejecuta cuando hay errores
			console.log(response);           
		});
 	}*/





});


miapp.controller('controlModificacion', function($scope, $http, $state, $stateParams, FileUploader)//, $routeParams, $location)
{
	$scope.persona={};
	$scope.DatoTest="**Modificar**";
	$scope.uploader=new FileUploader({url:'PHP/nexo.php'});
	console.log($stateParams);//$scope.persona=$stateParams;
	$scope.persona.id=$stateParams.id;
	$scope.persona.nombre=$stateParams.nombre;
	$scope.persona.apellido=$stateParams.apellido;
	$scope.persona.dni=$stateParams.dni;
	$scope.persona.foto=$stateParams.foto;
	$scope.uploader.onSuccessItem=function(item, response, status, headers)
	{
		$http.post('PHP/nexo.php', { datos: {accion :"modificar",persona:$scope.persona}})
		.then(function(respuesta) 
		{
			//aca se ejetuca si retorno sin errores      	
			console.log(respuesta.data);
			$state.go("persona.grillaOriginal");
		},
		function errorCallback(response)
		{
			//aca se ejecuta cuando hay errores
			console.log( response);     			
		});
		console.info("Ya guardé el archivo.", item, response, status, headers);
	};
	$scope.Guardar=function(persona)
	{
		if($scope.uploader.queue[0]!=undefined)
		{
			var nombreFoto = $scope.uploader.queue[0]._file.name;
			$scope.persona.foto=nombreFoto;
		}
		$scope.uploader.uploadAll();
	}
});




/*		ORIGINALES (MODIFICADOS)	FIN		*/