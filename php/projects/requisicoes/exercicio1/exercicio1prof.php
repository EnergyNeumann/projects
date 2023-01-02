<?php
extract($_REQUEST, EXTR_OVERWRITE);//ele pega o nome das "variaveis name", no caso num1 e num2 do: Digite o primeiro numero: <input type="text" name="num1" size="20" />, e já transcreve para uma variavel "$". a variavel só precisa estar com o msm nome do "name", assim, já será transcrita para tal
echo ("Seus dois numeros são: " . $num1 . " e " . $num2 . "<br/>");
echo ("Você selecionou: " . $oparitmetica . "<br/>");
if ($num1 != " " && $num2 != " "){//se numero 1 e numero 2 são diferentes de vazio, então executa o switch
switch ($oparitmetica){//pegou o nome oparitmetica: <select size=4 name="oparitmetica">, e passou para variavel
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
}
echo (" O resultado é " . $resultado);
?>