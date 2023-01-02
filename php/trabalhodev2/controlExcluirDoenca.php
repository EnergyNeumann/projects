<?php

include_once('funcoesDoenca.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//f
    if (isset($acaodoencaexcluir)) {
        if ($acaodoencaexcluir == "excluirdoencas") {
            if (
                isset($coddoe))
              {
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                if (excluirdoenca($coddoe)){
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

    if (isset($acaodoencaexcluir)){
        if ($acaodoencaexcluir == "sairdoencas"){
            session_destroy();
        }
    }

?>