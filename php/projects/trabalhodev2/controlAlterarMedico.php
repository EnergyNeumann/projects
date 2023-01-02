<?php

include_once('funcoesMedico.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//d
    if (isset($acaomedicoalterar)) {
        if ($acaomedicoalterar == "alterarmedicos") {
            if (
                isset($cep) && isset($codmed))
              {
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $cpf = htmlspecialchars_decode(strip_tags($codmed));
                if (alterarmedico($cep, $codmed)){
                    $_SESSION['msg']= " Registro alterado com sucesso! ";
                }
                 else{
                    $_SESSION['msg']= " Registro não foi alterado ";
                }
                }
            }
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

        //área para sair da sessão (sair do usuario alterado com sucesso)

    if (isset($acaomedicoalterar)){
        if ($acaomedicoalterar == "sairmedicos"){
            session_destroy();
        }
    }

?>