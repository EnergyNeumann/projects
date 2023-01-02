<?php
//Imprima as temperaturas de -50°C a 50°C, de 1 em 1 grau, e para cada valor imprima a temperatura correspondente em graus Fahrenheit, e se a sensação é congelante (menor que 0°C graus), fria (entre 0°C e 10°C), amena (entre 11°C a 23°C) ou quente (maior que 24°C). A conversão pode ser feita pela fórmula F = 1,8.C + 32, onde C é a temperatura em graus Celsius e F é a temperatura em graus Fahrenheit.

$tempCels=0; //celsius //numero
$tempFahr=0; //fahrenheit //numero
$descSens=""; //descrição da sensação térmica //string

    for ($tempCels = -50; $tempCels <= 50 ; $tempCels++) { //i é uma variável para percorrer um vetor, ou seja, ela é um ponteiro, posição de cada item do vetor.
        //vai imprimir temperatura de =50 a 50
        if ($tempCels <= 0){
            $descSens="Congelante";
        }elseif ($tempCels > 0 and $tempCels <= 10){
            $descSens= "Fria";
        }elseif ($tempCels >=11 and $tempCels <= 23){
            $descSens= "Amena";
        }else {
            $descSens= "Quente";
        }
        $tempFahr=(1.8*$tempCels)+32;
        echo "<b>Temperatura Celsius:</b> " . $tempCels . " <b>Temperatura Fahrenheit:</b> " . $tempFahr . " <b>Sensação Térmica</b> " . $descSens . "<br>"; 
    } 

?>