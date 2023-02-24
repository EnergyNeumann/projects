const form = document.querySelector("#formulario");
form.addEventListener("submit", function(evento){
    //tirando funcionalidade do submit
    evento.preventDefault();

    //adicionando idade para uma variável
    const inputIdade = evento.target.querySelector("#idade");
    const idade = Number(inputIdade.value);
    

});
