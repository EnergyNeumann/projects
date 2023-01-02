<?php

include_once('funcoesUsuario.php');
include_once('datas.php');

session_start();
extract($_REQUEST, EXTR_SKIP);
//a
    if (isset($acaousuarioincluir)) {

        if ($acaousuarioincluir == "incluirusuarios") {
            if (
                isset($login) && isset($senha) && isset($nome)
                && isset($email) && isset($dtNascto))
              {
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $email = htmlspecialchars_decode(strip_tags($email));
                if (!validar_data($dtNascto)) { //saber se a data é valida
                    $_SESSION['msg']= " Data informada é inválida! ";
                } elseif (incluirusuario($login, $senha, $nome, $email, $dtNascto)) {
                    $_SESSION['msg']= " Registro incluido com sucesso! ";
                }
                 else{
                    $_SESSION['msg']= " Registro não foi incluido ";
                }
                }
            }
            $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
                header("Location: $path"); //devolve pra web
        }

        //área para sair da sessão (sair do usuario alterado com sucesso)

    if (isset($acaousuarioincluir)){
        if ($acaousuarioincluir == "sairusuarios"){
            session_destroy();
        }
    }
        

?>