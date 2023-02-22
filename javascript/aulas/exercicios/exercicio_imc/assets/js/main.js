//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {//se não for peso (se o peso for NaN)
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {//se não for peso (se o peso for NaN)
        setResultado('Altura inválida', false);
        return;
    }
});

function criaP(){
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);//para mostrar o qualquer coisa lá no resultado
}