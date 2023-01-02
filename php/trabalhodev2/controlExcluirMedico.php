<?php

include_once('funcoesMedico.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//f
    if (isset($acaomedicoexcluir)) {
        if ($acaomedicoexcluir == "excluirmedicos") {
            if (
                isset($codmed))
              {
                $codmed = htmlspecialchars_decode(strip_tags($codmed));
                if (excluirmedico($codmed)){
                    $_SESSION['msg']= " Registro excluido com sucesso! ";
                }
                 else{
                    $_SESSION['msg']= " Registro não foi excluido! ";
                }
                }
            }
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

        //área para sair da sessão (sair do usuario alterado com sucesso)

    if (isset($acaomedicoexcluir)){
        if ($acaomedicoexcluir == "sairmedicos"){
            session_destroy();
        }
    }

?>