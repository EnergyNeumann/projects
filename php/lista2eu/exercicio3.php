<?php
$v = array();//variavel do valor
for ($i=1; $i <= 5 ; $i++) {//enquanto i for menor ou igual a 5, começará a aumentar. O valor sempre começa com 1, pois é array.
    $v[$i]=rand(0,50);//pede números aleatórios entre 0 e 50.
    $vc = array_reverse($v);//diz que o valor ao contrario é array_reverse($v), ou seja, função de reverter, revertendo o valor de v, que serão os números aleatórios
}
    print_r($v);//pede os numeros
    print_r($vc);//pede os numeros invertidos
?>