<?php

include_once('funcoesPaciente.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//f
    if (isset($acaopacienteexcluir)) {
        if ($acaopacienteexcluir == "excluirpacientes") {
            if (
                isset($codpac))
              {
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                if (excluirpaciente($codpac)){
                    $_SESSION['msg']= " Registro excluido com sucesso! " . "<br>";
                }
                 else{
                    $_SESSION['msg']= " Registro não foi excluido! " . "<br>";
                }
                }
            }
            //pra n entrar na tela branca
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

        //área para sair da sessão (sair do usuario alterado com sucesso)

if (isset($acaopacienteexcluir)){
    if ($acaopacienteexcluir == "sairpacientes"){
        session_destroy();
    }
}

?>