var nome = window.prompt("aaaaaaaaaaaaa");


var idade = prompt("Digite sua idade");


//retornar a idade, ou sem idade//
var idade = prompt("Digite sua idade");
if (idade == null || idade == "")
	{
	console.log("Você não digitou sua idade");
	}
else
	console.log("Você tem " + idade + " anos");


//retornar a idade, ou sem idade, mas com o Number prompt, para utilizar de números//
var idade = Number(prompt("Digite sua idade", "números apenas"));
if (idade == null || idade == "")
	{
	console.log("Você não digitou sua idade");
	}
else
	console.log("Você tem " + idade + " anos");


//alertar, com o objeto window//
window.alert("mensagem");


//ao invés do console, usando o alert//
var idade = Number(prompt("Digite sua idade"));
if (idade == null || idade == "")
	{
	alert("Você não digitou sua idade");
	}
else
	console.log("Você tem " + idade + " anos");


//return//
var resp = confirm("Cancelar a operação?");
if (resp == true)
	{
	console.log("Cancelamento confirmado");
	}
else
	console.log("desistiu da operação");

//ou//
var resp = window.confirm("Cancelar a operação?");
if (resp == true)
	{
	console.log("Cancelamento confirmado");
	}
else
	console.log("desistiu da operação");


//objeto.metodo()//

//carro 1 ir para vaga 2, e carro 2 para a vaga 1// 
//trabai novo (swap)// pegar o carro 2, e jogar na vaga auxiliar//
//após isso, colocar o carro 1 da vaga 1 e jogar na vaga 2// 
//ai o carro 2 sai da vaga reserva, e vai para a vaga 1//