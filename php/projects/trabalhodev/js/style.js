/*sistema de ver senha uwu*/
const senha = document.querySelector('.senha');
const eye = document.querySelector('.eye');

eye.onclick = () =>{
    if (senha.type === 'password'){
        senha.type = 'text'
    }else{
        senha.type = 'password'
    }
}

