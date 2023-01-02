<!doctype html>
<html>
<head>
<title>Inclusão de cursos</title>
</head>
<body>
<form action="processa_curso.php" method="post">
Código curso: <input type= "text" name="codigo_curso" /><br/><br/>
Nome Curso: <input type="text" name="nome_curso" /><br /><br/>
Duração: <input type="text" name="carga_horaria" /><br /><br/>
<input type="submit" name="Enviar" value="Inserir" />
</form
<?php
include 'conxao_bd.php';
if (isset($_POST['Enviar']))
{
	$Codigo = $_POST['codigo_curso'];
	$nome_curso = $_POST['nome_curso'];
	$carga_horario = $_POST['carga_horaria'];
	//echo $codigo_curso;
	//echo $nome_curso;
	//echo $carga_horaria;

	$query = "INSERT INTO tb_Cursos(Codigo,NomeCurso, Duracao) VALUES('$Codigo','$nome_curso', '$carga_horaria')";

	mysqli_query($conexao, $query);
	$Linhas = mysqli_affected_rows($conexao);
	if ($linhas == 1)
{
	echo "Registro incluído";
}
else
{
	echo "Conexão realizada com sucesso";
}
?>