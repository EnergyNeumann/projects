<?php

include_once('funcoesDoenca.php');

session_start();
extract($_REQUEST, EXTR_SKIP);
//a
    if (isset($acaodoencaincluir)) {

        if ($acaodoencaincluir == "incluirdoencas") {
            if (
                isset($coddoe) && isset($tipo) && isset($nome)
                && isset($sintomas) && isset($tratamento))
              {
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                $tipo = htmlspecialchars_decode(strip_tags($tipo));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $sintomas = htmlspecialchars_decode(strip_tags($sintomas));
                $tratamento = htmlspecialchars_decode(strip_tags($tratamento)); 
                if (incluirdoenca($coddoe, $tipo, $nome, $sintomas, $tratamento)){
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

    if (isset($acaodoencaincluir)){
        if ($acaodoencaincluir == "sairdoencas"){
            session_destroy();
        }
    }

?>