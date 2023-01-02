<?php

include_once('funcoesUsuario.php');
include_once('datas.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//b
    if (isset($acaousuarioconsultar)) {
        if ($acaousuarioconsultar == "consultarfullusuario") {
            $testaConsulta = consultarusuario();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                $_SESSION['msg']= " Não existe registros na tabela " . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $_SESSION[$linha] = mysqli_fetch_assoc($testaConsulta);
                }
            }
        }
        $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
    }

    if (isset($acaousuarioconsultar)){
        if ($acaousuarioconsultar == "sairusuarios"){
            session_destroy();
        }
    }

?>