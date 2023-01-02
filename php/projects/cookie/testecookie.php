<?php setcookie("visitado", "S"); ?>
<html>
<body>
<h1>Bem-vindo a esta página!</h1>
<?php
if (isset($_COOKIE["visitado"])) {
echo("Você já visitou esta página antes!");
}
?>
</body>
</html>