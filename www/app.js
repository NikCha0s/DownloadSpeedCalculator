/*
dtsizetxt primo input
dlspeedtxt secondo input
calcola bottone
internetspeed seconda combobox
datasize prima combobox
*/

function ResetData() {
    document.getElementById("datasize").selectedIndex = 2;
    document.getElementById("internetspeed").selectedIndex = 5;
    document.getElementById("dtsizetxt").value = "";
    document.getElementById("dlspeedtxt").value = "";
}

function Calcola() {
    var dataSize = document.getElementById("dtsizetxt");
    var downloadSpeed = document.getElementById("dlspeedtxt");
    var DataSizeFormat = document.getElementById("datasize");
    var DownloadSpeedFormat = document.getElementById("internetspeed");

    var dataSizeValue = dataSize.value.replace(",", ".");
    var downloadSpeedValue = downloadSpeed.value.replace(",", ".");

    if (dataSize.value == "" || downloadSpeed.value == "" || dataSize.value == "." || downloadSpeed.value == "." || dataSize == "," || downloadSpeed == ",") return;
    var QuantitaDatiDaScaricare = parseFloat(dataSize.value);
    var VelocitaDwl = parseFloat(downloadSpeedValue);

    if (QuantitaDatiDaScaricare <= 0 || VelocitaDwl <= 0) return;
    var DtIndex = DataSizeFormat.selectedIndex;
    switch (DtIndex) {
        case 0:
            QuantitaDatiDaScaricare *= Math.pow(2, 40);
            break;
        case 1:
            QuantitaDatiDaScaricare *= Math.pow(10, 12);
            break;
        case 2:
            QuantitaDatiDaScaricare *= Math.pow(2, 30);
            break;
        case 3:
            QuantitaDatiDaScaricare *= Math.pow(10, 9);
            break;
        case 4:
            QuantitaDatiDaScaricare *= Math.pow(2, 20);
            break;
        default:
            QuantitaDatiDaScaricare *= Math.pow(10, 6);
            break;
    }
    var DlIndex = DownloadSpeedFormat.selectedIndex;
    switch (DlIndex) {
        case 0:
            VelocitaDwl *= Math.pow(2, 30);
            break;
        case 1:
            VelocitaDwl *= Math.pow(10, 9);
            break;
        case 2:
            VelocitaDwl *= 134217728
            break;
        case 3:
            VelocitaDwl *= Math.pow(2, 20);
            break;
        case 4:
            VelocitaDwl *= Math.pow(10, 6);
            break;
        case 5:
            VelocitaDwl *= 131072
            break;
        case 6:
            VelocitaDwl *= Math.pow(2, 10);
            break;
        case 7:
            VelocitaDwl *= Math.pow(10, 3);
            break;
        default:
            VelocitaDwl *= 128;
            break;
    }
    var tempo = QuantitaDatiDaScaricare / VelocitaDwl;
    document.getElementById("textarea").value = ElaboraTempo(tempo);
}

function ElaboraTempo(tempo) {
    var giorni = Math.trunc(tempo / 86400);
    var secondi = (tempo % 86400); //86400 = (24*3600), pre-calcolato per diminuire i calcoli, usando la conversione esplicita con (int) il valore viene automaticamente troncato

    var ore = Math.trunc(secondi / 3600);
    secondi %= 3600;

    var minuti = Math.trunc(secondi / 60);
    secondi = Math.round(secondi % 60);

    return `${giorni} giorni ${ore} ore ${minuti} minuti ${secondi} secondi`;
}

function CheckNumber(number) {
    var textBox = (number == 1) ? document.getElementById("dtsizetxt") : document.getElementById("dlspeedtxt");
    var testo = textBox.value;
    var lastChar = testo.charAt(testo.length - 1);
    var caratteriConsentiti = "01234567890,.";

    elimina = true;
    for (const carattere of caratteriConsentiti) {
        if (lastChar == carattere) elimina = false;
    }

    if (elimina) textBox.value = testo.replaceAll(lastChar, "");
}