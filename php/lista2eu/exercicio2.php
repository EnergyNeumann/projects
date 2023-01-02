<?php
$numeros = array();//variavel dos numeros
$nux = 10;//variavel do numero x, que é igual à 10
$contadordex = 0;//variavel do contador de vezes que o numero x apareceu
for ($i=1; $i <= 20 ; $i++) { //aqui é para ir aumentando as posições, e ter 20 números
    $numeros[$i]=rand(0,15);//codigo para gerar numeros aleatorios entre 0 a 15
}
print_r($numeros);//pede o valor dos numeros

for ($i=1; $i <= 20 ; $i++) { 
    //procurar numero x
    if ($numeros[$i] == $nux) { //se nos números há o valor de x, aumentará 1 no contador
    $contadordex++;
    echo "\n" . "A posição de " . $nux . " é " . $i;//diz aonde se encontra o numero x, que é 10, na posição dos numeros
}
}
echo "\n" . "o número " . $nux . " aparece " . $contadordex . " vezes no vetor";//diz quantas vezes o número x = 10, aparece.
?>