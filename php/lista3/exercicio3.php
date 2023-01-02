<?php
$c = mysqli_connect("localhost", "root", "", "empresaldi");
if (mysqli_connect_errno() == 0) {
    echo "CONEXAO OK, PODEMOS CONTINUAR!";
    $sql="INSERT INTO empresa (cnpj, nome, endereco, qntdeusuarios) VALUES (1111111,'Empresa1','Endereço 1',1), (2222222, 'Empresa2', 'Endereço2',20), (3333333,'Empresa3','Endereço 3',300);";    
    $result = mysqli_query($c, $sql);
    if ($result) {//se for true
        echo "\n" . "DEU CERTO";
    }else{
        //deu erro
        $msg = mysqli_error($c);
        echo "\n" . "NÃO FUNCIONOU" . $msg;
}
}

?>