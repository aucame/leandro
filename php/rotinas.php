<?php

$bd = "mbcorporate03";
$server ="mysql.mbcorporate.com.br";
$user = "mbcorporate03";
$password = "ilovemozao";

//$conn = mysqli_connect($server,$user,$password, $bd);

switch($_GET['action']) {

	case 'add_cliente' :

		$data = json_decode(file_get_contents("php://input"));

		$DBnome    = $data->nome;
		$DBemail   = $data->email;
		$DBfone  	 = $data->fone;
		$DBempresa = $data->empresa;
		$DBsite    = $data->site;

echo $DBnome;

//		$qry = 'INSERT INTO clientes (nome,endereco,cidade,cep) values ("' . $DBnome . '","' . $DBendereco . '","' .$DBcidade . '","'.$DBcep.'")';
//		$result = mysqli_query($conn, $qry);
		break;

  }

?>
