const form = document.querySelector("#formulario");
form.addEventListener("submit", function(evento){
    //tirando funcionalidade do submit
    evento.preventDefault();

    //adicionando idade para uma variável
    const inputIdade = evento.target.querySelector("#idade");
    const idade = Number(inputIdade.value);
    
    if (!idade) {//se não for digitado um número ou alguma coisa
        setResultado('Idade inválida', false);
        return;
    }
});

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, validando){
    //pegando a área de resultado e colocando em uma variável
    const resultado = document.querySelector("#resultado");

    resultado.innerHTML = ''; //colocando um inner zerado

    const p = criaP();

    //se for válido, criará a classe resultado-valido. se for inválido, criará a resultado-invalido
    if (validando){
        p.classList.add('resultado-valido');
    }else{
        p.classList.add('resultado-invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}
