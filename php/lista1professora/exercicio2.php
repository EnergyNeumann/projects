<?php
//Considere uma dívida de $1.000, a ser paga em parcelas mensais, nas seguintes condições: a cada mês, $100 são pagos, e o saldo restante é atualizado com juros de 1%. Por exemplo:  No primeiro mês, paga-se $100 e o saldo de $900 é atualizado: 900 x 1.01 = 909. Mostre o valor remanescente da dívida a cada mês a partir do primeiro (use a nomenclatura “mês 1”, “mês 2”, etc.

//variáveis
$ValorDivida=1000;
$Meses=0;
$ValorSaldo=100;

while ($ValorDivida > 100) {
    //cálcular os juros e apresentar o valor da dívida
    $Meses++;
    $ValorDivida=($ValorDivida-$ValorSaldo)*1.01;
    echo "<b>O mês é:</b> " . $Meses . " <b>O valor da dívida é:</b> " . number_format($ValorDivida, 2, ".", ".") . "</br>";
}

?>