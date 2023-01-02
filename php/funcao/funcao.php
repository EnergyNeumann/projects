<?php

$testaincluir=incluirusuario(2, 2, 'DoisDois', 2);

if ($testaincluir){
    echo "\n" . "usuario incluido com sucesso";
}else{
    echo "\n" . "falhou a inclusão";
}

$testalterar=alterarusuario('DoisDoisDois', 2);

if ($testalterar){
    echo "\n" . "usuario alterado com sucesso";
}else{
    echo "\n" . "falhou a alteração";
}

$testaexcluir=excluirusuario(2);

if ($testaexcluir){
    echo "\n" . "usuario excluido com sucesso";
}else{
    echo "\n" . "falhou a exclusão";
}

$testalogar=logarusuario(2, 2);

if ($testalogar){
    echo "\n" . "usuario logado com sucesso";
}else{
    echo "\n" . "falhou o logar";
}

$testaconsulta=consultarusuario();
print_r($testaconsulta);

$qntlinhas=mysqli_num_rows($testaconsulta);

if ($qntlinhas == 0){
    echo "\n" . "Não há nada por aqui";
}else{
    for ($i=0; $i < mysqli_num_rows($testaconsulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($testaconsulta);
        print_r($linha); //pega o que tem dentro de cada caixinha de linha
        //imprimindo os elementos
        echo "\n" . "LOGIN = " . $linha['Login'];
        echo "\n" . "SENHA = " . $linha['Senha'];
        echo "\n" . "NOME = " . $linha['Nome'];
        echo "\n" . "PERFIL = " . $linha['Perfil'];
    }
}





function conectarbancousuario()
{
    $c = mysqli_connect("localhost", "root", "", "usuarioldi");
    if (mysqli_connect_errno() == 0) {
        echo "CONEXAO OK, PODEMOS CONTINUAR!";
    }else{
        $msg = mysqli_error($c);
        echo "ERRO NA CONEXAO SQL!" . "\n";
        echo "O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "\n";
    }
    return $c;
}
function incluirusuario($login, $senha, $nome, $perfil)
{
    if(is_numeric($login) && is_numeric($senha) && is_string($nome) && is_numeric($perfil)){
    $c = conectarbancousuario();
    $result = mysqli_query($c, "INSERT INTO usuario (Login, Senha, Nome, Perfil)" . "VALUES ('$login', '$senha', '$nome', '$perfil')");
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
function alterarusuario($nome, $login)
{
    if (is_numeric($login) && is_string($nome)){
    $c = conectarbancousuario();
    $result = mysqli_query($c, "UPDATE usuario SET Nome='$nome' WHERE login = $login;");
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
function excluirusuario($login)
{
    if (is_numeric($login)){
    $c = conectarbancousuario();
    $result = mysqli_query($c, "DELETE FROM usuario WHERE login = $login;");
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
function logarusuario($login, $senha)
{
    if (is_numeric($login) && is_numeric($senha)){
    $c = conectarbancousuario();
    $result = mysqli_query($c, "SELECT * FROM usuario WHERE Login = $login AND Senha = $senha;");
    if ($result == true) {
        echo "\n" . "DEU CERTO A FUNÇÃO LOGAR";
        return true;
    }else{
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU A FUNÇÃO LOGAR";
        return false;
}
    }
}
function consultarusuario()
{
    $c = conectarbancousuario();
    $consulta = mysqli_query($c, "SELECT * FROM usuario");
    return $consulta;
    /*print_r($consulta); //pega o que tem dentro de cada caixinha de consulta
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        print_r($linha); //pega o que tem dentro de cada caixinha de linha
        //imprimindo os elementos
        echo "\n" . "LOGIN = " . $linha['Login'];
        echo "\n" . "SENHA = " . $linha['Senha'];
        echo "\n" . "NOME = " . $linha['Nome'];
        echo "\n" . "PERFIL = " . $linha['Perfil'];
    }*/
}
?>