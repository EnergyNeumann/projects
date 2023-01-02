<?php

include_once ('../model/classes/Cliente.php');
include_once('../funcoesData.php');

session_start();

extract($_REQUEST, EXTR_SKIP);

if (isset($acao)) {
    if ($acao == "Registrar2") {
        if (
            isset($CPF) && isset($nome) 
            && isset($telefone) && isset($endereco) && isset($data_nascimento) &&
            isset($matricula) && isset($peso) 
            && isset($altura) && isset($evolucao) 
        ) {
            $CPF = htmlspecialchars_decode(strip_tags($CPF));
            $nome = htmlspecialchars_decode(strip_tags($nome));
            $telefone = htmlspecialchars_decode(strip_tags($telefone));
            $endereco = htmlspecialchars_decode(strip_tags($endereco));
            $data_nascimento = htmlspecialchars_decode(strip_tags($data_nascimento));
            $matricula = htmlspecialchars_decode(strip_tags($matricula));
            $peso = htmlspecialchars_decode(strip_tags($peso));
            $altura = htmlspecialchars_decode(strip_tags($altura));
            $evolucao = htmlspecialchars_decode(strip_tags($evolucao));

            if (!validar_data($data_nascimento)) {
               $_SESSION['msg'] = "Data invalida";
            }
            else{
                if (is_numeric($CPF) && is_string($nome) && is_numeric($telefone) && is_string($endereco) && validar_data($data_nascimento) &&
                is_numeric($matricula) && is_numeric($peso) && is_numeric($altura) && is_string($evolucao))
                 {
                    $data_nascimento = formatardataBancoEnvio($data_nascimento);
                    $cliente = new Cliente($CPF, $nome, $telefone, $endereco, $data_nascimento, $matricula, $peso, $altura, $evolucao);
                    if ($cliente->incluirCliente()){
                        $_SESSION['msg'] = "\n" ."Cliente Incluido com sucesso !!";     
                    } else {

                    $_SESSION['msg'] =  "\n" ."Falha no INSERT! Mensagem de erro: '$msg'";
                    }
            } 
        }
    }
}
    $path = $_SERVER['HTTP_REFERER'];
    header("Location: $path");
    
}

?>