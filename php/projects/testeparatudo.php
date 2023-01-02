<?php
$p = array("Lapis" => 10, "Caderno" => 20, "Caneta" => 30, "Cola" => 5);
foreach ($p as &$valor) {
    $valor = $valor / 1.10;
    echo number_format($valor,2) . "\n";
}
foreach ($p as $nome => $valor){
echo "O produto " . $nome . " Tem valor " . $valor . "\n";
}

?>
