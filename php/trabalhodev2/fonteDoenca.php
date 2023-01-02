    <!--html da página de administração da tabela doença-->

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

    <!--header/nav da página da tabela doença-->

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
                <a href="fonteMedico.php">Médico</a>
                <a href="fontePaciente.php">Paciente</a>
                <a href="administracao.php">Administração</a>
            </nav>
        </div>
    </header>

    <!--main e administração de forms da tabela doença-->

    <main class="aplicandogrid">
        <form class="form2" action="controlIncluirDoenca.php" method="post">
            <h2>Incluir registros para a tabela Doença</h2>
                <p>Aqui, você incluirá registros para a tabela doença.</p>
                <input type="text" name="coddoe" placeholder="Digite o código da doença (apenas número)" size="40"/>
                <input type="text" name="tipo" placeholder="Digite o tipo da doença" size="40"/>
                <input type="text" name="nome" placeholder="Digite o nome da doença" size="40"/>
                <input type="text" name="sintomas" placeholder="Digite o código dos sintomas da doença (apenas número)"size="40"/>
                <input type="text" name="tratamento" placeholder="Digite o tratamento para a doença"size="40"/>
                <input type="hidden" name="acaodoencaincluir" value="incluirdoencas"/>
                <input type="submit" name="acaodoencaalterar" value="incluirdoencas"/> <!--botão de login-->
                <input type="submit" name="acaodoencaincluir" value="sairdoencas"/> <!--botão de logout-->
        </form>
        <form class="form3" action="controlAlterarDoenca.php" method="post">
            <h2>Alterar o tipo da doença da tabela Doença, através da chave</h2>
                <p>Aqui, você alterará o tipo da doença da tabela Doença, através da chave.</p>
                <input type="text" name="coddoe" placeholder="Digite o código da doença (apenas número)" size="40"/>
                <input type="text" name="tipo" placeholder="Digite o novo tipo da doença" size="40" class="senha"/>
                <input type="hidden" name="acaodoencaalterar" value="alterardoencas"/>
                <input type="submit" name="acaodoencaalterar" value="alterardoencas"/> <!--botão de login-->
                <input type="submit" name="acaodoencaalterar" value="sairdoencas"/> <!--botão de logout-->
        </form>
        <form class="form3" action="controlConsultarDoenca.php" method="post">
            <h2>Consultar todos os registros da tabela Doença</h2>
                <p>Aqui, você consultará todos os registros da tabela Doença.</p>
                <input type="submit" name="acaodoencaconsultar" value="consultarfulldoenca"/>
        </form>
        <form class="form3" action="controlConsultarpersoDoenca.php" method="post">
            <h2>Consultar todos os registros da tabela Doença, a partir de uma chave</h2>
                <p>Aqui, você consultará todos os registros da tabela Doença, através de uma chave.</p>
                <input type="text" name="coddoe" placeholder="Digite o código da doença (apenas número)" size="40"/>
                <input type="hidden" name="acaodoencaconsultarchave" value="consultardoencachave"/>
                <input type="submit" name="acaodoencaconsultarchave" value="consultardoencachave"/>
        </form>
        <form class="form3" action="controlConsultarpersoDoenca.php" method="post">
                <input type="hidden" name="acaodoencaconsultarchave" value="sairdoencas"/>
                <input type="submit" name="acaodoencaconsultarchave" value="sairdoencas"/>
        </form>
        <form class="form3" action="controlConsultardeterDoenca.php" method="post">
            <h2>Consultar todos os registros da tabela doença, através do nome da doença</h2>
                <p>Aqui, você consultará todos os registros da tabela Doença, através do nome da doença.</p>
                <input type="text" name="nome" placeholder="Digite o nome da doença" size="40"/>
                <input type="submit" name="acaodoencaconsultardeterminada" value="consultardoencadeterminada"/>
                <input type="submit" name="acaodoencaconsultardeterminada" value="consultardoencadeterminada"/>
        </form>
        <form class="form3" action="controlConsultardeterDoenca.php" method="post">
                <input type="hidden" name="acaodoencaconsultardeterminada" value="sairdoencas"/>
                <input type="submit" name="acaodoencaconsultardeterminada" value="sairdoencas"/>
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
        <form class="form3" action="controlExcluirDoenca.php" method="post">
            <h2>Excluir os registros da tabela Doença, a partir de uma chave</h2>
                <p>Aqui, você excluirá todos os registros da tabela Doença, através de uma chave.</p>
                <input type="text" name="coddoe" placeholder="Digite o código da doença (apenas número)" size="40"/>
                <input type="hidden" name="acaodoencaexcluir" value="excluirdoencas"/>
                <input type="submit" name="acaodoencaexcluir" value="excluirdoencas"/> <!--botão de login-->
                <input type="submit" name="acaodoencaexcluir" value="sairdoencas"/> <!--botão de logout-->
        </form>
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
</body>
</html>