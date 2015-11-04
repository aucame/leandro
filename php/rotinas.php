<?php

$bd = "teste";
$server ="localhost";
$user = "root";
$password = "1";

$conn = mysqli_connect($server,$user,$password, $bd);

switch($_GET['action']) {

	case 'add_cliente' :

		$data = json_decode(file_get_contents("php://input"));

		$DBnome    = $data->nome;
		$DBemail   = $data->email;
		$DBfone  	 = $data->fone;
		$DBempresa = $data->empresa;
		$DBsite    = $data->site;

		$qry = 'INSERT INTO tanuncio(nome,email,telefone,empresa,site) values ("' . $DBnome . '","' . $DBemail . '","' .$DBfone . '","'.$DBempresa. '","'.$DBsite. '")';

		$result = mysqli_query($conn, $qry);
		break;

	case 'email' :

		$to = "aucame@gmail.com";
		$subject = "teste";
		$txt = "email enviado";
		$headers = "From: aucame@gmail.com" . "\r\n" .
		"CC: aucame@hotmail.com";

		mail($to,$subject,$txt,$headers);

		break;

	case 'get_cliente' :

		$qry = mysqli_query($conn, 'SELECT * from tanuncio');

		$data = array();

		while($rows = mysqli_fetch_array($qry))
		{
			$data [] = array(
			"nome" => $rows['nome'],
			"email" => $rows['email'],
			"telefone" => $rows['telefone'],
			"empresa" => $rows['empresa'],
			"site" => $rows['site']
			);
		}
		echo json_encode($data);

		break;

  }
?>
