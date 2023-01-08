function carregar () {

    var email = document.getElementById('inputEmail');
    var senha = document.getElementById('inputPassword');
    var erro = document.getElementById('erroEmail');
    var padraoSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@#$%&*!-+&*]).{8,20}$/;
    var padraoEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    var botao = document.getElementById('botao');
    var verificaEmail = false;
    var verificaSenha = false;

    botao.disabled = true;

    email.onblur = () => {
        if(!padraoEmail.test(email.value)){
            erro.innerHTML = "Email invalido";
            email.style.borderColor = "red";
            verificaEmail = false;
        }else{
            verificaEmail = true;
        }
        login(verificaEmail, verificaSenha);
    }

    email.onfocus = () => {
        if(erro.innerHTML == "Email invalido"){
            erro.innerHTML = " ";
            email.style.borderColor = "black";
        }
    }

    senha.onkeyup = () => {
        if(padraoSenha.test(senha.value)){
            verificaSenha = true;
        }else{
            verificaSenha = false;
        }
        login(verificaEmail, verificaSenha);
    }

}

function login(email, senha){
    if(senha && email){
        botao.disabled = false;
    }else{
        botao.disabled = true;
    }
}

function logar(){
    var email = document.getElementById('inputEmail');
    var senha = document.getElementById('inputPassword');

    setTimeout(alert('Login efetuado com sucesso!'), 3000);

    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);
}