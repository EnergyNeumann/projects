const pessoa = {
    nome: 'Energy',
    sobrenome: 'Neumann',
    idade: 17
};

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Rich', 'Neu', 17);
console.log(pessoa1.nome)