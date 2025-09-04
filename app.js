let nao = document.getElementById("nao");
let caixa = document.getElementById("caixa");

function moverBotao() {
    let maxX = caixa.clientWidth - nao.offsetWidth;
    let maxY = caixa.clientHeight - nao.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    nao.style.position = "absolute";
    nao.style.let =  x + "px";
    nao.style.top =  y + "px";
}

    function chamarLink(){
        window.open("home.html", "_blanck");
    }

nao.addEventListener("mouseover", moverBotao);