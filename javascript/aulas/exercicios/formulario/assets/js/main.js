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
    const nome = nomespacado.trim(); 
    if (Number(nome)){
        setResultado('O nome precisa ser em letras', false);
        return;
    }else if(nome == ''){
        setResultado('O nome não foi identificado', false);
        return;
    }

    const inputSenha = evento.target.querySelector('#senha');
    const senha = String(inputSenha.value);
    if (senha.length < 10){
        setResultado('A senha precisa ter pelo menos de 10 caracteres');
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


function mostrarSenha() {
    let x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


//função para limpar o botão
function limparBotao(){
    form.reset()
}

//cep automático
$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#logradouro").val("");
        $("#bairro").val("");
        $("#complemento").val("");
        $("#localidade").val("");
        $("#uf").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#logradouro").val("...");
                $("#complemento").val("...");
                $("#bairro").val("...");
                $("#localidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

               		
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#logradouro").val(dados.logradouro);
                        $("#complemento").val(dados.complemento);
                        $("#bairro").val(dados.bairro);    
                        $("#localidade").val(dados.localidade);                 
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        setResultado('Cep não identificado', false);
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                setResultado('Formato de Cep inválido', false);
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});