<?php
$numeros = array (); //array vazia, pois será dado os numeros aleatorios
for ($i=1; $i <= 10 ; $i++) { //vetor em php sempre começa com 1: $i = 1. foi colocado 10 para ir até 10
    //inicializando o vetor
    $numeros[$i]=rand(0,50);//numeros será cada posição de $i. Com o rand, pegará um valor aleatório de 0 até 50
}
print_r($numeros);//pede os numeros

for ($i=1; $i <= 10 ; $i++) { 
    //exibir os dados do vetor
    echo "\n" . $numeros[$i] . " posição " . $i; //pega o valor dos numeros na posição i, mostra, e depois mostra a posição de $i
}

?>