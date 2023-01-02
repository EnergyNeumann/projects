<?php

$c = mysqli_connect("localhost", "root", "", "usuarioldi");
if (mysqli_connect_errno() == 0) {
    echo "CONEXAO OK, PODEMOS CONTINUAR!";
    $sql = "INSERT INTO funcionario (Nome, CPF, Salario) VALUES ('Richard', 8888, 40000 );";
    $result = mysqli_query($c, $sql);
    if ($result) {//se for true
        echo "\n" . "DEU CERTO";
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU" . $msg;
    }
    $sql = "SELECT * FROM funcionario"; //o * pega todos os registros da tabela. No caso, da para colocar um especifico no lugar dele
    $consulta = mysqli_query($c, $sql);
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        //imprimindo os elementos
        echo "\n" . "NOME = " . $linha['Nome'];
        echo "\n" . "CPF = " . $linha['CPF'];
        echo "\n" . "SALARIO = " . $linha['Salario'] . "\n";
    }
    $sql = "SELECT * FROM funcionario WHERE CPF = 111;";
    $consulta = mysqli_query($c, $sql);
    if (mysqli_num_rows($consulta) <> 0){ //se numero de rows for diferente de 0, preenchera de acordo com os seguintes codigos
        $linha = mysqli_fetch_assoc($consulta);
        echo "\n" . "CPF = " . $linha['CPF'];
    }
    $sql = "UPDATE funcionario SET Nome='UmUmUm', Salario=1110  WHERE  CPF = 111";
    $result = mysqli_query($c, $sql);
    if ($result == true) {
        echo "\n" . "Atualização ok";
    }else{
        echo "\n" . "Deu erro";
    }
    $sql = "DELETE FROM funcionario WHERE CPF = 999;";//colocar o where, pois se não, deletará toda a tabela.
    $result = mysqli_query($c, $sql);
    if ($result == true){
    echo "\n" . "Deu certo";
    }else{
        echo "\n" . "Deu erro";
    }
    $sql = "SELECT * FROM funcionario WHERE Salario > 500;"; //o * pega todos os registros da tabela. No caso, da para colocar um especifico no lugar dele
    $consulta = mysqli_query($c, $sql);
    print_r($consulta); //pega o que tem dentro de cada caixinha de consulta
    if (mysqli_num_rows($consulta) > 0) {
    echo "os salários maiores que 500 são";
    for ($i=0; $i < mysqli_num_rows($consulta) ; $i++) { 
        # percorrendo o resultado do select
        $linha = mysqli_fetch_assoc($consulta);
        print_r($linha); //pega o que tem dentro de cada caixinha de linha
        //imprimindo os elementos
        echo "\n" . "Nome = " . $linha['Nome'] . "\n";
    }
    }else{
        echo "\n" . "Não existe salários maiores q 500";
    }
    }else{
    $msg = mysqli_error($c);
    echo "ERRO NA CONEXAO SQL!" . "\n";
    echo "O MYSQL RETORNOU A SEGUINTE MSG: " . "$msg" . "\n";
}

?>