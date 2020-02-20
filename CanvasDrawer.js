var lines = new Path2D();
lines.moveTo(200, 398);
lines.lineTo(200, 2);
lines.moveTo(2, 200);
lines.lineTo(398, 200);

var yTriangle = new Path2D();
yTriangle.moveTo(200, 11);
yTriangle.lineTo(193, 11);
yTriangle.lineTo(200, 1);
yTriangle.lineTo(207, 11);
yTriangle.lineTo(200, 11);

var xTriangle = new Path2D();
xTriangle.moveTo(389, 200);
xTriangle.lineTo(389, 193);
xTriangle.lineTo(399, 200);
xTriangle.lineTo(389, 207);
xTriangle.lineTo(389, 200);

var xLines = new Path2D();
xLines.moveTo(169, 197);
xLines.lineTo(169, 203);
xLines.moveTo(138, 197);
xLines.lineTo(138, 203);
xLines.moveTo(107, 197);
xLines.lineTo(107, 203);
xLines.moveTo(76, 197);
xLines.lineTo(76, 203);
xLines.moveTo(45, 197);
xLines.lineTo(45, 203);
xLines.moveTo(14, 197);
xLines.lineTo(14, 203);

xLines.moveTo(231, 197);
xLines.lineTo(231, 203);
xLines.moveTo(262, 197);
xLines.lineTo(262, 203);
xLines.moveTo(293, 197);
xLines.lineTo(293, 203);
xLines.moveTo(324, 197);
xLines.lineTo(324, 203);
xLines.moveTo(355, 197);
xLines.lineTo(355, 203);
xLines.moveTo(386, 197);
xLines.lineTo(386, 203);

var yLines = new Path2D();
yLines.moveTo(197, 169);
yLines.lineTo(203, 169);
yLines.moveTo(197, 138);
yLines.lineTo(203, 138);
yLines.moveTo(197, 107);
yLines.lineTo(203, 107);
yLines.moveTo(197, 76);
yLines.lineTo(203, 76);
yLines.moveTo(197, 45);
yLines.lineTo(203, 45);
yLines.moveTo(197, 14);
yLines.lineTo(203, 14);

yLines.moveTo(197, 231);
yLines.lineTo(203, 231);
yLines.moveTo(197, 262);
yLines.lineTo(203, 262);
yLines.moveTo(197, 293);
yLines.lineTo(203, 293);
yLines.moveTo(197, 324);
yLines.lineTo(203, 324);
yLines.moveTo(197, 355);
yLines.lineTo(203, 355);
yLines.moveTo(197, 386);
yLines.lineTo(203, 386);

function drawCoord() {
    let canvas = document.getElementById("canvas");
    let drawing = canvas.getContext("2d");

    drawing.strokeStyle = "black";
    drawing.fillStyle = "black";
    drawing.font = "12px cursive";
//lines
    drawing.stroke(lines);

//Y triangle
    drawing.fill(yTriangle);
    drawing.fillText("Y", 209, 14);

//X triangle
    drawing.fill(xTriangle);
    drawing.fillText("X", 389, 190);

//X lines
    drawing.stroke(xLines);
    drawing.fillText("1", 228, 194);

//Y lines
    drawing.stroke(yLines);
    drawing.fillText("1", 205, 172);
}

function drawFigure(n) {
    N = n;
    let canvas = document.getElementById("canvas");
    let drawing = canvas.getContext("2d");
    let R = document.getElementById("buttons").getElementsByTagName("button").item(n).innerText;
    let input = document.getElementById("R_1");
    input.value = R;
    normR = true;
    // document.getElementById("buttons").getElementsByTagName("button").item(n).disabled = true;
    drawing.strokeStyle = "#ff8000";
    drawing.fillStyle = "#ff8000";

    drawing.clearRect(0, 0, canvas.width, canvas.height);

    drawing.beginPath();
    drawing.fillRect(200, 200 - R * 31, 31 * R / 2, 31 * R);
    drawing.fill();
    drawing.moveTo(200, 200);
    drawing.lineTo(200 + R * 31 / 2, 200);
    drawing.lineTo(200, 200 + R * 31 / 2);
    drawing.lineTo(200, 200);
    drawing.fill();
    drawing.arc(200, 200, R * 31, Math.PI, 3 * Math.PI / 2);
    drawing.fill();

    drawCoord();


}

function drawDot(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    let R = document.getElementById("buttons").getElementsByTagName("button").item(N).innerText;
    let input = document.getElementById("R_1");
    input.value = R;
    normR = true;
    let realX = ((x - 200) / 31).toFixed(1);
    let realY = (-(y - 200) / 31).toFixed(1);
    $.get(
        "controller",
        {
            X: realX,
            Y: realY,
            R: R,
        },
        onAjaxSuccess
    );

    function onAjaxSuccess(data) {
        jQuery('iframe[name="iframe"]').contents().find('body').html(data);
        let result = document.getElementById("iFrame").contentWindow.document.querySelectorAll(".answerTable :last-child :last-child :nth-last-child(2)")[0].innerHTML;
        if (result.trim() === "Входит")
            drawOnlyDot(x, y, "#32CD32");
         else if (result.trim() === "Не входит")
            drawOnlyDot(x, y, "#ff0000");


    }
}

function clearDots() {
    let canvas = document.getElementById("canvas");
    let drawing = canvas.getContext("2d");
    drawing.clearRect(0, 0, canvas.width, canvas.height);
    drawCoord();
    drawFigure();
}

function drawOnlyDot(x, y, color) {
    let canvas;
    if (window === window.top) {
        canvas = document.getElementById("canvas");
    } else canvas = window.top.document.getElementById("canvas");
    let drawing = canvas.getContext("2d");
    drawing.fillStyle = color;
    drawing.beginPath();
    drawing.moveTo(x, y);
    drawing.arc(x, y, 2, -Math.PI, Math.PI);
    drawing.fill();
}
