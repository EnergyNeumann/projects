<?php
include_once('funcoesUsuario.php');

session_start();
extract($_REQUEST, EXTR_SKIP);
//g
    if (isset($acaousuariologar)) {
        if ($acaousuariologar == "logarusuarios") {
            if (isset($login) && isset($senha)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                if (logarusuario($login, $senha)){
                    $_SESSION['msg']= " Usuario logado com sucesso! ";
                    $_SESSION['login'] = $login;
                }else{
                    $_SESSION['msg']= " Não existe usuario com essas informações ";
                }
            }
        }
    }

    //área para sair da sessão (sair do usuario logado com sucesso)

    if (isset($acaousuariologar)){
        if ($acaousuariologar == "sairusuarios"){
            session_destroy();
        }
    }

    //quem me chamou?

    $path = $_SERVER['HTTP_REFERER']; //quem me chamou é a web? 
    header("Location: $path"); //devolve pra web
?>