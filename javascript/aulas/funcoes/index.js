function saudacao(nome){
    return `Bom dia ${nome}!`;
}//não precisa do ;

function soma(x = 1, y = 1){//caso n receba valores, serão 1
    const resultado = x + y;
    return resultado
}

const raiz = function(n){
    return n ** 0.5;
}; //precisa do ;, pois ela recebe o valor

const raiz2 = (n) => { //jeito 2 arrow function
    return n ** 0.5;
};

const raiz3 = n => n ** 0.5; //jeito 3 



const variavel = saudacao('Luiz');//chamando a funcao, caso esteja com um console.log(`nome`)
console.log(variavel) //vai retornar apenas isso, qnd usa o return

console.log(soma(2, 7))

console.log(raiz(16))