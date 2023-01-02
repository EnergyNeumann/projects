    <!--html da página de administração da tabela médico-->

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

    <!--header/nav da página da tabela médico-->

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
                <a href="fontePaciente.php">Paciente</a>
                <a href="administracao.php">Administração</a>
            </nav>
        </div>
    </header>

    <!--main e administração de forms da tabela doença-->

    <main class="aplicandogrid">
        <form class="form2" action="controlIncluirMedico.php" method="post">
            <h2>Incluir registros para a tabela Médico</h2>
                <p>Aqui, você incluirá registros para a tabela médico.</p>
                <input type="text" name="codmed" placeholder="Digite o código do médico (apenas número)" size="40"/>
                <input type="text" name="cpf" placeholder="Digite o cpf do médico (apenas número)" size="40"/>
                <input type="text" name="nome" placeholder="Digite o nome do médico" size="40"/>
                <input type="text" name="cep" placeholder="Digite o cep do médico (apenas número)"size="40"/>
                <input type="text" name="especialidade" placeholder="Digite a especialidade do médico"size="40"/>
                <input type="text" name="horarios" placeholder="Digite o horário do médico"size="40"/>
                <input type="hidden" name="acaomedicoincluir" value="incluirmedicos"/>
                <input type="submit" name="acaomedicoincluir" value="incluirmedicos"/> <!--botão de login-->
                <input type="submit" name="acaomedicoincluir" value="sairmedicos"/> <!--botão de logout-->
        </form>
        <form class="form3" action="controlAlterarMedico.php" method="post">
            <h2>Alterar o cep do médico da tabela Médico, através da chave</h2>
                <p>Aqui, você alterará o cep do médico da tabela Médico, através da chave.</p>
                <input type="text" name="codmed" placeholder="Digite o código do médico (apenas número)" size="40"/>
                <input type="text" name="cep" placeholder="Digite o novo cep do médico" size="40" class="senha"/>
                <input type="hidden" name="acaomedicoalterar" value="alterarmedicos"/>
                <input type="submit" name="acaomedicoalterar" value="alterarmedicos"/> <!--botão de login-->
                <input type="submit" name="acaomedicoalterar" value="sairmedicos"/> <!--botão de logout-->
        </form>
        <form class="form3" action="mainMedico.php" method="post">
            <h2>Consultar todos os registros da tabela Médico</h2>
                <p>Aqui, você consultará todos os registros da tabela Médico.</p>
                <input type="submit" name="acaomedicoconsultar" value="consultarfullmedico"/>
        </form>
        <form class="form3" action="controlConsultarpersoMedico.php" method="post">
            <h2>Consultar todos os registros da tabela Médico, a partir de uma chave</h2>
                <p>Aqui, você consultará todos os registros da tabela Médico, através de uma chave.</p>
                <input type="text" name="codmed" placeholder="Digite o código do médico (apenas número)" size="40"/>
                <input type="hidden" name="acaomedicoconsultarchave" value="consultarmedicochave"/>
                <input type="submit" name="acaomedicoconsultarchave" value="consultarmedicochave"/>
        </form>
        <form class="form3" action="controlConsultarpersoMedico.php" method="post">
                <input type="hidden" name="acaomedicoconsultarchave" value="sairmedicos"/>
                <input type="submit" name="acaomedicoconsultarchave" value="sairmedicos"/>
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
        <form class="form3" action="controlExcluirMedico.php" method="post">
            <h2>Excluir os registros da tabela Médico, a partir de uma chave</h2>
                <p>Aqui, você excluirá todos os registros da tabela Médico, através de uma chave.</p>
                <input type="text" name="codmed" placeholder="Digite o código do médico (apenas número)" size="40"/>
                <input type="hidden" name="acaomedicoexcluir" value="excluirmedicos"/>
                <input type="submit" name="acaomedicoexcluir" value="excluirmedicos"/> <!--botão de login-->
                <input type="submit" name="acaomedicoexcluir" value="sairmedicos"/> <!--botão de logout-->
        </form>
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
</body>
</html>