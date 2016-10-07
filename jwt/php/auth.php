<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$DatosDelModeloPorPost = file_get_contents('php://input');
$user = json_decode($DatosDelModeloPorPost);

$token = array();


//si recivo este email y password le devuelvo un token con estas propiedades, sino un token con false
if ($user->email == 'email@qwe' && $user->password == '1234')
{
	$key = "1234";
	$token['iat'] = time();	//momento en el cual se creo
	$token['exp'] = time()+999999999999;//$token['exp'] = time()+20;	//expiracion (en segundos, tal vez)


	$token['username'] = "usuario";
	$token['tipoUsuario'] = "admin";
	

	$jwt = JWT::encode($token , $key);

	//el nombre del token tiene que ser el mismo que el de javascript, en el config $authProvider.tokenName
	$ArrayConToken["ElNombreDelToken"]=$jwt;
}
else
{
	$ArrayConToken["ElNombreDelToken"]=false;
}




echo json_encode($ArrayConToken);


?>