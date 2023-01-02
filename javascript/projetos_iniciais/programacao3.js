//Programa 1: Programa 1 - Troca de valores (swap)//
var a = 0;
var b = 0;
var auxi;
console.log("Programa 1 - Troca de valores (swap)");
a = Number(prompt("Digite o número do carro 1: "));
b = Number(prompt("Digite o número do carro 2: "));
auxi = b;
b = a;
a = auxi;
console.log("O valor do carro 1 será de: " + a);
console.log("O valor do carro 2 será de: " + b);


//Programa 2: Programa 2 - Média aritmética//
var n1 = 0;
var n2 = 0;
var n3 = 0;
var total = 0;
var media = 0;
console.log("Programa 2 - Média aritmética");
n1 = Number(prompt("Número 1: "));
n2 = Number(prompt("Número 2: "));
n3 = Number(prompt("Número 3: "));
total = n1 + n2 + n3;
media = total / 3;
if (media > 6)
	{
	 console.log("Aprovado, sua média é maior que 6!");
	}
else
if (media < 4)
	{
	 console.log("Reprovado, sua média é menor que 4!");	
	}
else
	{
	 console.log("Exame, sua média é maior que 4, e menor que 6");
	}
console.log("Sua média é " + media);


//Programa 3: Programa 3 - Salário líquido//
var salario = 0;
var ir = 0;
var inss = 0;
var desconto = 0;
var salariol = 0;
console.log("Programa 3 - Salário líquido");
salario = Number(prompt("Digite seu salário bruto "));
inss = salario * 0.14;
if (salario > 10000)
    {
     ir = salario * 0.1;
     desconto = ir + inss;
	   salariol = salario - desconto;
	   console.log("Seu IR é " + ir);
	   console.log("Seu INSS é " + inss);
	   console.log("Seu desconto é de " + desconto);
	   console.log("Seu salario liquido é de " + salariol);
	  }
else
	  {
	   ir = salario * 0.05;
	   desconto = ir + inss;
	   salariol = salario - desconto;
	   console.log("Seu IR é " + ir);
	   console.log("Seu INSS é " + inss);
	   console.log("Seu desconto é de " + desconto);
	   console.log("Seu salario liquido é de " + salariol);
	  }	


//Programa 4: Programa 4 - Calculadora//
var n1 = 0;
var n2 = 0;
var opera = "";
console.log("Programa 4 - Calculadora");
n1 = Number(prompt("Digite o número 1: "));
n2 = Number(prompt("Digite o número 2: "));
opera = prompt("Digite uma operação: ");
switch(opera)
  {
  	case "+":
  	console.log(n1 + n2);
  	break;
  	case "-":
  	console.log(n1 - n2);
  	break;
  	case "*":
  	console.log(n1 * n2);
  	break;
  	case "/":
  	console.log(n1 / n2);
  	break;
  	default:
	  console.log("Operação não identificada");
	  break;
  }
