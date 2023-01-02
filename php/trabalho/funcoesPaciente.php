<?php
//funções
include_once('datas.php');
function conectarbancoclinica()
{
    $c = mysqli_connect("localhost", "root", "", "clinicamedica");
    if (mysqli_connect_errno() == 0) {
        echo "CONEXAO OK, PODEMOS CONTINUAR!";
    }else{
        $msg = mysqli_error($c);
        echo "ERRO NA CONEXAO SQL!" . "\n";
        echo "O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "\n";
    }
    return $c;
}

//a.
function incluirpaciente($codpac, $cpf, $nome, $cep, $telefone)
{
    if(is_numeric($codpac) && is_numeric($cpf) && is_string($nome) && is_numeric($cep) && is_numeric($telefone)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "INSERT INTO paciente (codpac, cpf, nome, cep, telefone)" . "VALUES ('$codpac', '$cpf', '$nome', '$cep', '$telefone')");
    if ($result == true) {//se for true
        echo "\n" . "DEU CERTO A FUNÇÃO INCLUIR";
        return true;
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO INCLUIR" . $msg;
        return false;
}
    }
}   

//b.
function consultarpaciente()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM paciente");
    return $consulta;
}

//c.
function consultarpacientechave($codpac)
{
    if(is_numeric($codpac)){
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM paciente WHERE codpac = '$codpac'");
    return $consulta;
    }
}

//d.
function alterarpaciente($cep, $codpac)
{
    if (is_numeric($cep) && is_numeric($codpac)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "UPDATE paciente SET cep=$cep WHERE codpac = '$codpac';");
    if ($result == true) {
        echo "\n" . "DEU CERTO A FUNÇÃO ALTERAR";
        return true;
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO ALTERAR" . $msg;
        return false;
}
    }  
}

//f.
function excluirpaciente($codpac)
{
    if (is_numeric($codpac)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "DELETE FROM paciente WHERE codpac = $codpac;");
    if ($result == true) {
        echo "\n" . "DEU CERTO A FUNÇÃO EXCLUIR";
        return true;
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO EXCLUIR" . $msg;
        return false;
}
    }
}

?>