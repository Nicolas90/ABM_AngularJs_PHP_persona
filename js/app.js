
var app = angular.module('ABMangularPHP', []);


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});


app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";

//inicio las variables
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
 $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";


  $scope.Guardar=function(){


  	console.log("persona a guardar:");
    console.log($scope.persona);

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


app.controller('controlGrilla', function($scope, $http) {
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


 /*	$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     		
 	 });*/




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
 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);



/*$http.post("PHP/nexo.php",{accion :"borrar",persona:persona},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
.success(function(data, status, headers, config) {
    console.log("bien"+data);
  }).error(function(data, status, headers, config) {
     console.log("mal"+data);
});*/


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




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});


app.controller('controlRegistro', function($scope, $http) {
  $scope.DatoTest="**registro**";

//inicio las variables
  $scope.registro={};
  /*
  $scope.persona.nombre= "natalia" ;
  $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";
  */


  $scope.Guardar=function(){


    console.log("Registro de la persona:");
    console.log($scope.registro);



  }
});

app.controller('controlLogin', function($scope, $http) {
  $scope.DatoTest="**registro**";

//inicio las variables
  $scope.login={};
  $scope.login.minlength=7;


  $scope.Ingresar=function(){


    console.log("Datos de login:");
    console.log($scope.login);


    if (($scope.login.email=="123@q") && ($scope.login.password=="1234567")) 
    {
      console.log("validado");
    };



  }
});