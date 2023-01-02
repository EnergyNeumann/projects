<?php

include_once('funcoesDoenca.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//e
    if (isset($acaodoencaconsultardeterminada)) {
        if ($acaodoencaconsultardeterminada == "consultardoencadeterminada") {
            if (isset($nome)){
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $testaConsulta = consultardoencadeterminada($nome);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    $_SESSION['msg']= " Não existe registros na tabela " . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                        $_SESSION[$linha] = mysqli_fetch_assoc($testaConsulta);
                    }
                }
            }
        }
        $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
        header("Location: $path"); //devolve pra web
    }
    
        if (isset($acaodoencaconsultardeterminada)){
            if ($acaodoencaconsultardeterminada == "sairdoencas"){
                session_destroy();
            }
        }

        ?>