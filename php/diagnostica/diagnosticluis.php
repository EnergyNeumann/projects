<?php

for($num = 3; $num <= 200; $num++)  // loop de 3 a 200
    {
        $divisores = 0;  // numero de vezes que o numero foi dividido
        
        for($numdiv = $num; $numdiv >= 1; $numdiv--)  // recupera o nº atual no loop e, a partir dele, o decrementa até chegar a 1 
        {
            
            if (($num % $numdiv) == 0)  // se o número do 1º loop for divisível por algum número anterior a ele, ou seja, resto 0, adiciona 1 a divisores
            {
                $divisores++;
            }
        }
        
        if ($divisores == 2)  // quando o número de divisores daquele número for igual a 2, aparecerá o número e a mensagem "é primo"
        {
            echo $num . " é primo" ."<br>". 
            "" ;
        }
        else  // para quando o numero de divisores for diferente de 2, aparecer uma mensagem dizendo que o número não é primo
        {
            echo $num . " não é primo" ."<br>".
            "" ;
        }
    }
    ?>