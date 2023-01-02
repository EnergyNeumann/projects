<?php

include_once('funcoesMedico.php');
include_once ('datas.php');

//a
extract($_REQUEST, EXTR_SKIP);
    if (isset($acaomedicoincluir)) {

        if ($acaomedicoincluir == "incluirmedicos") {
            if (
                isset($codmed) && isset($cpf) && isset($nome)
                && isset($cep) && isset($especialidade) && isset($horarios))
              {
                $codmed = htmlspecialchars_decode(strip_tags($codmed));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $especialidade = htmlspecialchars_decode(strip_tags($especialidade)); 
                $horarios = htmlspecialchars_decode(strip_tags($horarios)); 
                if (incluirmedico($codmed, $cep, $nome, $cep, $especialidade, $horarios)){
                    echo "Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo "Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //b
    if (isset($acaomedicoconsultar)) {
        if ($acaomedicoconsultar == "consultarfullmedico") {
            $testaConsulta = consultarmedico();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo "Não existe registros na tabela" . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Codmed: " . $linha['codmed'] . " | Cpf: " . $linha['cpf'] . " | Nome: " . 
                    $linha['nome'] . " | Cep: " . $linha['cep'] . " | Especialidade: " . $linha['especialidade'] . "| horarios: " . $linha['horarios'] . "<br>";
                }
            }
        }
    }
    //c
    if (isset($acaomedicoconsultarchave)) {
        if ($acaomedicoconsultarchave == "consultarmedicochave") {
            if (isset($codmed)){
                $codmed = htmlspecialchars_decode(strip_tags($codmed));
                $testaConsulta = consultarmedicochave($codmed);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo "Não existe registros na tabela" . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Codmed: " . $linha['codmed'] . " | Cpf: " . $linha['cpf'] . " | Nome: " . 
                    $linha['nome'] . " | Cep: " . $linha['cep'] . " | Especialidade: " . $linha['especialidade'] . "| horarios: " . $linha['horarios'] . "<br>";
                    }
                }
            }
        }
    }
    //d
    if (isset($acaomedicoalterar)) {
        if ($acaomedicoalterar == "alterarmedicos") {
            if (
                isset($cep) && isset($codmed))
              {
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $cpf = htmlspecialchars_decode(strip_tags($codmed));
                if (alterarmedico($cep, $codmed)){
                    echo "Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo "Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //f
    if (isset($acaomedicoexcluir)) {
        if ($acaomedicoexcluir == "excluirmedicos") {
            if (
                isset($codmed))
              {
                $codmed = htmlspecialchars_decode(strip_tags($codmed));
                if (excluirmedico($codmed)){
                    echo "Registro excluido com sucesso! " . "<br>";
                }
                 else{
                    echo "Registro não foi excluido! " . "<br>";
                }
                }
            }
        }

?>