/*
dtsizetxt primo input
dlspeedtxt secondo input
calcola bottone
internetspeed seconda combobox
datasize prima combobox
*/

function ResetData(){
    document.getElementById("datasize").selectedIndex = 2;
    document.getElementById("internetspeed").selectedIndex = 5;
    document.getElementById("dtsizetxt").value = "";
    document.getElementById("dlspeedtxt").value = "";
}

function Calcola(){
    var dataSize = document.getElementById("dtsizetxt");
    var downloadSpeed = document.getElementById("dlspeedtxt");
    var dataSizeValue = dataSize.value.replace(",",".");
    var downloadSpeedValue = downloadSpeed.value.replace(",",".");
    if(dataSize.value == "" || downloadSpeed.value == "" || dataSize.value == "." || downloadSpeed.value == "." || dataSize == "," || downloadSpeed == ",") return;
    var QuantitaDatiDaScaricare = parseFloat(dataSize.value);
}

function ElaboraTempo(tempo) {
    var giorni = Math.trunc(tempo / 86400);
    var secondi = (int)(tempo % 86400); //86400 = (24*3600), pre-calcolato per diminuire i calcoli, usando la conversione esplicita con (int) il valore viene automaticamente troncato

    var ore = (secondi / 3600);
    secondi %= 3600;

    var minuti = (secondi / 60);
    secondi %= 60;

    return `${giorni} giorni ${ore} ore ${minuti} minuti ${secondi}`;
}

function percentualeDi(numeroIntero, percentuale){
    return Math.round(numeroIntero/100*percentuale);
}

function fixDimension(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove(".firstbody");
    body.style.height = (body.clientHeight + percentualeDi(body.clientHeight,3)).toString() + "px";
}