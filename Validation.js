let counter = 3;
let position = 60;
let normX = false;
let normY = false;
// let click
let N = 0;

//
// function sizeupIframe() {
//     let iframe = document.getElementById("iFrame");
//     iframe.height = counter * 65;
//     counter++;
// }
//
// function resizeIframe() {
//     let iframe = document.getElementById("iFrame");
//     let size = document.getElementById("iFrame").contentWindow.document.querySelectorAll(".answerTable :last-child :last-child").length - 3;
//     counter = counter + size;
//     iframe.height = counter * 65;
// }
//
// function normalizeSizeOfFrame() {
//     let iframe = document.getElementById("iFrame");
//     iframe.height = 100;
// }

function validateY() {
    let Y = document.getElementById("Y");
    if (isNaN(Number(Y.value.replace(/\s+/g, '').replace(",", "."))) || (Y.value[0] === "0" && Y.value.length > 1) || Y.value === "-") {
        Y.style.backgroundColor = "#ff0000";
        normY = false;
        disableButton();
    } else {
        if (Number(Y.value.replace(",", ".")) >= -3 && Number(Y.value.replace(",", ".")) <= 5) {
            Y.style.backgroundColor = "#74ff48";
            normY = true;
        } else {
            Y.style.backgroundColor = "#ff0000";
            normY = false;
            disableButton()

        }
    }

    if (Y.value.replace(/\s+/g, '') === "") {
        Y.style.backgroundColor = "#ffffff";
        normY = false;
        disableButton()
    }
    activateButton();

}

function activateButton() {
    if (normX && normY) {
        document.getElementById("checkButton").disabled = false;
        // document.getElementById("checkButton").style.color = "#D3D3D3";
        // document.getElementById("checkButton").style.removeProperty("background-position")
    }


}

function disableButton() {
    // document.getElementById("checkButton").style.color = "#000000";
    // document.getElementById("checkButton").style.backgroundPosition = "0 0";
    document.getElementById("checkButton").disabled = true;
}
// "#D3D3D3"