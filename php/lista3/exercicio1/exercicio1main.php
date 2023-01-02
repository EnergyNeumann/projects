<?php
    include_once ('exercicio1funcao.php');
    include_once ('exercicio1data.php');

    extract($_REQUEST, EXTR_SKIP);
    if (isset($acao)) {
        if ($acao == "Incluir") {
            if (
                isset($login) && isset($senha) && isset($nome)
                && isset($perfil) && isset($dtNascto) //ele pega o nome das variaveis, de acordo com o nome escrito no exercicio1.html
            ) {
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $perfil = htmlspecialchars_decode(strip_tags($perfil));
                $dtNascto = htmlspecialchars_decode(strip_tags($dtNascto));
                if (!validar_data($dtNascto)) { //saber se a data é valida. o codigo fonte ta no exercicio1data
                    echo "Data informada é inválida!" . "<br>";
                } else {
                    if (incluirUsuario($login, $senha, $nome, $perfil, $dtNascto)){
                    echo "Usuário incluído com sucesso!" . "<br>";
                }
                 else{
                    echo "Usuário não foi incluído" . "<br>";
                }
                }
            }
        }
    }
    if (isset($acao)) {
        if ($acao == "consultarFull") {
            $testaConsulta = consultarListaUsuario();
            $qtdLinhas = mysqli_num_rows($testaConsulta);
            if ($qtdLinhas == 0){
                echo "Não existe registros na tabela" . "<br>";
            }else{
                for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Login: " . $linha['Login'] . " | Nome: " . $linha['Nome'] . " | Data de Nascimento: " . 
                    formatardataTela($linha['dtNascto']) . " | Perfil: " . $linha['Perfil'] . " | " . "<br>";
                }
            }
        }
    }
    if (isset($acao)) {
        if ($acao == "consultarUsuario") {
            if (isset($login)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $testaConsulta = consultarUsuario($login);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo "Não existe registros na tabela" . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Login: " . $linha['Login'] . " | Nome: " . $linha['Nome'] . " | Data de Nascimento: " . 
                    formatardataTela($linha['dtNascto']) . " | Perfil: " . $linha['Perfil'] . " | " . "<br>";
                    }
                }
            }
        }
    }
    if (isset($acao)) {
        if ($acao == "consultarLogin") {
            if (isset($nome, $senha)){
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                $testaConsulta = consultarLogin($nome, $senha);
                $qtdLinhas = mysqli_num_rows($testaConsulta);
                if ($qtdLinhas == 0){
                    echo "Não existe registros na tabela" . "<br>";
                }else{
                    for ($i=0; $i < $qtdLinhas; $i++) { 
                    $linha = mysqli_fetch_assoc($testaConsulta);
                    echo "<br>" . "| Login: " . $linha['Login'] . " | Nome: " . $linha['Nome'] . " | Data de Nascimento: " . 
                    formatardataTela($linha['dtNascto']) . " | Perfil: " . $linha['Perfil'] . " | " . "<br>";
                    }
                }
            }
        }
    }
    if (isset($acao)) {
        if ($acao == "Alterar") {
            if (isset($login) && isset($nome) && isset($perfil) && isset($dtNascto)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $nome = htmlspecialchars_decode(strip_tags($nome));
                $perfil = htmlspecialchars_decode(strip_tags($perfil));
                $dtNascto = htmlspecialchars_decode(strip_tags($dtNascto));
                if (!validar_data($dtNascto)){
                    echo "Data informada é invalida!!" . "<br>";
                }else{
                    if(alterarUsuario($login, $nome, $perfil, $dtNascto)){
                        echo "Usuario alterado com sucesso!!" . "<br>";
                    }else{
                        echo "Usuario não foi alterado!!" . "<br>";
                    }
                }
            }
        }
    }
    if (isset($acao)) {
        if ($acao == "Alterarsenha") {
            if (isset($login) && isset($senha)){
                $login = htmlspecialchars_decode(strip_tags($login));
                $senha = htmlspecialchars_decode(strip_tags($senha));
                    if(alterarSenha($login, $senha)){
                        echo "Senha alterada com sucesso!!" . "<br>";
                    }else{
                        echo "Senha não foi alterada!!" . "<br>";
                    }
                }
            }
        }

?>