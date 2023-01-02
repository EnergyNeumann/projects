    <!--html da página de registro do usuário-->

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

    <!--header/nav da página de registro do usuário-->

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
                <a href="registrarUsuario.php">Registrar-se</a>
                <a href="loginUsuario.php">Login</a>
                <a href="administracao.php">Administração</a>
            </nav>
        </div>
    </header>

    <!--main e administração de forms da página de registro do usuário-->

    <main>
        <form class="form" action="controlRegistrar.php" method="post">
            <h2>Registrar-se</h2>
                <input type="text" name="login" placeholder="Digite o número do seu login (apenas número)" size="40"/>
                <input type="password" name="senha" placeholder="Digite sua senha (apenas número)" size="40" class="senha"/><i class="fa-solid fa-eye eye">Ver senha</i>
                <input type="text" name="nome" placeholder="Digite seu nome"/>
                <input type="text" name="email" placeholder="Digite seu email"/>
                <input type="text" name="dtNascto" placeholder="Digite sua data de nascimento (00/00/0000)"/>
                <a href="loginUsuario.php"><h3>Já tenho uma conta</h3></a>
                <input type="hidden" name="acaousuarioincluir" value="incluirusuarios"/>
                <input type="submit" name="acaousuarioincluir" value="incluirusuarios"/> <!--botão de login-->
                <input type="submit" name="acaousuarioincluir" value="sairusuarios"/> <!--botão de logout-->
        </form>
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
    <script src="js/style.js"></script>
</body>
</html>