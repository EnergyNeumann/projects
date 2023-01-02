<?php

include_once('funcoesPaciente.php');
include_once ('datas.php');
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

?>