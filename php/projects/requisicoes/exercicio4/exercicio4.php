<?php
extract($_REQUEST,EXTR_OVERWRITE);
if (is_numeric($quantidade)) {
    # code...
    switch($_REQUEST["lanche"]){
        case "100":
            $valor = 1.2 * $quantidade; break;
        case "101":
            $valor = 1.3 * $quantidade; break;
        case "102":
            $valor = 1.5 * $quantidade; break;
        case "103":
            $valor = 1.2 * $quantidade; break;
        case "104":
            $valor = 1.3 * $quantidade; break;
        case "105":
            $valor = 1 * $quantidade; break;
    }
    if ($recheio) {
        # code...
        $valor = $valor + 0.25;
    }
    echo "O valor ficou em: " . $valor;
}
else{
    echo "Por favor, digite um valor válido para quantidade! ";
}