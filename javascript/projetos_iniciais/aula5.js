var k = 0;
for (k = 0; k < 4; k++)
{
	console.log("F");
}
console.log("FIM");
//conteudo entre chaves é o corpo do for
//se for (k=0) fosse for (k=9), ele daria como falso e n executaria


//codigo acumulador de numeros
var k = 0;
var n = 0;
var total = 0;
for (k = 0; k < 4; k++)
{
	n = Number(prompt("Numero: "));
	total = total + n;
}
console.log("Total: " + total);


//contador
var k = 0;
var cont = 0;
var letra = 0;
for (k = 0; k < 4; k++)
{
	letra = prompt("Letra: ");
	if (letra == "a")
		cont = cont + 1;
}
console.log("Total de letra a: " + cont);


var texto = "ABC";
var k = 0;
for (k = 0; k < 3; k++)
{
	console.log(texto[k]);
}
//string: vetor ou array de caracteres


var texto = "ABC";
var k = 0;
for (k = 0; k < 3; k++)
{
	console.log(texto[k]);
}
console.log(texto.lenght + "elementos");
//propriedade lenght


var valores = [1, 5, 7, -8, -3, 4];
var total = 0;
for (var k = 0; k < valores.length; k++)
{
		if (valores[k] < 0)
	break;
	else
		total = total + valores[k];
}
console.log("Somatório: " + total);


var valores = [1, 5, 7, -8, -3, 3];
var total = 0;
for (var k = 0; k < valores.length; k++)
{
	if (valores[k] < 0)
		continue;
	else
		total = total + valores[k];
}
console.log("Somatório: " + total);


var n = 0;
var resp = "s"
while (resp == "s")
{
	Number(prompt("Numero: "));
	//
	//
	resp = prompt("Continuar? (s/n):");
}
alert("FIM/t/t/tFIM");