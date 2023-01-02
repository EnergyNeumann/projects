<?php

    //funções para a tabela doença

include_once('datas.php');
function conectarbancoclinica()
{
    $c = mysqli_connect("localhost", "root", "", "clinicamedica");
        if (mysqli_connect_errno() == 0) {
            echo " CONEXAO OK, PODEMOS CONTINUAR! " . "<br>";
    }else{
            $msg = mysqli_error($c);
            echo " ERRO NA CONEXAO SQL! " . "<br>";
            echo " O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "<br>";
    }
    return $c;
}

    //a. inclusão de registro para a tabela doença

function incluirdoenca($coddoe, $tipo, $nome, $sintomas, $tratamento)
{
    if(is_numeric($coddoe) && is_string($tipo) && is_string($nome) && is_numeric($sintomas) && is_string($tratamento)){
        $c = conectarbancoclinica();
        $result = mysqli_query($c, "INSERT INTO doenca (coddoe, tipo, nome, sintomas, tratamento)" . "VALUES ('$coddoe', '$tipo', '$nome', '$sintomas', '$tratamento')");
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

    //b. consulta de todos os registros da tabela doença

function consultardoenca()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM doenca");
    return $consulta;
} 

    //c. consulta através da chave da tabela doença

function consultardoencachave($coddoe)
{
    if(is_numeric($coddoe)){
        $c = conectarbancoclinica();
        $consulta = mysqli_query($c, "SELECT * FROM doenca WHERE coddoe = '$coddoe'");
        return $consulta;
    }
}

    //d. função de alteração de um registro através da chave, da tabela doença

function alterardoenca($tipo, $coddoe)
{
    $c = conectarbancoclinica();
    if (is_string($tipo) && is_numeric($coddoe)){
        $result = mysqli_query($c, "UPDATE doenca SET tipo= '$tipo' WHERE coddoe = '$coddoe';");
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
    //e. consultar registro determinado que não seja chave, da tabela doença

function consultardoencadeterminada($nome)
{
    if(is_string($nome)){
        $c = conectarbancoclinica();
        $consulta = mysqli_query($c, "SELECT * FROM doenca WHERE nome = '$nome'");
        return $consulta;
    }
}

    //f. excluir registros da tabela doença, através de uma chave

function excluirdoenca($coddoe)
{
    $c = conectarbancoclinica();
        if (is_numeric($coddoe)){
        $result = mysqli_query($c, "DELETE FROM doenca WHERE coddoe = $coddoe;");
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