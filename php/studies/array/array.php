<?php
$estados = [
    'São Paulo',
    'Minas Gerais',
    'Rio de Janeiro',
    'Espírito Santo',
];

foreach ($estados as $nome)
 {
    print $nome  . "</br>";
 }

// $arr[0] = "primeiro  valor"
// $arr[1] = "segundo  valor"
// $arr[2] = "terceirot  valor"


$arr=array("OSIAS", "GABRIELE", "DOUGLAS","YASMIN","MATHEUS","MALU",);
 print ("</br>". "</br>");

for($i = 0;$i < count($arr);$i++)
   { 
    echo $arr[$i]." </br>";
   }

?>

<!DOCTYPE html>
<html>
<body>

<?php  
    $cores = array("azul", "vermelho", "amarelo", "verde"); 

    foreach ($cores as $value) {
        echo "$value </br>";
    }
?>  

</body>
</html>

<?php
/*
$carros = array("Volvo", "BMW", "Toyota");
sort($carros);
print_r($carros);
?>
*/


// classificação em ordem crescente ou decrescente 
/*
$idade = array("Peter"=>"37", "Ben"=>"35", "Joe"=>"43");
asort($idade);
print_r($idade);


$idade = array("Peter"=>"37", "Ben"=>"35", "Joe"=>"43");
arsort($idade);
print_r($idade);
*/

/*
// ordenado pela chave 
$idade = array("Peter"=>"35", "Benedito"=>"37", "João"=>"43");
ksort($idade);
print_r($idade);
*/



// remover dados repetidos

$frutas=array('maçã','banana','limão','banana','abacaxi','banana','limão');
print_r($frutas) . "</br>" ;
$frutas=array_unique($frutas);
print_r($frutas). "</br>" ;


//$valormax = count($frutas);
//for ($i = 0; $i < $valormax; $i++)
// {
//  echo ksort($frutas)[$i] .  "</br>";
//}

/*
$idade = array("Peter"=>"37", "Benedito"=>"35", "João"=>"43");
$valormax=count($idade);
echo $valormax . "</br>";
ksort($idade);
for ($i = 0; $i < $valormax; $i++) {
  echo $idade[$i] .  "</br>";
}
*/

?>


<?php
// inserir dados no final do array
$frutas=array('maçã','banana','limão');
print_r($frutas);
print ("</br>". "</br>");
array_push($frutas, 'abacaxi');
print_r($frutas);
?>


// inserir dados no inicio do array
<?php
$frutas=array('maçã','banana','limão');
array_unshift($frutas, 'abacaxi');
print_r($frutas);
?>