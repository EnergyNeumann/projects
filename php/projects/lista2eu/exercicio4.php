<?php
$p = array("Lapis" => 10, "Caderno" => 20, "Caneta" => 30, "Cola" => 5);//atribuindo à variavel p, os valores de uma array, com materiais escolares, e o preço de cada um.
foreach ($p as &$valor){//dizendo que o $valor, será os preços, pois é colocado & para ligação direta.
    $valor = $valor / 1.10;//codigo para o decrescimo de 10% dos preços.
    echo number_format($valor,2) . "\n";//print do preço com o decrescimo.
}
foreach ($p as $nome => $valor2){//codigo para se obter o nome (chave), e os preços (valor), logo em seguida. Usei outra variavel para valor, para que assim, os valores sejam impressos da forma correta, no produto especifico.
echo "\n" . "O produto " . $nome . " Tem valor " . number_format($valor2,2) . "\n";//print do nome e preço dos materiais.
}

?>
