<?php

include_once('funcoesDoenca.php');

session_start();
extract($_REQUEST, EXTR_SKIP);
//d
if (isset($acaodoencaalterar)) {
    if ($acaodoencaalterar == "alterardoencas") {
        if (
            isset($tipo) && isset($coddoe))
          {
            $tipo = htmlspecialchars_decode(strip_tags($tipo));
            $sintomas = htmlspecialchars_decode(strip_tags($coddoe));
            if (alterardoenca($tipo, $coddoe)){
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

    if (isset($acaodoencaalterar)){
        if ($acaodoencaalterar == "sairdoencas"){
            session_destroy();
        }
    }

?>