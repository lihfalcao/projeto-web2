var x = document.getElementById("logo");

function myFunction() {
    x.style.animation = "blur 30s"; // Standard syntax
}

x.addEventListener("animationstart", myStartFunction);

function myStartFunction() {
    var myVar = setInterval(function () {
        window.location.href = "login.html"
    }, 4000);
}