//Programa 5: Programa 5 - Multiplicação de 2 números// 
var numero1 = 0;
var numero2 = 0;
var total = 0;
console.log("Programa 5 - Multiplicação de 2 números");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
if (numero1 == 0 || numero2 == 0)
	{
	 alert("Multiplicação por 0 sempre será 0");
	}	
else
	{	
	 total = numero1 * numero2;
	 console.log("Total: " + total);
	}


//Programa 6: Programa 6 - Comparação de 2 números// 
var numero1 = 0;
var numero2 = 0;
console.log("Programa 6 - Comparação de 2 números");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
if (numero1 > numero2)
	 console.log("O número " + numero1 + " é maior que o número " + numero2);
else
if (numero1 < numero2)
	 console.log("O número " + numero1 + " é menor que o número " + numero2);
else		
	 console.log("O número " + numero1 + " é igual ao número " + numero2);		


//Programa 6: Programa 6 - Comparação de 2 números (outra versão)//
var numero1 = 0;
var numero2 = 0;
console.log("Programa 6 - Comparação de 2 números");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
if (numero1 > numero2)
	{
	 console.log("O número " + numero1 + " é maior que o número " + numero2);
	}
else
if (numero1 < numero2)
	{
	 console.log("O número " + numero1 + " é menor que o número " + numero2);
	}
else		
	{
	 console.log("O número " + numero1 + " é igual ao número " + numero2);		
	}


//Programa 7: Programa 7 - Verificação de sinal//
var numero = 0;
console.log("Programa 7 - Verificação de sinal");
numero = Number(prompt("Número: "));
if (numero > 0)
	{
	 console.log("O número " + numero + " é positivo");
	}
else
if (numero < 0)
	{
	 console.log("O número " + numero + " é negativo");
	} 
else
	{
	 console.log("O número " + numero + " é zero");
	}


//Programa 7: Programa 7 - Verificação de sinal (outra versão)//
var numero = 0;
console.log("Programa 7 - Verificação de sinal");
numero = Number(prompt("Número: "));
if (numero > 0)
	 console.log("O número " + numero + " é positivo");
else
if (numero < 0)
	 console.log("O número " + numero + " é negativo");
else
	 console.log("O número " + numero + " é zero");


//Programa 8: Programa 8 - Par ou Ímpar//
var numero = 0;
console.log("Programa 8 - Par ou Ímpar");
numero = Number(prompt("Número: "));
if (numero % 2 == 0)
	{
	 console.log("O número " + numero + " é par");
	}
else
	{
	 console.log("O número " + numero + " é ímpar");
	} 
