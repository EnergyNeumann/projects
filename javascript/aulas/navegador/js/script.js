const confirma = confirm('Deseja apagar?');
let num = prompt('Digite um número');
if (num > 10){
    alert('O número é maior que 10')
}else{
    alert('O número é menor que 10')
}
let num2 = prompt('Digite um número');
document.write(confirma, '\n', typeof num, '\n');
const resultado = num + num2
document.write(resultado)