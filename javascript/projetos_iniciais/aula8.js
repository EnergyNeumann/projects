function exibeMsg() //definição
{
	alert("olá"); //corpo da função
}
exibeMsg(); //chamada da função


function exibeMsg() //definição
{
	alert("olá"); //corpo da função
	alert("hello");
}
exibeMsg(); //chamada da função
console.log("retorno");


function exibe(nome1) //definição
{
	alert(nome1);//corpo da função
	}
var nome = "";
nome = prompt("Nome: ");
exibe(nome); //chamada da função


function exibe(nome1) //definição
{
	alert(nome1);//corpo da função
	alert("olá " + nome1);
	}
var nome = "";
nome = prompt("Nome: ");
exibe(nome); //chamada da função


function exibe(nome1) //definição
{
	alert(nome1);//corpo da função
	alert("olá " + nome1);
}
console.log(nome1);
var nome = "";
nome = prompt("Nome: ");
exibe(nome); //chamada da função


function exibe(nome1) //definição
{
	alert(nome1);//corpo da função
	alert("olá " + nome1);
	}
var nome = "";
nome = prompt("Nome: ");
exibe(nome, "aaaaaaaa"); //chamada da função


var result = 0;
var numero1 = 0;
var numero2 = 0;
function somar(n1, n2)
{
	return n1 + n2;
	console.log("FIM");
}
numero1 = Number(prompt("n1: "));
numero2 = Number(prompt("n2: "));
result = somar(numero1, numero2);
console.log("Total: " + result);


var result = 0;
var numero1 = 0;
var numero2 = 0;
function somar(n1, n2)
{
	return n1 / n2;
}
numero1 = Number(prompt("n1: "));
numero2 = Number(prompt("n2: "));
if (numero2 == 0)
	console.log("divisão impossivel");
else
{
	result = somar(numero1, numero2);
	console.log("total: " + result);	
}


