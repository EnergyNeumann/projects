<?php
$c = mysqli_connect("localhost", "root", "", "empresaldi");
if (mysqli_connect_errno() == 0) {
    echo "CONEXAO OK, PODEMOS CONTINUAR!";
    $sql="INSERT INTO cliente (cpf, nome, endereco, cep, idade) VALUES (1111111,'Cento e Dez','Cento e onze',0121,12), (2222222, 'Duzentos e Vinte', 'Duzentos e Vinte e um',0222,22), (3333333,'Trezentos e Trinta','Trezentos e Trinta e um',0333,33), (4444444,'Quatrocentos e quarenta','Quatrocentos e quarenta e um',0444,44);";    
    $result = mysqli_query($c, $sql);
    if ($result) {//se for true
        echo "\n" . "DEU CERTO";
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU" . $msg;
}
    $sql = "SELECT * FROM empresa"; //o * pega todos os registros da tabela. No caso, da para colocar um especifico no lugar dele
    $consulta = mysqli_query($c, $sql);
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        //imprimindo os elementos
        echo "\n" . "cnpj = " . $linha['cnpj'];
        echo "\n" . "nome = " . $linha['nome'];
        echo "\n" . "endereco = " . $linha['endereco'];
        echo "\n" . "qntdeusuarios = " . $linha['qntdeusuarios'] . "\n";
    }
    $sql = "SELECT * FROM cliente"; //o * pega todos os registros da tabela. No caso, da para colocar um especifico no lugar dele
    $consulta = mysqli_query($c, $sql);
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        //imprimindo os elementos
        echo "\n" . "nome = " . $linha['nome'] . "\n";
    }
    $sql = "SELECT * FROM cliente WHERE CPF = 2222222;";
    $consulta = mysqli_query($c, $sql);
    if (mysqli_num_rows($consulta) <> 0){ //se numero de rows for diferente de 0, preenchera de acordo com os seguintes codigos
        $linha = mysqli_fetch_assoc($consulta);
        echo "\n" . "nome = " . $linha['nome'];
        echo "\n" . "endereco = " . $linha['endereco'] . "\n";
    }
    $sql = "UPDATE cliente SET nome='Richard', idade=16  WHERE  CPF = 3333333";
    $result = mysqli_query($c, $sql);
    if ($result == true) {
        echo "\n" . "Atualização ok";
    }else{
        echo "\n" . "Deu erro";
    }
    $sql = "SELECT * FROM cliente"; //o * pega todos os registros da tabela. No caso, da para colocar um especifico no lugar dele
    $consulta = mysqli_query($c, $sql);
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        //imprimindo os elementos
        echo "\n" . "cpf = " . $linha['cpf'];
        echo "\n" . "nome = " . $linha['nome'];
        echo "\n" . "endereco = " . $linha['endereco'];
        echo "\n" . "cep = " . $linha['cep'];
        echo "\n" . "idade = " . $linha['idade'] . "\n";
    }
}

?>