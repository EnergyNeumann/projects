<?php

include_once('funcoesMedico.php');
include_once ('datas.php');
    //b
    if (isset($acaomedicoconsultar)) {
        if ($acaomedicoconsultar == "consultarfullmedico") {
            $testaConsulta = consultarmedico();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo " Não existe registros na tabela " . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Codmed: " . $linha['codmed'] . " | Cpf: " . $linha['cpf'] . " | Nome: " . 
                    $linha['nome'] . " | Cep: " . $linha['cep'] . " | Especialidade: " . $linha['especialidade'] . "| horarios: " . $linha['horarios'] . "<br>";
                }
            }
        }
    }

?>