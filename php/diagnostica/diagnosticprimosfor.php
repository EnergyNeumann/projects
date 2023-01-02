<?php //identificador php.
//imprimir números primos de 3 à 200.
//código baseado em meu conhecimento, fóruns e vídeos da internet.

for ($n = 3; $n <= 200; $n++) //Aqui, o "for" serve como um para. Então, variável "número ($n)" igual a 3 ($n = 3). E, somará +1 ($n++), enquanto o "número" for menor ou igual a 200 ($n <= 200): (Loop de 3 a 200). Obs: O ponto e vírgula (;), serve para indicar ao programa, que houve um fim na ação. E os parenteses, servem para se criar uma ação, dentro dos mesmos. (Decidi utilizar do for, pois com o while, não funcionaria.)
{ //abrir chaves, para criar uma ação dentro de outra ação.
    $nd = 0; //$nd, é uma váriavel, da qual servirá como um "número de divisores", ou seja, quantos divisores há o número, assim, para saber se o mesmo é primo. Está $nd = 0, pois, por enquanto, a variável é valor 0, até porque, só executará mais para frente.
    for ($r = $n; $r >= 1; $r--) //Aqui, diz que, variável "r" é ígual a variável "n" ($r = $n), e, se r for maior ou igual a 1 ($r >= 1), subtraia 1 em r ($r--). Ou seja, "r" pegará o número que está no loop, e irá subtrair em 1, até chegar ao número 1. (Como o exercício pedia para dividir um número por ele mesmo, e outros que antecedem, tive que optar por esse código, para obter o valor anterior.)
    {
        if (($n % $r) == 0) //Aqui, diz que, se a variável número for divisível por algum número anterior ($r), então, resto igual a 0 (($n % $r) == 0). E... (O mesmo vale para esse código, decidi usa-lo, pois precisava do número anterior, e da divisão do mesmo, para assim, concluir o exercício.) Além disso, é sempre feito primeiro as operações de dentro do parenteses, e depois, as de fora.
        {
            $nd++; //Some 1 em "número de divisores ($nd)" ($nd++).
        }
    }
    if ($nd == 2) //Aqui, diz que, se "número de divisores" for igual a 2 ($nd == 2), então...
        {
        echo "o número ". $n ." é primo" ."<br>"; //Ele dirá que o $n é primo. Obs: O echo serve para pedir a informação, assim como o console. no Javascript. Então, aqui, o echo pede a informação do $n, e diz que ele é primo.
        }
        else //O else serve como um verdadeiro ou falso. No caso, aqui, é para executar o falso.
        {
        echo "o número ". $n ." não é primo" ."<br>"; //Como eu disse, o else diz que, já que o número de divisores igual a 2, é primo, então, o que não for igual a 2, não é primo.
        } //Decidi usar o if ($nd == 2), pois assim, eu poderia informar se o número era primo ou não.
} //fechar chaves. Obs final: As aspas servem para criar um texto, da qual será mostrado na página. E, o <br>, serve para quebrar linha, ou seja, serve como um enter. E o ponto (.), serve para concatenar, ou seja, juntar.

?>