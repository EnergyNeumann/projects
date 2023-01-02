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
function incluirusuario($login, $senha, $nome, $email)
{
    if(is_numeric($login) && is_numeric($senha) && is_string($nome) && is_string($email)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "INSERT INTO usuario (login, senha, nome, email)" . "VALUES ('$login', '$senha', '$nome', '$email')");
    if ($result == true) {//se for true
        echo "\n" . "DEU CERTO A FUNÇÃO INCLUSAO";
        return true;
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO INCLUSAO" . $msg;
        return false;
}
    }
}    

//b.
function consultarusuario()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM usuario");
    return $consulta;
}

//c.
function consultarusuariochave($login)
{
    if(is_numeric($login)){
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM usuario WHERE login = '$login'");
    return $consulta;
    }
}

//d.
function alterarusuario($nome, $login)
{
    if (is_string($nome) && is_numeric($login)){
    $c = conectarbancoclinica();
    $result = mysqli_query($c, "UPDATE usuario SET nome = '$nome' WHERE login = '$login';");
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

//g.
function logarusuario($login, $senha){
    if (is_numeric($login) && is_numeric($senha)) {
        $c= conectarbancoclinica();
        $sql = "SELECT * FROM usuario WHERE Login = $login AND Senha = '$senha';";
        $result = mysqli_query($c, $sql);
        if (mysqli_num_rows($result) == 0) {
            return false;
        } else {
            return true;
        }
    }
}

?>