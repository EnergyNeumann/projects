function meuEscopo(){//meu escopo não é o global, então vai rodar oq eu colocar, apenas se eu declarar
    const form = document.querySelector('.form');//dizendo que a variável form é o mesmo que a classe form do html. ele entra no documento e pega o campo
    const resultado = document.querySelector('.resultado') //pegando os resultados do form

    const pessoas = []; //array para guardar resultados


    // form.onsubmit = function(evento){//quando o formulário for enviado (clicar no botão enviar) aparecerá um alert
    //     evento.preventDefault();//nesse evento, fará com que o formulário não seja enviado. ou seja, deixará default, para que o formulário não envie e acabe fazendo os dados serem perdidos
    //     alert(1);
    
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome'); //pega direto do form, para que vá em um lugar mais preciso
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })//adicionando os valores num objeto
        // console.log(nome.value, sobrenome.value, peso.value, altura.value);//pegar o valor de cada campo
        console.log(pessoas);//mostrar no console

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;//retorna esses valores para o html dentro de um paragrafo
    }

    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();