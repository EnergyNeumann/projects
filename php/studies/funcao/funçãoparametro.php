<?php


function mais5(&$numero) {
$numero += 5;

print ("</br></br> Valor dentro da function "  .  $numero);
}

$a = 3;
print ("</br></br> Valor antes da execução da function "  .  $a);
mais5($a); //$a continua valendo 3
print ("</br></br> Valor após execução da function "  .  $a);

?>