<?php

include_once('funcoesDoenca.php');
include_once ('datas.php');

//a
extract($_REQUEST, EXTR_SKIP);
    if (isset($acaodoencaincluir)) {

        if ($acaodoencaincluir == "incluirdoencas") {
            if (
                isset($coddoe) && isset($tipo) && isset($nome)
                && isset($sintomas) && isset($tratamento))
              {
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                $tipo = htmlspecialchars_decode(strip_tags($tipo));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $sintomas = htmlspecialchars_decode(strip_tags($sintomas));
                $tratamento = htmlspecialchars_decode(strip_tags($tratamento)); 
                if (incluirdoenca($coddoe, $tipo, $nome, $sintomas, $tratamento)){
                    echo " Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //b
    if (isset($acaodoencaconsultar)) {
        if ($acaodoencaconsultar == "consultarfulldoenca") {
            $testaConsulta = consultardoenca();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo " Não existe registros na tabela " . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Coddoe: " . $linha['coddoe'] . " | Tipo: " . $linha['tipo'] . " | Nome: " . 
                    $linha['nome'] . " | Sintomas: " . $linha['sintomas'] . " | Tratamento: " . $linha['tratamento'] . "<br>";
                }
            }
        }
    }
    //c
    if (isset($acaodoencaconsultarchave)) {
        if ($acaodoencaconsultarchave == "consultardoencachave") {
            if (isset($coddoe)){
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                $testaConsulta = consultardoencachave($coddoe);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo " Não existe registros na tabela " . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Coddoe: " . $linha['coddoe'] . " | Tipo: " . $linha['tipo'] . " | Nome: " . 
                    $linha['nome'] . " | Sintomas: " . $linha['sintomas'] . " | Tratamento: " . $linha['tratamento'] . "<br>";
                    }
                }
            }
        }
    }
    //d
    if (isset($acaodoencaalterar)) {
        if ($acaodoencaalterar == "alterardoencas") {
            if (
                isset($tipo) && isset($coddoe))
              {
                $tipo = htmlspecialchars_decode(strip_tags($tipo));
                $sintomas = htmlspecialchars_decode(strip_tags($coddoe));
                if (alterardoenca($tipo, $coddoe)){
                    echo " Registro alterado com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi alterado " . "<br>";
                }
                }
            }
        }
    //e
    if (isset($acaodoencaconsultardeterminada)) {
        if ($acaodoencaconsultardeterminada == "consultardoencadeterminada") {
            if (isset($nome)){
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $testaConsulta = consultardoencadeterminada($nome);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo " Não existe registros na tabela " . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Coddoe: " . $linha['coddoe'] . " | Tipo: " . $linha['tipo'] . " | Nome: " . 
                    $linha['nome'] . " | Sintomas: " . $linha['sintomas'] . " | Tratamento: " . $linha['tratamento'] . "<br>";
                    }
                }
            }
        }
    }
    //f
    if (isset($acaodoencaexcluir)) {
        if ($acaodoencaexcluir == "excluirdoencas") {
            if (
                isset($coddoe))
              {
                $coddoe = htmlspecialchars_decode(strip_tags($coddoe));
                if (excluirdoenca($coddoe)){
                    echo " Registro excluido com sucesso! " . "<br>";
                }
                 else{
                    echo " Registro não foi excluido! " . "<br>";
                }
                }
            }
        }



?>
