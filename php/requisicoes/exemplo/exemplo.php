<?php
echo("Olá: " . $_REQUEST["nome"]);
echo("<br/>");
switch ($_REQUEST["estadocivil"]){
    case "1";
        $estado = "Solteiro";
        break;
    case "2";
        $estado = "Casado";
        break;
    case "3";
        $estado = "Divorciado";
        break;
}
echo ("Seu salário é " . $_REQUEST["salario"] . " e seu estado civil é " . $estado)
?>