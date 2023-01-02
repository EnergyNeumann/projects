<?php

include_once('funcoesUsuario.php');
include_once ('datas.php');

//a
extract($_REQUEST, EXTR_SKIP);
    if (isset($acaousuarioincluir)) {

        if ($acaousuarioincluir == "incluirusuarios") {
            if (
                isset($login) && isset($senha) && isset($nome)
                && isset($email))
              {
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $email = htmlspecialchars_decode(strip_tags($email));
                if (incluirusuario($login, $senha, $nome, $email)){
                    echo "Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo "Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //b
    if (isset($acaousuarioconsultar)) {
        if ($acaousuarioconsultar == "consultarfullusuario") {
            $testaConsulta = consultarusuario();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo "Não existe registros na tabela" . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Login: " . $linha['login'] . " | Senha: " . $linha['senha'] . " | Nome: " . 
                    $linha['nome'] . " | Email: " . $linha['email'] . "<br>";
                }
            }
        }
    }
    //c
    if (isset($acaousuarioconsultarchave)) {
        if ($acaousuarioconsultarchave == "consultarusuariochave") {
            if (isset($login)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $testaConsulta = consultarusuariochave($login);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo "Não existe registros na tabela" . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Login: " . $linha['login'] . " | Senha: " . $linha['senha'] . " | Nome: " . 
                    $linha['nome'] . " | Email: " . $linha['email'] . "<br>";
                    }
                }
            }
        }
    }
    //d
    if (isset($acaousuarioalterar)) {
        if ($acaousuarioalterar == "alterarusuarios") {
            if (
                isset($nome) && isset($login))
              {
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $login = htmlspecialchars_decode(strip_tags($login));
                if (alterarusuario($nome, $login)){
                    echo "Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo "Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //g
    if (isset($acaousuariologar)) {
        if ($acaousuariologar == "logarusuarios") {
            if (isset($login) && isset($senha)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                if (logarusuario($login, $senha)){
                    echo "Usuario logado com sucesso!" . "<br>";
                }else{
                    echo "Não existe usuario com essas informações " . "<br>";
                }
            }
        }
    }
?>