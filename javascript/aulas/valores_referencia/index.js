const a = {
    nome: 'nome',
    sobrenome: 'sobrenome'
};
const b = a;

a.nome = 'João';
console.log(b); //o b é uma cópia de a, então tudo que se fizer no a, fará no b

const c = {
    nome: 'nome',
    sobrenome: 'sobrenome'
};
const e = {...c};//pegando os valores de c, mas sem criar uma cópia

c.nome = 'Rich';
console.log(e)//o e não é cópia de c, então o valor de e não será mudado, quando mudar o de c