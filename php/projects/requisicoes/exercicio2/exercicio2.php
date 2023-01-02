<?php
$num1=($_REQUEST["num1"]);
$num2=($_REQUEST["num2"]);
echo ("Seus dois numeros são: " . $num1 . " e " . $num2 . "<br/>");
echo ("Você selecionou: " . $_REQUEST["oparitmetica"] . "<br/>");
switch ($_REQUEST["oparitmetica"]){
    case "soma";
        $resultado = $num1 + $num2;
        break;
    case "subtracao";
        $resultado = $num1 - $num2;
        break;
    case "multiplicacao";
        $resultado = $num1 * $num2;
        break;
    case "divisao";
        $resultado = $num1 / $num2;
        break;
}
echo (" O resultado é " . $resultado);
?>