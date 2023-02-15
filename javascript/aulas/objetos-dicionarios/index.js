const pessoa = {
    nome: 'Energy',
    sobrenome: 'Neumann',
    idade: 17
};


// const pessoa = {
//     nome: 'Energy',
//     sobrenome: 'Neumann',
//     idade: 17

//     fala(){
//         console.log('Olá');
//     }
// };
// pessoa.fala();


// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

function criaPessoa (nome, sobrenome, idade) {
        return {nome, sobrenome, idade};
    }

const pessoa1 = criaPessoa('Rich', 'Neu', 17);
console.log(pessoa1.nome)
