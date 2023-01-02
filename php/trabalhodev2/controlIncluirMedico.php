<?php

include_once('funcoesMedico.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//a
    if (isset($acaomedicoincluir)) {

        if ($acaomedicoincluir == "incluirmedicos") {
            if (
                isset($codmed) && isset($cpf) && isset($nome)
                && isset($cep) && isset($especialidade) && isset($horarios))
              {
                $codmed = htmlspecialchars_decode(strip_tags($codmed));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $especialidade = htmlspecialchars_decode(strip_tags($especialidade)); 
                $horarios = htmlspecialchars_decode(strip_tags($horarios)); 
                if (incluirmedico($codmed, $cep, $nome, $cep, $especialidade, $horarios)){
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

    if (isset($acaomedicoincluir)){
        if ($acaomedicoincluir == "sairmedicos"){
            session_destroy();
        }
    }

?>