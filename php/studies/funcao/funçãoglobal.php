<?php
$php = "Testando";
$php1 = "Eu sou GLOBAL";

function Teste() { 
global $php;
print ( "</br></br> Variável Global " . $php);
$php = "Alterou o meu valor rsrsrs";
}


print ( "</br></br> Variável Global-Valor antes da execução da function " . $php);
Teste();

print ( "</br></br> Variável Global-Valor após execução da function " . $php);



?>