const raiz = (n) => {
    return n**0.5;
};

const num = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;

texto.innerHTML = ''; //para não mostrar texto
texto.innerHTML += `<p>Você digitou o número ${num}</p>`;//colocamos '+=' para não ficar só uma linha mostrando
texto.innerHTML += `<p>A raiz do número ${num} é ${raiz(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>${num} é NaN? ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;

