const rateo = 5.38;
function percentualeDi(numeroIntero, percentuale) {
    return Math.round(numeroIntero / 100 * percentuale);
}

function fixDimension() {
    if(document.body.clientHeight != 947 || document.body.clientWidth != 1852) document.getElementById("blocco").style.display = "none";
    else document.getElementById("blocco").style.display = "block";
    var body = document.getElementById("realbody");
    body.style.height = "auto";
    var dimensioni = body.clientHeight + 10;
    body.style.height = (dimensioni + percentualeDi(dimensioni, rateo)).toString() + "px";
}

function XBTN() {
    alert("Are you seriously trying to use this button? It's a website!");
}