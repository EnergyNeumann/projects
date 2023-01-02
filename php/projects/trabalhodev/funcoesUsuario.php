<?php

    //funções para a tabela usuário

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

    //a. inclusão de registro para a tabela usuário

function incluirusuario($login, $senha, $nome, $email, $dtNascto)
{
    if(is_numeric($login) && is_numeric($senha) && is_string($nome) && is_string($email) && validar_data($dtNascto)){
        $c = conectarbancoclinica();
        $dtNascto = formatardataBancoEnvio($dtNascto);
        $result = mysqli_query($c, "INSERT INTO usuario (login, senha, nome, email, dtNascto)" . "VALUES ('$login', '$senha', '$nome', '$email', '$dtNascto')");
        if ($result == true) {//se for true
            echo "<br>" . " DEU CERTO A FUNÇÃO INCLUSAO ";
            return true;
        }else{
            //deu erro
            $msg = mysqli_error($c);
            echo "<br>" . " NÃO FUNCIONOU A FUNÇÃO INCLUSAO " . "<br>" . $msg;
            return false;
        }
    }
}    

    //b. consulta de todos os registros da tabela usuário

function consultarusuario()
{
    $c = conectarbancoclinica();
    $consulta = mysqli_query($c, "SELECT * FROM usuario");
    return $consulta;
}

    //c. consulta através da chave da tabela usuário

function consultarusuariochave($login)
{
    if(is_numeric($login)){
        $c = conectarbancoclinica();
        $consulta = mysqli_query($c, "SELECT * FROM usuario WHERE login = '$login'");
        return $consulta;
    }
}

    //d. função de alteração de um registro através da chave, da tabela usuário

function alterarusuario($senha, $login)
{
    $c = conectarbancoclinica();
    if (is_numeric($senha) && is_numeric($login)){
        $result = mysqli_query($c, "UPDATE usuario SET senha = $senha WHERE login = '$login';");
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

    //g. função de login
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