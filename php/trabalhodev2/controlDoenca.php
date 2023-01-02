<?php

include_once('funcoesDoenca.php');
include_once ('datas.php');
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
    
    



?>
