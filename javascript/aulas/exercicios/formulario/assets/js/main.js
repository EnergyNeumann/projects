const form = document.querySelector("#formulario");
//após submeter formulário
form.addEventListener("submit", function(evento){
    //tirando funcionalidade do submit
    evento.preventDefault();

    //adicionando idade para uma variável
    const inputIdade = evento.target.querySelector("#idade");
    const idade = Number(inputIdade.value);
    //validação de idade
    if (isNaN(idade)) {//se não for um número
        setResultado('A idade precisa ser um número', false);
        return;
    }else if(idade == 0){
        setResultado('A idade não foi identificada', false);
        return;
    }else if(idade < 13){
        setResultado('Você precisa ser maior de 13 anos', false);
        return;
    }

    const inputNome = evento.target.querySelector('#nome');
    const nomespacado = String(inputNome.value);
    const nome = nomespacado.trim() 
    console.log(nome)
    if (Number(nome)){
        setResultado('O nome precisa ser em letras', false);
        return;
    }else if(nome == ''){
        setResultado('O nome não foi identificado', false);
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
