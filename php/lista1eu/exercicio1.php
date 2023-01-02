<?php
//Imprima as temperaturas de -50°C a 50°C, de 1 em 1 grau, e para cada valor imprima a temperatura correspondente em graus Fahrenheit, e se a sensação é congelante (menor que 0°C graus), fria (entre 0°C e 10°C), amena (entre 11°C a 23°C) ou quente (maior que 24°C). A conversão pode ser feita pela fórmula F = 1,8.C + 32, onde C é a temperatura em graus Celsius e F é a temperatura em graus Fahrenheit.

$tempC = -51; //celsius //numero. Ela começa com o valor -51, pois, o exercício pede para se inicializar imprimindo do -50 até o 50, e eu utilizei while, por isso, coloquei -51 logo no começo.
$tempF = 0; //fahrenheit //numero
$descSens = ""; //descrição da sensação térmica //string

//loop
    while ($tempC < 50){ //i é uma variável para percorrer um vetor, ou seja, ela é um ponteiro, posição de cada item do vetor. No caso, é usada a variável de Celsius, ao invés de i. E, é dito que, enquanto $tempC, que é -51, for menor que 50...
        $tempC++;//vai imprimir temperatura de -50 à 50, graças ao $tempC++
        if ($tempC <= 0){//se temperatura do celsius for maior, igual, ou menor que tal temperatura...
            $descSens="Congelante";//será determinada uma característica para ela.
        }elseif ($tempC > 0 and $tempC <= 10){//também se...
            $descSens= "Fria";
        }elseif ($tempC >=11 and $tempC <= 23){
            $descSens= "Amena";
        }else {//se não for nenhuma das anteriores, será quente.
            $descSens= "Quente";
        }
        $tempF=(1.8*$tempC)+32;//aqui é onde é dado o valor para a temperatura de fahrenheit, fazendo assim, a conta adequada para determina-la.
        echo "<b>Temperatura Celsius:</b> " . $tempC . " <b>Temperatura Fahrenheit:</b> " . $tempF . " <b>Sensação Térmica</b> " . $descSens . "<br>";//pedindo os valores 
    } 

?>