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
function incluirdoenca($coddoe, $tipo, $nome, $sintomas, $tratamento)
{
    if(is_numeric($coddoe) && is_string($tipo) && is_string($nome) && is_numeric($sintomas) && is_string($tratamento)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "INSERT INTO doenca (coddoe, tipo, nome, sintomas, tratamento)" . "VALUES ('$coddoe', '$tipo', '$nome', '$sintomas', '$tratamento')");
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
function consultardoenca()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM doenca");
    return $consulta;
} 

//c.
function consultardoencachave($coddoe)
{
    if(is_numeric($coddoe)){
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM doenca WHERE coddoe = '$coddoe'");
    return $consulta;
    }
}

//d.
function alterardoenca($tipo, $coddoe)
{
    if (is_string($tipo) && is_numeric($coddoe)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "UPDATE doenca SET tipo= '$tipo' WHERE coddoe = '$coddoe';");
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
//e.
function consultardoencadeterminada($nome)
{
    if(is_string($nome)){
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM doenca WHERE nome = '$nome'");
    return $consulta;
    }
}

//f.
function excluirdoenca($coddoe)
{
    if (is_numeric($coddoe)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "DELETE FROM doenca WHERE coddoe = $coddoe;");
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