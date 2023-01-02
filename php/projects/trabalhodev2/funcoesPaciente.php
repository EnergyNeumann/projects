<?php

    //funções para a tabela paciente

include_once('datas.php');
function conectarbancoclinica()
{
    $c = mysqli_connect("localhost", "root", "", "clinicamedica");
    if (mysqli_connect_errno() == 0) {
        echo " CONEXAO OK, PODEMOS CONTINUAR! " . "<br>";
    }else{
        $msg = mysqli_error($c);
        echo "ERRO NA CONEXAO SQL!" . "<br>";
        echo "O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "<br>";
    }
    return $c;
}

    //a. inclusão de registro para a tabela paciente

function incluirpaciente($codpac, $cpf, $nome, $cep, $telefone)
{
    if(is_numeric($codpac) && is_numeric($cpf) && is_string($nome) && is_numeric($cep) && is_numeric($telefone)){
        $c = conectarbancoclinica();
        $result = mysqli_query($c, "INSERT INTO paciente (codpac, cpf, nome, cep, telefone)" . "VALUES ('$codpac', '$cpf', '$nome', '$cep', '$telefone')");
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

    //b. consulta de todos os registros da tabela paciente

function consultarpaciente()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM paciente");
    return $consulta;
}

    //c. consulta através da chave da tabela paciente

function consultarpacientechave($codpac)
{
    if(is_numeric($codpac)){
        $c = conectarbancoclinica();
        $consulta = mysqli_query($c, "SELECT * FROM paciente WHERE codpac = '$codpac'");
        return $consulta;
    }
}

    //d. função de alteração de um registro através da chave, da tabela paciente

function alterarpaciente($cep, $codpac)
{
    $c = conectarbancoclinica();
    if (is_numeric($cep) && is_numeric($codpac)){
        $result = mysqli_query($c, "UPDATE paciente SET cep=$cep WHERE codpac = '$codpac';");
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

    //f. excluir registros da tabela paciente, através de uma chave

function excluirpaciente($codpac)
{
    $c = conectarbancoclinica();
    if (is_numeric($codpac)){
        $result = mysqli_query($c, "DELETE FROM paciente WHERE codpac = $codpac;");
        if (mysqli_affected_rows($c) == 0){
            return false;
        }else{
            echo "<br>" . " DEU CERTO A FUNÇÃO DELETAR " . "<br>";
            return true;
        }
    }else{
            $msg = mysqli_error($c);
            echo "<br>" . " NÃO FUNCIONOU A FUNÇÃO DELETAR " . "<br>" . $msg;
            return false;
        }
} 

?>