<?php


function mais5($numero) {
$numero += 5;

print ("</br> Valor dentro da function "  .  $numero);
}

$a = 3;
mais5($a); //$a continua valendo 3
print ("</br></br> Valor após execução da function "  .  $a);

?>