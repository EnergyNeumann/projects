<?php 
// CONEXÃO COM BANCO DE DADOS
$servidor = '127.0.0.1'; //nosso servidor web localhost
//$servidor = 'localhost'
$usuario = "root"; //usuario mysql
$senha = ""; //senha
$bancodedados = "Aulas_PHP"; //nome do banco de dados

$conexao = mysqli_connect($servidor, $usuario, $senha, $bancodedados); //fazer a conexão com o banco de dados

if (mysqli_connect_errno ())
{
	echo "Problema para conectar o banco, verefique os dados!";
}
else
{
	// echo "conexão realizada com sucesso";
}
?>