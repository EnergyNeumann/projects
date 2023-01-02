    <!--html da página de administração da tabela usuário-->

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
                $_SESSION['msg'] = "";
            }?>
        </b>
    </center>

    <!--header/nav da página da tabela usuário-->

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
                <a href="fonteDoenca.php">Doença</a>
                <a href="fonteMedico.php">Médico</a>
                <a href="fontePaciente.php">Paciente</a>
                <a href="administracao.php">Administração</a>
            </nav>
        </div>
    </header>

    <!--main e administração de forms da tabela usuário-->

    <main class="aplicandogrid">
        <form class="form2" action="controlConsultarUsuario.php" method="post">
            <h2>Consultar todos os registros de usuário</h2>
                <p>Aqui, você consultará todos os registros de usuário pertencentes à tabela usuário.</p>
                <input type="hidden" name="acaousuarioconsultar" value="consultarfullusuario"/>
                <input type="submit" name="acaousuarioconsultar" value="consultarfullusuario"/>
        </form>       
        <form class="form2" action="controlConsultarUsuario.php" method="post">        
                <input type="hidden" name="acaousuarioconsultar" value="sairusuarios"/>
                <input type="submit" name="acaousuarioconsultar" value="sairusuarios"/>
        </form>
        <form class="form2" action="controlConsultarpersoUsuario.php" method="post">
            <h2>Consultar os registros da tabela usuário, através de uma determinada chave</h2>
                <p>Aqui, você consultará todos os registros da tabela usuário, através de uma determinada chave. Essa chave, é o login.</p>
                <input type="text" name="login" placeholder="Digite o número do seu login (apenas número)" size="40"/>
                <input type="hidden" name="acaousuarioconsultarchave" value="consultarusuariochave"/>
                <input type="submit" name="acaousuarioconsultarchave" value="consultarusuariochave"/>
        </form>
        <form class="form2" action="controlConsultarpersoUsuario.php" method="post">
                <input type="hidden" name="acaousuarioconsultarchave" value="sairusuarios"/>
                <input type="submit" name="acaousuarioconsultarchave" value="sairusuarios"/>
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
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
</body>
</html>