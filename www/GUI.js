const rateo = 5.38;
function percentualeDi(numeroIntero, percentuale) {
    return Math.round(numeroIntero / 100 * percentuale);
}


function fixDimension() {
    var body = document.getElementById("realbody");
    body.style.height = "auto";
    var dimensioni = body.clientHeight + 10;
    body.style.height = (dimensioni + percentualeDi(dimensioni, rateo)).toString() + "px";
}

function XBTN() {
    alert("è un sito web caprone!");
}