//erro barbaro, por n atribuir valor para var total
var n = 10;
var total;

total = total + n;
console.log("Total: " + total);


//certo
var n = 10;
var total = 0;

total = total + n;
console.log("Total: " + total);


var n = 10;
var total;
console.log(total);
console.log(typeof total);


var total = 0;
var k = 0;
while(k < 4)
{
	total = total + k;
	k++;
}
console.log("Total: " + total);


//situação errada, pois ele entra no primeiro e depois no segundo, e assim mantem, pois o k já está valendo 3
var k = 0;
var n = 0;
var tot = 0;
var resp = "s";
while (resp == "s" || resp == "S")
{
	while (k < 3)
	{
		n = Number(prompt("Numero: "));
		tot = tot + n;
		k++;
	}
	console.log("Total: " + tot);
	console.log("k vale " + k);
	resp = prompt("Novo processamento? (s/n): ");
	//k = 0;
	//tot = 0;
}


//situação certa, pois zerou a variável k para que assim o programa reinicie, mas, o total vai aumentando
var k = 0;
var n = 0;
var tot = 0;
var resp = "s";
while (resp == "s" || resp == "S")
{
	while (k < 3)
	{
		n = Number(prompt("Numero: "));
		tot = tot + n;
		k++;
	}
	console.log("Total: " + tot);
	console.log("k vale " + k);
	resp = prompt("Novo processamento? (s/n): ");
	k = 0;
	//tot = 0;
}


//situação nota 100, pois o k reinicia e o total tbm
var k = 0;
var n = 0;
var tot = 0;
var resp = "s";
while (resp == "s" || resp == "S")
{
	while (k < 3)
	{
		n = Number(prompt("Numero: "));
		tot = tot + n;
		k++;
	}
	console.log("Total: " + tot);
	console.log("k vale " + k);
	resp = prompt("Novo processamento? (s/n): ");
	k = 0;
	tot = 0;
}
//I/O Error
//Erro de I/O = erro de idiota



var times = [];
times[0] = "Santos";
times[1] = "Palmeiras";
times [2] = "São Paulo";
console.log(times[0]);


var times = [];
times[0] = "Santos";
times[1] = "Palmeiras";
times[2] = "São Paulo";
console.log(times[0]);
console.log("elementos = " + times.length);
console.log("valor máximo do índice: " + (times.length - 1));


var times = [];
times[0] = "Santos";
times[1] = "Palmeiras";
times[2] = "São Paulo";
times[3] = "Corinthians";
console.log(times[0]);
console.log("elementos = " + times.length);
console.log("valor máximo do índice: " + (times.length - 1));


var times = ["Santos", "Palmeiras", "São Paulo"];
console.log("elementos = " + times.length);


var times = ["Santos", "Palmeiras", "São Paulo"];
var k = 0;
while (k < times.length)
{
	console.log(times[k]);
	k++;
}


var nomes = [];
var k = 0;
while (k < 4)
{
	nomes[k] = prompt("Nome: ")
	k++;
}
k = 0;
while (k < 4)
{
	console.log(nomes[k]);
	k++;
}