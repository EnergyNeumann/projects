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
function incluirmedico($codmed, $cpf, $nome, $cep, $especialidade, $horarios)
{
    if(is_numeric($codmed) && is_numeric($cpf) && is_string($nome) && is_numeric($cep) && is_string($especialidade) && is_numeric($horarios)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "INSERT INTO medico (codmed, cpf, nome, cep, especialidade, horarios)" . "VALUES ('$codmed', '$cpf', '$nome', '$cep', '$especialidade', '$horarios')");
    if ($result == true) {//se for true
        echo "\n" . "DEU CERTO A FUNÇÃO INCLUIR ";
        return true;
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO INCLUIR " . $msg;
        return false;
}
    }
}  

//b.
function consultarmedico()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM medico");
    return $consulta;
} 

//c.
function consultarmedicochave($codmed)
{
    if(is_numeric($codmed)){
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM medico WHERE codmed = '$codmed'");
    return $consulta;
    }
}

//d.
function alterarmedico($cep, $codmed)
{
    if (is_numeric($cep) && is_numeric($codmed)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "UPDATE medico SET cep=$cep WHERE codmed = '$codmed';");
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
function excluirmedico($codmed)
{
    if (is_numeric($codmed)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "DELETE FROM medico WHERE codmed = $codmed;");
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