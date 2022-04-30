function percentualeDi(numeroIntero, percentuale) {
    return Math.round(numeroIntero / 100 * percentuale);
}

function fixDimension() {
    var body = document.getElementsByTagName("body")[0];
    body.style.height = "auto"
    body.classList.remove(".firstbody");
    body.style.height = (body.clientHeight + percentualeDi(body.clientHeight, 3)).toString() + "px";
}

function XBTN() {
    alert("è un sito web caprone!");
}