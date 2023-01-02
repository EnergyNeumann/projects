<?php

include_once('funcoesDoenca.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//c
    if (isset($acaodoencaconsultarchave)) {
        if ($acaodoencaconsultarchave == "consultardoencachave") {
            if (isset($coddoe)){
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                $testaConsulta = consultardoencachave($coddoe);
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

    if (isset($acaodoencaconsultarchave)){
        if ($acaodoencaconsultarchave == "sairdoencas"){
            session_destroy();
        }
    }

    ?>