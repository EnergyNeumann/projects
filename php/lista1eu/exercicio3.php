<?php
//Escrever um programa que calcule e apresente o somatório de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo a seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do anterior. Um tabuleiro de xadrez tem 64 quadros.

//variáveis
$ValorGraos = 1;//variável da quantidade de grãos de trigo
$ValorTotal = 0;//variável do total de grãos
$ValorQuadra = 1;//variável da quantidade de quadrados

//loop
while ($ValorQuadra <= 64){//enquanto o número de quadrados for menor ou igual à 64...
    $ValorQuadra++; //aumente o número de quadrados...
    $ValorGraos= $ValorGraos*2; //quantidade de grãos é igual à quantidade de grãos x 2, para que assim, multiplique.
    $ValorTotal= $ValorTotal + $ValorGraos; //o valor total é igual ao número de grãos mais o valor total
}
echo "<b>Total de Grãos</b> " . $ValorTotal . "<br>";//pede o valor total.

?>