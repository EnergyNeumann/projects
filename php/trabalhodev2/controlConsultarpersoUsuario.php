<?php

include_once('funcoesUsuario.php');
include_once('datas.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//c
if (isset($acaousuarioconsultarchave)) {
    if ($acaousuarioconsultarchave == "consultarusuariochave") {
        if (isset($login)){
            $login = htmlspecialchars_decode(strip_tags($login));
            $testaConsulta = consultarusuariochave($login);
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                $_SESSION['msg']= " Não existe registros na tabela " . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $_SESSION[$linha] = mysqli_fetch_assoc($testaConsulta);
                }
            }
        }
    }
    $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
    header("Location: $path"); //devolve pra web
}

if (isset($acaousuarioconsultarchave)){
    if ($acaousuarioconsultarchave == "sairusuarios"){
        session_destroy();
    }
}

?>