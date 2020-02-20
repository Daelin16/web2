<%--
  Created by IntelliJ IDEA.
  User: vdima
  Date: 24.12.2019
  Time: 16:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html lang="ru" class="content">
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа 2</title>
    <link rel="stylesheet" href="style.css">
    <script src="Validation.js"></script>
    <script src="CanvasDrawer.js"></script>
    <script src="jquery-3.4.1.js"></script>

</head>
<body onload="drawFigure(2); disableButton()" id="body">


<div id="header">
    <div id="header-left">
        Ураков Ярослав Евгеньевич <br>
        Воробьев Дмитрий Александрович
    </div>
    <div id="header-right">
        <div id="header-right-left">Группа: P3202</div>
        <div id="header-right-right">Вариант: 831821</div>
    </div>
</div>
<div id="left">
    <form method="GET" action="controller" target="iframe">
        <div id="x">
            X
            <label><input type="radio" name="X" value="-3" onclick="normX = true; activateButton()">-3</label>
            <label><input type="radio" name="X" value="-2" onclick="normX = true; activateButton()">-2</label>
            <label><input type="radio" name="X" value="-1" onclick="normX = true; activateButton()">-1</label>
            <label><input type="radio" name="X" value="0" onclick="normX = true; activateButton()">0</label>
            <label><input type="radio" name="X" value="1" onclick="normX = true; activateButton()">1</label>
            <label><input type="radio" name="X" value="2" onclick="normX = true; activateButton()">2</label>
            <label><input type="radio" name="X" value="3" onclick="normX = true; activateButton()">3</label>
            <label><input type="radio" name="X" value="4" onclick="normX = true; activateButton()">4</label>
            <label><input type="radio" name="X" value="5" onclick="normX = true; activateButton()">5</label>
        </div>

        <div id="YY">
            <label for="Y">Y</label>
            <input id="Y" type="text" name="Y" placeholder="{-3...5}" oninput="validateY()">
        </div>
        <div id="buttons">
            <input id="R_1" type="hidden" name="R">
            <%--<label>--%>
                R
                <button type="button" name="submit_button" value="1" onclick="drawFigure(0)">1</button>
                <button type="button" name="submit_button" value="2" onclick="drawFigure(1)">2</button>
                <button type="button" name="submit_button" value="3" onclick="drawFigure(2)">3</button>
                <button type="button" name="submit_button" value="4" onclick="drawFigure(3)">4</button>
                <button type="button" name="submit_button" value="5" onclick="drawFigure(4)">5</button>
            <%--</label>--%>
            <br>
            <div id="check">
                <form method="GET" action="controller" target="iframe">
                    <button id="1" type="submit" name="reset" value="reset"
                            onclick="clearDots(); normalizeSizeOfFrame()">Сбросить
                    </button>
                </form>
                <button type="submit" id="checkButton" onclick="sizeupIframe()" disabled>Проверить</button>
            </div>
        </div>
    </form>
</div>
<div id="right">
    <canvas id="canvas" width="400" height="400" onclick="drawDot(event); sizeupIframe()"></canvas>
</div>
<div align="center" id="table" style="height: 390px; margin-top: 445px">
    <iframe STYLE="width: 60%; height: 390px" align="center" scrolling="no" frameborder="0" name="iframe"
            src="AnswerTable.jsp" id="iFrame"></iframe>
</div>
<div id="bottom">
</div>
</body>
</html>



