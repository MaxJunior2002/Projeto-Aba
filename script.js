function logar(){

    var email = document.getElementById('inputEmail');
    var senha = document.getElementById('inputPassword');
    var erro = document.getElementById('erroEmail');

    email.onblur = () => {
        if(!email.checkValidity()){
            erro.innerHTML = "Email invalido";
        }
    }

    email.onfocus = () => {
        if(erro.innerHTML == "Email invalido"){
            erro.innerHTML = " ";
        }
    }
}
