<?php

include_once('funcoesPaciente.php');
include_once ('datas.php');

//a
extract($_REQUEST, EXTR_SKIP);
    if (isset($acaopacienteincluir)) {

        if ($acaopacienteincluir == "incluirpacientes") {
            if (
                isset($codpac) && isset($cpf) && isset($nome)
                && isset($cep) && isset($telefone))
              {
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                $cpf = htmlspecialchars_decode(strip_tags($cpf));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $telefone = htmlspecialchars_decode(strip_tags($telefone)); 
                if (incluirpaciente($codpac, $cpf, $nome, $cpf, $telefone)){
                    echo " Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //b
    if (isset($acaopacienteconsultar)) {
        if ($acaopacienteconsultar == "consultarfullpaciente") {
            $testaConsulta = consultarpaciente();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo " Não existe registros na tabela " . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Codpac: " . $linha['codpac'] . " | Cpf: " . $linha['cpf'] . " | Nome: " . 
                    $linha['nome'] . " | Cep: " . $linha['cep'] . " | Telefone: " . $linha['telefone'] . "<br>";
                }
            }
        }
    }
    //c
    if (isset($acaopacienteconsultarchave)) {
        if ($acaopacienteconsultarchave == "consultarpacientechave") {
            if (isset($codpac)){
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                $testaConsulta = consultarpacientechave($codpac);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo " Não existe registros na tabela " . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Codpac: " . $linha['codpac'] . " | Cpf: " . $linha['cpf'] . " | Nome: " . 
                    $linha['nome'] . " | Cep: " . $linha['cep'] . " | Telefone: " . $linha['telefone'] . "<br>";
                    }
                }
            }
        }
    }
    //d
    if (isset($acaopacientealterar)) {
        if ($acaopacientealterar == "alterarpacientes") {
            if (
                isset($cep) && isset($codpac))
              {
                $cep = htmlspecialchars_decode(strip_tags($cep));
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                if (alterarpaciente($cep, $codpac)){
                    echo " Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //f
    if (isset($acaopacienteexcluir)) {
        if ($acaopacienteexcluir == "excluirpacientes") {
            if (
                isset($codpac))
              {
                $codpac = htmlspecialchars_decode(strip_tags($codpac));
                if (excluirpaciente($codpac)){
                    echo " Registro excluido com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi excluido! " . "<br>";
                }
                }
            }
        }

?>