<?php

include_once('funcoesPaciente.php');

session_start();
extract($_REQUEST, EXTR_SKIP);

//c
    //c
    if (isset($acaopacienteconsultarchave)) {
        if ($acaopacienteconsultarchave == "consultarpacientechave") {
            if (isset($codpac)){
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                $testaConsulta = consultarpacientechave($codpac);
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

    if (isset($acaopacienteconsultarchave)){
        if ($acaopacienteconsultarchave == "sairpacientes"){
            session_destroy();
        }
    }

    ?>