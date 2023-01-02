//loop
var k = 0;
while (k < 4)
{
	console.log(k);
	k++;
}
/*K  Resultado 
 0   0
 1   1
 2   2
 3   3
 4*/
 //ou seja, se k<4 ele roda, mas quando chega no 4, ele para


var k = 0;
while (k < 4)
{
	console.log("abc");
	k++;
}
console.log("FIM")
//nome: corpo do while


var texto = "ABC";
var k = 0;
while (k < 3)
{
	console.log(texto[k]);
	k++;
}


var texto = "richard";
var k = 0;
while (k < 3)
{
	console.log(texto[k]);
	k++;
}
//string é um vetor de caracteres


var texto = "richard";
var k = 0;
console.log(texto);
/*
while (k < 3)
{
	console.log(texto[k]);
	k++;
}
*/


var texto = "richard";
var k = 0;
console.log(texto[0]);
/*
while (k < 3)
{
	console.log(texto[k]);
	k++;
}
*/
//vai pegar a letra r, que é o 0

var texto = "richard";
var k = 0;
console.log(texto[6]);
/*
while (k < 3)
{
	console.log(texto[k]);
	k++;
}
*/
//vai pegar a letra d, que é 6
//Variável indexada


var texto = "richard";
var k = 1;
while (k < 3)
{
	console.log(texto[k]);
	k++;
}
//começa no i, pois k vale 1, já se valesse 0, começaria no r


var texto = "richard";
var k = 0;
while (k < texto.length)
{
	console.log(texto[k]);
	k++;
}
//coloca cada caractere


var texto = "richard";
var k = 0;
console.log(texto.length)
//diz quantos caracteres tem o texto


var texto = "";
var k = 0;
texto = prompt("Nome: ");
while (k < texto.length)
{
	console.log(texto[k]);
	k++;
}
//fala os caracteres doq tu digitar


var texto = "";
var texto = "";
texto = prompt("Nome: ");
texto1 = texto.toUpperCase();
console.log(texto1);
//deixar tudo em maiusculo

var texto = "";
var texto = "";
texto = prompt("Nome: ");
texto1 = texto.toLowerCase();
console.log(texto1);
//deixar tudo em minusculo