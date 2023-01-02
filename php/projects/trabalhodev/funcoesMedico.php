<?php

    //funções para a tabela médico

include_once('datas.php');
function conectarbancoclinica()
{
    $c = mysqli_connect("localhost", "root", "", "clinicamedica");
    if (mysqli_connect_errno() == 0) {
        echo " CONEXAO OK, PODEMOS CONTINUAR! ";
    }else{
        $msg = mysqli_error($c);
        echo " ERRO NA CONEXAO SQL! " . "<br>";
        echo " O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "<br>";
    }
    return $c;
}

    //a. inclusão de registro para a tabela médico

function incluirmedico($codmed, $cpf, $nome, $cep, $especialidade, $horarios)
{
    if(is_numeric($codmed) && is_numeric($cpf) && is_string($nome) && is_numeric($cep) && is_string($especialidade) && is_numeric($horarios)){
        $c = conectarbancoclinica();
        $result = mysqli_query($c, "INSERT INTO medico (codmed, cpf, nome, cep, especialidade, horarios)" . "VALUES ('$codmed', '$cpf', '$nome', '$cep', '$especialidade', '$horarios')");
        if ($result == true) {//se for true
            echo "<br>" . " DEU CERTO A FUNÇÃO INCLUIR " . "<br>";
            return true;
        }else{
            //deu erro
            $msg = mysqli_error($c);
            echo "<br>" . " NÃO FUNCIONOU A FUNÇÃO INCLUIR " . "<br>" . $msg;
            return false;
        }
    }
}  

    //b. consulta de todos os registros da tabela médico

function consultarmedico()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM medico");
    return $consulta;
} 

    //c. consulta através da chave da tabela médico

function consultarmedicochave($codmed)
{
    if(is_numeric($codmed)){
        $c = conectarbancoclinica();
        $consulta = mysqli_query($c, "SELECT * FROM medico WHERE codmed = '$codmed'");
        return $consulta;
    }
}

    //d. função de alteração de um registro através da chave, da tabela médico

function alterarmedico($cep, $codmed)
{
    $c = conectarbancoclinica();
        if (is_numeric($cep) && is_numeric($codmed)){
        $result = mysqli_query($c, "UPDATE medico SET cep=$cep WHERE codmed = '$codmed';");
        if (mysqli_affected_rows($c) == 0){
            return false;
        }else{
            echo "<br>" . " DEU CERTO A FUNÇÃO ALTERAR " . "<br>";
            return true;
        }
    }else{
            $msg = mysqli_error($c);
            echo "<br>" . " NÃO FUNCIONOU A FUNÇÃO ALTERAR " . "<br>" . $msg;
            return false;
        }
} 

    //f. excluir registros da tabela médico, através de uma chave

function excluirmedico($codmed)
{
    $c = conectarbancoclinica();
        if (is_numeric($codmed)){
        $result = mysqli_query($c, "DELETE FROM medico WHERE codmed = $codmed;");
        if (mysqli_affected_rows($c) == 0){
            return false;
        }else{
            echo "<br>" . " DEU CERTO A FUNÇÃO EXCLUIR " . "<br>";
            return true;
        }
    }else{
            $msg = mysqli_error($c);
            echo "<br>" . " NÃO FUNCIONOU A FUNÇÃO EXCLUIR " . "<br>" . $msg;
            return false;
        }
} 

?>