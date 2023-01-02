<?php

include_once('funcoesUsuario.php');

session_start();
extract($_REQUEST, EXTR_SKIP);
//d
    if (isset($acaousuarioalterar)) {
        if ($acaousuarioalterar == "alterarusuarios") {
            if (
                isset($senha) && isset($login))
              {
                $senha = htmlspecialchars_decode(strip_tags($senha));
                $login = htmlspecialchars_decode(strip_tags($login));
                if (alterarusuario($senha, $login)){
                    $_SESSION['msg']=" Registro alterado com sucesso! ";
                }
                 else{
                    $_SESSION['msg']=" Registro não foi alterado ";
                }
                }
            }
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

    //área para sair da sessão (sair do usuario alterado com sucesso)

    if (isset($acaousuarioalterar)){
        if ($acaousuarioalterar == "sairusuarios"){
            session_destroy();
        }
    }

?>