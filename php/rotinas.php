<?php

//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Credentials: true ");
//header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
//header("Access-Control-Allow-Headers: Content-Type");

	header("Access-Control-Allow-Origin: http://localhost");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Allow-Headers: Content-Type");
//   header("Access-Control-Max-Age: 86400");
//   if (strtolower($_SERVER['REQUEST_METHOD']) == 'options')
//   {
//      exit();
//   }

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

		if ($DBnome != '') {
				$qry = 'INSERT INTO tanuncio(nome,email,telefone,empresa,site) values ("' . $DBnome . '","' . $DBemail . '","' .$DBfone . '","'.$DBempresa. '","'.$DBsite. '")';
				$result = mysqli_query($conn, $qry);
		}
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
//echo 'passei';
		$qry = mysqli_query($conn, 'SELECT * from tanuncio');

		$data = array();

		while($rows = mysqli_fetch_array($qry))
		{

//echo $rows['nome'];

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
