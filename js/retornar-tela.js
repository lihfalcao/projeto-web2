function cancelSignUp() {

    alertify.confirm('Espara um pouco', 'Você realmente não quer cancelar o cadastro?',
        function () {
            history.back();
        },
        function () {
            alertify.warning('Preencha os dados para o cadastro');
        });
}

function validateSingUp() {
    var username = new String(document.getElementById("username").value);
    var pass = new String(document.getElementById("pass").value);
    var pass2 = new String(document.getElementById("pass2").value);



    if (username.length == 0 && pass.length == 0 && pass2.length == 0) {
        alertify.alert('Espera um pouco', 'Por favor, preencha todos os campos');
        username.focus();
    }

    if (username.length == 0 && pass.length != 0) {
        alertify.alert('Opss', 'Por favor, preencha o campo usuário');
        username.focus();
    }

    if (pass.length == 0 && username.length != 0) {
        alertify.alert('Opss', 'Por favor, preencha o campo senha');
        pass.focus();
    }

    if (pass.valueOf() != pass2.valueOf() && username.length != 0) {
        alertify.alert('Espera um pouco', 'Senhas não coincidem, verificar senhas');
        pass2.focus();
    }


    if (username.length != 0 && pass.length != 0 && pass2.length != 0 && pass.valueOf() == pass2.valueOf()) {
        alert("Cadastro realizado com sucesso");
        history.back();
    }

}

function validateChar(event) {
    var x = event.which || event.keyCode;
    var caracteres = Object('$&-#@*+');
    if (x == 38 || x == 36 || x == 45 || x == 35 || x == 64 || x == 42 || x == 43) {
        alertify.error('Caractere Inválido, não utilizar: ' + caracteres.toString());
    }

}