<?php

include_once('funcoesPaciente.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//a
    if (isset($acaopacienteincluir)) {

        if ($acaopacienteincluir == "incluirpacientes") {
            if (
                isset($codpac) && isset($cpf) && isset($nome)
                && isset($cep) && isset($telefone))
              {
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                $cpf = htmlspecialchars_decode(strip_tags($cpf));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $telefone = htmlspecialchars_decode(strip_tags($telefone)); 
                if (incluirpaciente($codpac, $cpf, $nome, $cpf, $telefone)){
                    $_SESSION['msg']= " Registro incluído com sucesso! " . "<br>";
                }
                 else{
                    $_SESSION['msg']= " Registro não foi incluído " . "<br>";
                }
                }
            }
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

        //área para sair da sessão (sair do usuario alterado com sucesso)

    if (isset($acaopacienteincluir)){
        if ($acaopacienteincluir == "sairpacientes"){
            session_destroy();
        }
    }

?>