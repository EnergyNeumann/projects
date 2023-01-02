<?php
    function par_ou_impar($num)
    {
        $resto = $num % 2;
        if($resto == 0)
            return "PAR";
        else
            return "IMPAR";
    }

    //fora da função não é possível acessar a variável $resto 

    $a = 120;

     print ("</br></br> Valor antes da execução da function "  .  $a);
     $resposta = par_ou_impar($a); 

     print ("</br></br> Valor após execução da function " . $resposta);

     print ("</br></br> Valor após execução da function " . par_ou_impar($a));