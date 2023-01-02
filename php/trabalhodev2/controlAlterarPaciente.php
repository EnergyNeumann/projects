<?php

include_once('funcoesPaciente.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//d
if (isset($acaopacientealterar)) {
    if ($acaopacientealterar == "alterarpacientes") {
        if (
            isset($cep) && isset($codpac))
          {
            $cep = htmlspecialchars_decode(strip_tags($cep));
            $codpac = htmlspecialchars_decode(strip_tags($codpac));
            if (alterarpaciente($cep, $codpac)){
                $_SESSION['msg']= " Registro alterado com sucesso! " . "<br>";
            }
             else{
                $_SESSION['msg']= " Registro não foi alterado " . "<br>";
            }
            }
        }
        $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
    }

//área para sair da sessão (sair do usuario alterado com sucesso)

if (isset($acaopacientealterar)){
    if ($acaopacientealterar == "sairpacientes"){
        session_destroy();
    }
}

?>