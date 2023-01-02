var senha = "x8";
var entrada = "";
do
{
 entrada = prompt("digite sua senha: ", "xx");
}while(entrada != senha);
console.log("senha certa");


var senha = "x8";
var entrada = "";
while(entrada != senha)
{
 entrada = prompt("digite sua senha: ", "xx");
}
console.log("senha certa");


//se a senha ja tiver no entrada, ele não executa
var senha = "x8";
var entrada = "x8";
while(entrada != senha)
{
 entrada = prompt("digite sua senha: ", "xx");
}
console.log("senha certa");


var k = 0;
for (k = 0; k < 4; k++)
{
	console.log(k);
}


var texto = "ABC";
var k = 0;
for (k = 0; k < 3; k++)
{
	console.log(texto[k]);
}


var texto = "ABC";
var k = 0;
for (k = 0; k < texto.length; k++)
{
	console.log(texto[k]);
}
alert(texto.length + " caracteres");


var valores = [1, 5, -7, 8, -3];
var total = 0;
for (var k = 0; k < valores.length; k++)
{
	if (valores[k] < 0)
		break;
	else
		total = total + valores[k];

}


var texto = "js n é java";
var cont = 0;
var k = 0;
for (var k = 0; k < texto.length; k++)
{
	if (texto[k] != "a")
		continue;
	else
		cont = cont + 1;
}
console.log(cont + " letras 'a'");


