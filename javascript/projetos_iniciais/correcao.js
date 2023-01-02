//Programa 1: Programa 1 - Adição de 2 números// 
var n1 = 0;
var n2 = 0;
var total = 0;
console.log("Programa 1 - Adição de 2 números");
n1 = Number(prompt("Número 1: "));
n2 = Number(prompt("Número 2: "));
total = n1 + n2;
console.log("Total: " + total);

//Programa 2: Programa 2 - Subtração de 2 números// 
var numero1 = 0;
var numero2 = 0;
var total = 0;
console.log("Programa 2 - Subtração de 2 números");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
total = numero1 - numero2;
console.log("Total: " + total);

//Programa 3: Programa 3 - Divisão de 2 números resto// 
var numero1 = 0;
var numero2 = 0;
var total = 0;
console.log("Programa 3 - Divisão de 2 números resto");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
if (numero2 == 0)
	{
	 alert("Divisão por 0 não é possível");
	}
else 
	{
	 total = numero1 / numero2;
	 console.log("Total: " + total);
	}

//Programa 4: Programa 4 - Divisão de 2 números quociente// 
var numero1 = 0;
var numero2 = 0;
var total = 0;
console.log("Programa 4 - Divisão de 2 números quociente");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
if (numero2 == 0)
	{
	 alert("Divisão por 0 não é possível");
	}
else 
	{
	 total = numero1 % numero2;
	 console.log("Total: " + total);
	}

//Programa 5: Programa 5 - Multiplicação de 2 números// 
var numero1 = 0;
var numero2 = 0;
var total = 0;
console.log("Programa 5 - Multiplicação de 2 números");
numero1 = Number(prompt("Número 1: "));
numero2 = Number(prompt("Número 2: "));
total = numero1 * numero2;
console.log("Total: " + total);