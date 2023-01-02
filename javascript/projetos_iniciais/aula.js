var letra = "";
letra = prompt("Digite uma letra: ");
if (letra == "a" || letra == "A")
	console.log("Abacate");
else
	if (letra == "b" || letra == "B")
		{
		console.log("Banana");
		console.log("Teste de chaves");
		}
	else
		if (letra == "c" || letra == "C")
			console.log("Cebola")
		else
			console.log("Não tem a merda da letra, parça");
console.log("Vaza");


var letra = "";
letra = prompt("Digite uma letra: ");
switch(letra)
 	{
    case "a";
	  console.log("abacaxi");
	  case "b";
	  console.log("banana");
	  case "c";
	  console.log("cebola");
	}


var letra = "";
letra = prompt("Digite uma letra: ");
switch(letra)
  {
  	case "a":
  	case "A":
	  console.log("abacaxi\n");
	  break;
	case "b":
	case "B":
	  console.log("banana");
	  break;
	case "c":
	case "C":
	  console.log("cebola");
	  break;
	default:
	  console.log("Letra não identificada");
	  break;
  }
console.log("Vaza");
/* 
\  = Backslash ou stroke
\n = Sequência de escape. Nova linha
\t = tabulação vertical
*/