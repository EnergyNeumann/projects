<?php
extract($_REQUEST, EXTR_SKIP);
$taxaJuros1 = 10;
$taxaJuros2 = 20;
$valorCapitalMesT1 = 0;
$valorCapitalMesT2 = 0;

if (isset($valorCapital) && isset($qtdMeses)) {
    $valorCapital = htmlspecialchars_decode(strip_tags($valorCapital));
    $qtdMeses = htmlspecialchars_decode(strip_tags($qtdMeses));
    if (is_numeric($valorCapital) && is_numeric($qtdMeses)){
        $valorCapitalMesT1 = $valorCapital;
        echo "<br><br>" . "O valor de capital para a taxa de juros 1 " . "<br><br>";
        for ($i = 1; $i <= $qtdMeses; $i++){
            $valorCapitalMesT1 = $valorCapitalMesT1 * (1 + ($taxaJuros1 / 100));
            echo "O valor no Mes " . $i . " é " . $valorCapitalMesT1 . "<br>";
        }
        $valorCapitalMesT2 = $valorCapital;
        echo "<br><br>" . "O valor de capital para a taxa de juros 2 " . "<br><br>";
        for ($i = 1; $i <= $qtdMeses; $i++){
            $valorCapitalMesT2 = $valorCapitalMesT2 * (1 + ($taxaJuros2 / 100));
            echo "O valor no Mes " . $i . " é " . $valorCapitalMesT2 . "<br>";
        }
    } else{
        echo "O valor de capital e prazo devem ser informados e serem números";
    }
    
}
?>