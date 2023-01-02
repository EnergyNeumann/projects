    <!--html da página de login do usuário-->

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

    <!--header/nav da página de login do usuário-->

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

    <!--main e administração de forms da página de login do usuário-->

    <main>
        <form class="form" action="controlLogar.php" method="post">
            <h2>Logar-se</h2>
                <input type="text" name="login" placeholder="Digite o número do seu login (apenas número)" size="40"/>
                <input type="password" name="senha" placeholder="Digite sua senha (apenas número)" size="40" class="senha"/><i class="fa-solid fa-eye eye">Ver senha</i>
                <a href="alterarUsuario.php"><h3>Esqueci minha senha</h3></a>
                <input type="hidden" name="acaousuariologar" value="logarusuarios"/>
                <input type="submit" name="acaousuariologar" value="logarusuarios"/> <!--botão de login-->
                <input type="submit" name="acaousuariologar" value="sairusuarios"/> <!--botão de logout-->
        </form>
    </main>
    <script src="https://kit.fontawesome.com/1724661b23.js" crossorigin="anonymous"></script> <!--script do font awesome para pegar icones-->
    <script src="js/style.js"></script>
</body>
</html>
</body>
</html>