//Programa 1: Programa 1 - Par ou ímpar com S/N//
var numero = 0;
var resp = "s";
console.log("Programa 1 - Par ou Ímpar com S/N");
while (resp == "s")
{
numero = Number(prompt("Número: "));
if (numero % 2 == 0)
	{
	 console.log("O número " + numero + " é par");
	 resp = prompt("Quer contínuar? s/n: ");
	}
else
	{
	 console.log("O número " + numero + " é ímpar");
	 resp = prompt("Quer contínuar? s/n: ");
	}
}
alert("Você decidiu não continuar, espero não te decepcionar novamente... :(");

//ou

var num = 0;
var resp = "s";
while (resp == "s" || resp == "S")
{
	console.log("Programa 1 - Par ou Ímpar");
	num = Number(prompt("Número: "));
	if (num % 2 == 0)
		alert("O número " + num + " é par");
	else
		alert("O número " + num + " é ímpar");
	resp = prompt("Novo processamento? s/n: ");
}


//Programa 2: Programa 2 - Números de 1 a 15 - Comando while//
var n = 1;
console.log("Programa 2 - Números de 1 a 15 - Comando while");
while(n <= 15)
{
console.log(n);
n++;
}

//Programa 3: Programa 3 - Somatório dos números de 1 a 10 - Comando while//
var n = 1;
var total = 0;
console.log("Programa 3 - Somatório dos números de 1 a 10 - Comando while");
while(n <= 10)
{
console.log(n);
total = total + n;
n++;
}
console.log("O valor total é: " + total);


//Programa 4: Programa 4 - Números de 1 a 15 - Comando for//
var n = 1;
console.log("Programa 4 - Números de 1 a 15 - Comando for");
for (n = 1; n <= 15; n++)
{
	console.log(n);
}