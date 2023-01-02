<?php
//Considere uma dívida de $1.000, a ser paga em parcelas mensais, nas seguintes condições: a cada mês, $100 são pagos, e o saldo restante é atualizado com juros de 1%. Por exemplo:  No primeiro mês, paga-se $100 e o saldo de $900 é atualizado: 900 x 1.01 = 909. Mostre o valor remanescente da dívida a cada mês a partir do primeiro (use a nomenclatura “mês 1”, “mês 2”, etc.

//variáveis
//$ValorDivida = 0;//variavel para o valor da dívida. AO INVÉS DE UTILIZAR ESSA VARIÁVEL, OPTEI POR SÓ ACRESCENTAR O 100...
$Meses = 0;//variavel para contabilizar os meses. Começa com 0, pois será utilizado o for
$ValorSaldo = 100;//variável para contabilizar quanto que a pessoa pagará mensalmente

//loop 
    for ($ValorDivida = 1000; $ValorDivida > 100 ; $Meses++){//aqui diz que, o valor da divida é 1000, e, enquanto o valor for maior que 100, aumentará os meses. Ai vocÊ me pergunta: Como fará para o valor da divida, ir diminuindo e sendo transcrito? Bom, isso eu responderei na próxima linha de código.
        $ValorDivida=($ValorDivida-100)*1.01;//aqui diz que, o valor da dívida é igual à (1000 - 100) x 1.01 (usado para calcular o juros de 1%). Assim, por conta disso, o valor da dívida será transcrito, com o juros, e a cada Mês. Obs: Só é somado primeiro, pois, o que vale primeiro é o que está dentro dos parenteses.
        echo "<b>O mês é:</b> " . $Meses . " <b>O valor da dívida é:</b> " . number_format($ValorDivida, 2, ".", ".") . "</br>";//pede as informações necessárias (meses, e o valor da divida). O number_format, serve para deixar o número formatado, com o primeiro centesimal após a vírgula. Ao invés de usa-lo, daria para arredondar o valor, utilizando o ceil, mas, ficaria inadequado, pois não haveria o valor exato.
    }

?>