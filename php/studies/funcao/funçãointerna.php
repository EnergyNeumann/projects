<?php
$a = 'osias Bap';
$b = '11111111111';
print ($a .'</br>');
// será impressa a quantidade de caracteres da string
print ('A Variável $a tem ' . strlen($a) .' caracteres </br>');

print ('A primeira letra em Maiúscula ' . ucwords($a) .' caracteres </br>');
// 

// usou as variáveis nome e nome_2

$nome = 'linguagem pHP';
$nome_2 = ' Linguagem Java ';

//será impressa a quantidade de caracteres da string (13)
echo ('strlen'.'</br>');
echo (strlen($nome) . '</br></br>');

//Converte o primeiro caractere de cada palavra para maiúsculo
echo ('ucwords'.'</br>');
echo (ucwords($nome) . '</br></br>');

//Converte o primeiro caractere para maiúsculo
echo ('ucfirst'.'</br>');
echo (ucfirst($nome) . '</br></br>');

//Converte a string para minúscula
echo ('strtolower'.'</br>');
echo (strtolower($nome) . '</br></br>');

//Converte a string para maiúscula
echo ('strtoupper'.'</br>');
echo (strtoupper($nome) .'</br></br>');

//Substitui a string Linguagem pela string Amo
echo ('str_replace'.'</br>');
echo (str_replace('linguagem', 'Amo',$nome) . '</br></br>');

//Insere na primeira posição da string os caracteres Osias
echo ('substr_replace'.'</br>');
echo (substr_replace($nome, 'Osias ', 0, 0) . '</br>');
echo (substr_replace($nome, 'Osias ', 0) . '</br></br>');

//Será retornada parte da string
echo ('substr'.'</br>');
echo (substr($nome, 1, 5) . '</br></br>');

//Retira o espaço no início e no final de uma string
echo ('trim'.'</br>');
echo (trim($nome_2) .'</br>');
echo (strlen(trim($nome_2)) .'</br></br>');

$nome = 'PHP';
echo ("uso do aspas e apóstrofe </br>");
echo ("</br> Minha linguagem favorita é $nome </br>") ;
print ("Minha linguagem favorita é $nome </br>");

echo ('</br> Minha linguagem favorita é $nome </br>') ;
print ('Minha linguagem favorita é $nome </br>');

print ('Minha linguagem favorita é ' . $nome . '</br></br>');

 /*string str_repeat (string entrada, int quantidade)*/
    $repetido = str_repeat("0", 5);
    echo ($repetido .'</br>');

?>