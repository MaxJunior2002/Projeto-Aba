function carregar () {

    var email = document.querySelector("input#inputEmail");
    var senha = document.querySelector("input#inputPassword");
    var erro = document.querySelector("span#erroEmail");
    var padraoSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[@#$%&*!-+&*]).{8,20}$/;
    var padraoEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    var verificaEmail = false;
    var verificaSenha = false;

    desabilitarBotao();

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
        habilitarBotao();
    }else{
        desabilitarBotao();
    }
}

function logar(){
    setTimeout(function(){
        alert('Login realizado com sucesso!');
        document.location.reload(true);
    },3000)

    var email = document.querySelector("input#inputEmail");
    var senha = document.querySelector("input#inputPassword");

    localStorage.setItem('email', email.value);
    localStorage.setItem('senha', senha.value);
}

function desabilitarBotao(){
    var botao = document.querySelector("button#botao");
    botao.disabled = true;

    botao.classList.add('botao-desativado');
    botao.classList.remove('botao-ativado');
}

function habilitarBotao(){
    var botao = document.querySelector("button#botao");
    botao.disabled = false;

    botao.classList.remove('botao-desativado');
    botao.classList.add('botao-ativado');
}