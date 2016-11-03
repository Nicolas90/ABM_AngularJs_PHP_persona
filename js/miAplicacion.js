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
		$scope.DatoTest="**grilla**";
 	console.log("estoy en la grilla");



  $http.get('http://localhost:8080/ws1/usuarios')//"http://www.mocky.io/v2/57c8ab94120000be13e76a92")
  .then(function bien(respuesta){

    console.info("volvio: ",respuesta.data);


    $scope.ListadoPersonas = respuesta.data;


  },function mal(error){

    console.info("error: ",error);

    $scope.ListadoPersonas = [];

  });

/*

	$http.get("http://www.mocky.io/v2/57c8ab94120000be13e76a92")
  .then(function bien(respuesta){

    console.info("volvio: ",respuesta.data);


    $scope.ListadoPersonas = respuesta.data;


  },function mal(error){

    console.info("error: ",error);

    $scope.ListadoPersonas = [];

  });
*/
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
  //$scope.uploader=new FileUploader({url:'http://localhost:8080/ws1/foto'});
  $scope.uploader=new FileUploader({url:'http://localhost/ws1/foto'});
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="pordefecto.png";
  //$scope.foto="fotos/pordefecto.png";
  //$scope.persona.foto="fotos/pordefecto.png";
  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
	//$http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
	//$http.post('http://localhost:8080/ws1/alta/' + JSON.stringify($scope.persona))
	$http.post('http://localhost/ws1/alta/' + JSON.stringify($scope.persona))
	  .then(function(respuesta) {     	
			 //aca se ejetuca si retorno sin errores  
			 //console.info("lalalalala" + respuesta.data);

		 //console.log(respuesta.data);
		 

		 $state.go("persona.grillaOriginal");
		 /*
				cuando cargo la imagen por primera vez, en la grilla me da un error de GET
				y me la reconoce en menos de medio segundo, ver que pasa con eso
		 */
	},function errorCallback(response) {     		
			//aca se ejecuta cuando hay errores
			console.log( response);     			
	  });
	//console.info("Ya guardé el archivo.", item, response, status, headers);
  };


  $scope.Guardar=function(){
	//console.log($scope.uploader.queue);
	
	if($scope.uploader.queue[0]!=undefined)
	{
		var nombreFoto = $scope.uploader.queue[0]._file.name;
		$scope.persona.foto=nombreFoto;
	}
	$scope.uploader.uploadAll();
  	//console.log("persona a guardar:");
    //console.log($scope.persona);
	

  

  }
});




miapp.controller('controlGrilla', function($scope, $http, $state, GrillaABM) {
  	$scope.DatoTest="**grilla**";
 	


  	GrillaABM.traerListado().then(function(respuesta){
  		
	  	//console.info("Respuesta en controlGrilla: ",respuesta);
  		$scope.ListadoPersonas = respuesta;
  		

  	},function(error){

        console.info("Error en listado controlGrilla: ",error);

  	});




 	$scope.Borrar=function(persona){
		console.log("Borrar persona:",persona);

		GrillaABM.borrarPersona(JSON.stringify(persona.id)).then(function(respuesta) {            
	        //console.log("Respuesta borrar en controlGrilla",respuesta);



	        GrillaABM.traerListado().then(function(respuesta){

		  		
			  	//console.info("Respuesta en controlGrilla: ",respuesta);
		  		$scope.ListadoPersonas = respuesta;
		  		

			  	},function(error){

			        console.info("Error en listado controlGrilla: ",error);

			  	});



		    },function(error){

     		   console.info("Error en borrar controlGrilla: ",error);

  			});
 	}
});





miapp.controller('controlModificacion', function($scope, $http, $state, $stateParams, FileUploader)//, $routeParams, $location)
{
	$scope.persona={};
	$scope.DatoTest="**Modificar**";
	//$scope.uploader=new FileUploader({url:'PHP/nexo.php'});
	$scope.uploader=new FileUploader({url:'http://localhost/ws1/foto'})
	console.log($stateParams);//$scope.persona=$stateParams;
	$scope.persona.id=$stateParams.id;
	$scope.persona.nombre=$stateParams.nombre;
	$scope.persona.apellido=$stateParams.apellido;
	$scope.persona.dni=$stateParams.dni;
	$scope.persona.foto=$stateParams.foto;
	$scope.uploader.onSuccessItem=function(item, response, status, headers)
	{

		//$http.post('PHP/nexo.php', { datos: {accion :"modificar",persona:$scope.persona}})
		$http.put('http://localhost/ws1/modificar/' + JSON.stringify($scope.persona))
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



miapp.service('GrillaABM', function ($http) {
    
    this.nombre = "GrillaABM";
    this.traerListado = traerListado;
    var UsusariosUrl = 'http://localhost/ws1/usuarios';
    this.borrarPersona = borrarPersona;
    var BorrarPersonaUrl = 'http://localhost/ws1/borrar/';




    function traerListado(){

    	return $http.get(UsusariosUrl).then(


    		function(respuesta){
    			//console.info("respuesta en servicio GrillaABM: ",respuesta.data);

    			return respuesta.data;
    		}
    		,function(error){
    			console.info("Error en servicio GrillaABM: ",error);

    			return error;
    		}
    		);

    }


    function borrarPersona(personaID){


		return	$http.delete(BorrarPersonaUrl + personaID).then(


			function(respuesta) {       
		        //aca se ejetuca si retorno sin errores        
		        //console.log("Borrar en servicio GrillaABM: ",respuesta);


		        return respuesta;
		    }
		    ,function(error){
    			//console.info("Error en borrar GrillaABM: ",error);

    			return error;
    		}
    		);
}


miapp.service('AltaABM', function ($http) {
    
    this.nombre = "GrillaABM";
    this.traerListado = traerListado;
    var UsusariosUrl = 'http://localhost/ws1/usuarios';
    this.borrarPersona = borrarPersona;
    var BorrarPersonaUrl = 'http://localhost/ws1/borrar/';




    function traerListado(){

    	return $http.get(UsusariosUrl).then(


    		function(respuesta){
    			//console.info("respuesta en servicio GrillaABM: ",respuesta.data);

    			return respuesta.data;
    		}
    		,function(error){
    			console.info("Error en servicio GrillaABM: ",error);

    			return error;
    		}
    		);

    }


}






/*
    $http.get('http://localhost/ws1/usuarios')
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data;
      	 console.log("Listado de Personas1:",respuesta.data);
      	 

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     			
 	 });
*/



  });