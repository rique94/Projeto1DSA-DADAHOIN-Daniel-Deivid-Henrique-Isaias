const body = document.getElementById("body");
const botao = document.getElementById("botao")

function mudar() {
    if (body.style.color == "black") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        botao.innerText = "☼"
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        botao.innerText = "⏾"
    }
}
