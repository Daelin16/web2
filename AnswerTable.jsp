<%@ page import="java.util.ArrayList" %>
<%@ page import="Entities.CurrentResult" %><%--
    Created by IntelliJ IDEA.
    User: vdima
    Date: 16.01.2020
    Time: 02:10
    To change this template use File | Settings | File Templates.
    --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Table</title>
    <link rel="stylesheet" href="style.css">
    <script src="CanvasDrawer.js"></script>
</head>
<body>
<div id="table" align="center">
    <table class="answerTable" width="60%" style="font-size: 15px">
        <tr>
            <th width="10%">Выбранная точка</th>
            <th width="10%">Радиус R</th>
            <th width="10%">Входит/не входит</th>
            <th width="10%">Отобразить точку на рисунке</th>
        </tr>
        <% if (application.getAttribute("results") != null) {
            ArrayList<CurrentResult> results = (ArrayList<CurrentResult>) application.getAttribute("results");
            if (results.size() > 10) {
                for (int i = 0; i < 10; i++) {
                    results.set(i, results.get(i + 1));
                }
            }
            for (Object object : results) {
                CurrentResult result = (CurrentResult) object;
                if (result.getResult().equals("Неверные данные")) {%>
        <tr>
            <th colspan="4">Неверные данные</th>
        </tr>
        <% } else {
            String color = "";
            if (result.getResult().equals("Входит")) color = "\'#32CD32\'";
            else color = "\'#1e51a4\'";
            double X = result.getX() * 31 + 200;
            double Y = -result.getY() * 31 + 200;
        %>
        <tr>
            <th width="10%">(<%=result.getX()%>,<%=result.getY()%>)</th>
            <th width="10%"><%=result.getR()%>
            </th>
            <th width="10%"><%=result.getResult()%>
            </th>
            <th>
                <button id="draw" onclick="drawOnlyDot(<%=X%>,<%=Y%>,<%=color%>)">Нарисовать точку</button>
            </th>
        </tr>
        <% }
        }
        }%>
    </table>
</div>
</body>
</html>
