function validateEnter() {

    if (document.getElementById("username").value.length == 0 && document.getElementById("pass").value.length == 0) {
        alertify.alert('Espera um pouco', 'Por favor, preencha todos os campos');
        document.getElementById("username").focus();
    }

    if (document.getElementById("username").value.length == 0 && document.getElementById("pass").value.length != 0) {
        alertify.alert('Opss', 'Por favor, preencha o campo usuário');
        document.getElementById("username").focus();
    }

    if (document.getElementById("pass").value.length == 0 && document.getElementById("username").value.length != 0) {
        alertify.alert('Opss', 'Por favor, preencha o campo senha');
        document.getElementById("pass").focus();
    }

    if (document.getElementById("username").value.length != 0 && document.getElementById("pass").value.length != 0) {
        location.href = "tela-inicial.html";
    }

}


document.getElementById("button-singup").onclick = function () {
    location.href = "cadastrar.html";
};

function validateChar(event) {
    var x = event.which || event.keyCode;
    if (x == 38 || x == 36 || x == 45 || x == 35 || x == 64 || x == 42 || x == 43) {
        alertify.error('Caractere Inválido, não utilizar: $&-#@*+');
    }

}