<?php
    $num=0;
    $resto=0;
    $div=0;

    for ($num = 3; $num <= 200; $num++){
        $div=0;
        # percorrendo a lista de 3 a 200
        for($i=1; $i < $num ; $i++){
            # divisões dos números
            $resto=$num%$i;
            if ($resto == 0){
                $div++;
            }
        }
        # verifica se o número é primo
        if ($div < 2){
            # é primo
            echo "o número " . $num . " é primo" . "\n";
        }
        else
        {
            # não é primo
            echo "o número " . $num . " não é primo" . "\n";
        }
    }