    <!--html da página de administração da tabela paciente-->

<!DOCTYPE html>
<body lang="pt-br">
<head>
    <meta charset="utf-8">
    <title>Clínica-chan</title>
    <link rel="stylesheet" href="css/style.css">
    <!--responsividade-->
    <link rel="stylesheet" href="css/responsive.css"> <!--quando a tela estiver em tal tamanho-->
</head>
<body>

    <!--parte da session-->

    <?php session_start(); ?>
    <!--caixa para a msg de erro que pode ter sido armazenada da sessão-->
    <center>
        <b>
            <?php if (isset($_SESSION['msg'])){
                echo $_SESSION['msg'];
            }?>
        </b>
    </center>

    <!--header/nav da página da tabela paciente-->

    <header>
        <div class="containerss">
            <a class ="logo" href="index.php">Clínica-chan</a>
            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Faça a sua pesquisa">
                <a class="search-btn" href="#">
                    <i class="fas fa-search"></i>
                </a>
            </div>
            <nav>
                <a href="fonteUsuario.php">Usuario</a>
                <a href="fonteDoenca.php">Doença</a>
                <a href="fonteMedico.php">Médico</a>
                <a href="administracao.php">Administração</a>
            </nav>
        </div>
    </header>

    <!--main e administração de forms da tabela doença-->

    <main class="aplicandogrid">
        <form class="form2" action="controlIncluirPaciente.php" method="post">
            <h2>Incluir registros para a tabela Paciente</h2>
                <p>Aqui, você incluirá registros para a tabela paciente.</p>
                <input type="text" name="codpac" placeholder="Digite o código do paciente (apenas número)" size="40"/>
                <input type="text" name="cpf" placeholder="Digite o cpf do paciente (apenas número)" size="40"/>
                <input type="text" name="nome" placeholder="Digite o nome do paciente" size="40"/>
                <input type="text" name="cep" placeholder="Digite o cep do paciente (apenas número)"size="40"/>
                <input type="text" name="telefone" placeholder="Digite o telefone do paciente"size="40"/>
                <input type="hidden" name="acaopacienteincluir" value="incluirpacientes"/>
                <input type="submit" name="acaopacienteincluir" value="incluirpacientes"/> <!--botão de login-->
                <input type="submit" name="acaopacienteincluir" value="sairpacientes"/> <!--botão de logout-->
        </form>
        <form class="form3" action="controlAlterarPaciente.php" method="post">
            <h2>Alterar o cep do médico da tabela Paciente, através da chave</h2>
                <p>Aqui, você alterará o cep do paciente da tabela Paciente, através da chave.</p>
                <input type="text" name="codpac" placeholder="Digite o código do paciente (apenas número)" size="40"/>
                <input type="text" name="cep" placeholder="Digite o novo cep do paciente" size="40" class="senha"/>
                <input type="hidden" name="acaopacientealterar" value="alterarpacientes"/>
                <input type="submit" name="acaopacientealterar" value="alterarpacientes"/> <!--botão de login-->
                <input type="submit" name="acaopacientealterar" value="sairpacientes"/> <!--botão de logout-->
        </form>
        <form class="form3" action="mainPaciente.php" method="post">
            <h2>Consultar todos os registros da tabela Paciente</h2>
                <p>Aqui, você consultará todos os registros da tabela Paciente.</p>
                <input type="submit" name="acaopacienteconsultar" value="consultarfullpaciente"/>
        </form>
        <form class="form3" action="controlConsultarpersoPaciente.php" method="post">
            <h2>Consultar todos os registros da tabela Paciente, a partir de uma chave</h2>
                <p>Aqui, você consultará todos os registros da tabela Paciente, através de uma chave.</p>
                <input type="text" name="codpac" placeholder="Digite o código do paciente (apenas número)" size="40"/>
                <input type="hidden" name="acaopacienteconsultarchave" value="consultarpacientechave"/>
                <input type="submit" name="acaopacienteconsultarchave" value="consultarpacientechave"/>
        </form>
        <form class="form3" action="controlConsultarpersoPaciente.php" method="post">
                <input type="hidden" name="acaopacienteconsultarchave" value="sairpacientes"/>
                <input type="submit" name="acaopacienteconsultarchave" value="sairpacientes"/>
        </form>
        <table border="1">
            <tr>
                <td><b>login</b></td>
                <td><b>nome</b></td>
                <td><b>email</b></td>
                <td><b>dtNascto</b></td>
            </tr>
            <?php
            if (isset($_SESSION)) {
                foreach ($_SESSION as $linha => $value) {
                    echo '<tr>';
                    foreach ($_SESSION[$linha] as $campo) {
                        echo '<td>' . $campo . "</td>";
                    };
                    echo '</tr>';
                }
            }
            ?>
        </table>
        <form class="form3" action="controlExcluirPaciente.php" method="post">
            <h2>Excluir os registros da tabela Paciente, a partir de uma chave</h2>
                <p>Aqui, você excluirá todos os registros da tabela Paciente, através de uma chave.</p>
                <input type="text" name="codpac" placeholder="Digite o código do paciente (apenas número)" size="40"/>
                <input type="hidden" name="acaopacienteexcluir" value="excluirpacientes"/>
                <input type="submit" name="acaopacienteexcluir" value="excluirpacientes"/> <!--botão de login-->
                <input type="submit" name="acaopacienteexcluir" value="sairpacientes"/> <!--botão de logout-->
        </form>
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
</body>
</html>