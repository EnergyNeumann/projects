<?php
include_once('exercicio1data.php');
    function conectarbancoUsuario(){
        $c = mysqli_connect("localhost", "root", "", "usuarioldi");
        if (mysqli_connect_errno() == 0) {
            echo "\n" . "Conexão Ok, podemos continuar!" . "<br>";   
        }else {
            $msg = mysqli_connect_error();
            echo "Erro na conexão SQL!" . "\n";
            echo "O MySQL retornou a seguinte mensagem: " . $msg . "\n";
        }
        return $c;
    }
    function incluirUsuario($login, $senha, $nome, $perfil, $dtNascto){
        if (is_numeric($login) && is_string($nome) && is_numeric($senha) && is_numeric($perfil) && validar_data($dtNascto)) {
            $c = conectarBancoUsuario();
            $dtNascto = formatardataBancoEnvio($dtNascto);
            $sql = "INSERT INTO usuario(Login, Senha, Nome, Perfil, dtNascto) VALUES ('$login', '$senha', '$nome', '$perfil', '$dtNascto');";
            $result = mysqli_query($c, $sql);
            if ($result == true) {
                echo "\n" . "Execução bem sucedida do Insert!" . "<br>";
                return true;
            }else {
                $msg = mysqli_error($c);
                echo "\n" . "Falha no Insert! Mensagem de erro: '$msg'";
            }
        }else {
            echo "\n" . "Parametros informados invalidos";
            return false;
        }
    }
    function alterarUsuario($nome, $login){
        if (is_string($nome) && is_numeric($login)) {
            $c = conectarbancoUsuario();
            $sql = "UPDATE usuario SET Nome = '$nome' WHERE login = '$login';";
            $result = mysqli_query($c, $sql);
            if ($result == true) {
                echo "\n" . "Alteração Ok";
                return true;
            } else {
                echo "\n" . "Alteração não está Ok";
                return false;
            }
        }else{
            echo "\n" . "Parametros informados inválidos";
            return false;
        }
    }
    function excluirUsuario($login){
        if (is_numeric($login)) {
           $c= conectarbancoUsuario();
           $sql = "DELETE FROM usuario WHERE Login = $login;";
            $result = mysqli_query($c, $sql);
            if ($result == true) {
                echo "\n" . "Exclusão Ok";
                return true;
            } else {
                echo "\n" . "Exclusão não está Ok";
                return false;
            }
        }else {
            echo "\n" . "Parametro informado incorreto";
            return false;
        }
    }
    function logarUsuario($login, $senha){
        if (is_numeric($login) && is_numeric($senha)) {
            $c= conectarbancoUsuario();
            $sql = "SELECT * FROM usuario WHERE Login = $login AND Senha = $senha;";
            $result = mysqli_query($c, $sql);
            if (mysqli_num_rows($result) == 0) {
                return false;
            } else {
                return true;
            }
        }else {
            echo "\n" . "Parametro informado incorreto";
            return false;
        }
    }
    function consultarListaUsuario(){
        $c= conectarbancoUsuario();
        $sql = "SELECT * FROM usuario";
        $consulta = mysqli_query($c, $sql);
        return $consulta;
    }
    function consultarUsuario($login){
        if (is_numeric($login)){
            $c = conectarbancoUsuario();
            $sql = "SELECT * FROM usuario WHERE Login = '$login';";
            $result = mysqli_query($c, $sql);
            return $result;
        }else{
            return false;
        }
    }
?>