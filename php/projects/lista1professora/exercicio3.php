<?php
//Escrever um programa que calcule e apresente o somatório de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo a seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do anterior. Um tabuleiro de xadrez tem 64 quadros.

//variáveis
$qtdGrao=1;
$totGrao=1;
$quadrados=0;

for ($quadrado = 1; $quadrado <= 64 ; $quadrado++) {
    #fazer a somatoria dos quadrados
    $qtdGrao= $qtdGrao*2;
    $totGrao= $totGrao + $qtdGrao;
}
echo "<b>Total de Grãos</b> " . $totGrao . "<br>";

?>