function saudacao(nome){
    return `Bom dia ${nome}!`;
}//não precisa do ;

const variavel = saudacao('Luiz');//chamando a funcao, caso esteja com um console.log(`nome`)
console.log(variavel) //vai retornar apenas isso, qnd usa o return

function soma(x, y){
    const resultado = x + y;
    return resultado
}

console.log(soma(2, 7))