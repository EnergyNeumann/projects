<?php
echo getenv("server_software");

?>


<?php
function Xuxa($numero) {
	$numero += 5; //msm coisa que $numero = $numero + 5

	print ("</br> Valor dentro da function " . $numero);//o ponto serve para concatenar, ou seja, juntar
}

$a = 3;
xuxa($a); //$a continua valendo 3
print ("</br></br> Valor após executação da function " . $a);
?> 


<?php
function Produto($n1, n2) {
	$Prod = $n1 * $n2;

	print ("</br> Valor dentro da function " . $Prod);
	return($Prod);
}

$a = 3;
$b = 5;
$Resultado = Produto($a, $b); //$a continua valendo 3
print ("</br></br> Produto de " . $a . " x " . $b . " = " . $Resultado);
?> 


<?php
	function teste2($cor, $figura = "circulo") {
		print ("a figura é um " . $figura . " de cor " . $cor);
	}

	$cor = "Azul";

	teste2($cor);

?>