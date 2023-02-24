const form = document.querySelector("#formulario");
form.addEventListener("submit", function(evento){
    //tirando funcionalidade do submit
    evento.preventDefault();

    //adicionando idade para uma variável
    const inputIdade = evento.target.querySelector("#idade");
    const idade = Number(inputIdade.value);
    
    if (isNaN(idade)) {//se não for um número
        setResultado('A idade precisa ser um número', false);
        return;
    }else if(idade == 0){
        setResultado('A idade não foi identificada')
        return;
    }else if(idade < 13){
        setResultado('Você precisa ser maior de 13 anos')
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
    if (!validando){
        p.classList.add('resultado-invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)

    setTimeout(() => {
        resultado.innerHTML = ''; //colocando um inner zerado
      }, 6000)
}
