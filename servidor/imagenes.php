<?php
	require_once('../PHP/clases/Personas.php');

	if ( !empty( $_FILES ) ) {
	    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];

	    //$withoutExt = preg_replace('/\\.[^.\\s]{3,4}$/', '', $_FILES[ 'file' ][ 'tmp_name' ][ 'name' ]);

	    //$uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $withoutExt . $_FILES[ 'file' ][ 'name' ];


	    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
	    move_uploaded_file( $tempPath, $uploadPath );
	    $answer = array( 'answer' => 'File transfer completed' );
	    $json = json_encode( $answer );
	    echo $json;
	} else {
	    echo 'No files';
	}
?>