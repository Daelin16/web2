package main.java.Servlets;

import Entities.CurrentResult;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

public class AreaCheckServlet extends javax.servlet.http.HttpServlet {
    int count = 0;
    private String strResult = "";
    private double X;
    private double Y;
    private double R;
    private String strX;
    private String strY;
    private String strR;


    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        ServletContext context = request.getServletContext();
        boolean isOK = true;
        if (context.getAttribute("count") != null) {
            count = (Integer) context.getAttribute("count");
            count++;
            context.setAttribute("count", count);
        } else {
            count++;
            context.setAttribute("count", count);
        }
        strX = request.getParameter("X").replaceAll(",", ".");
        strY = request.getParameter("Y").replaceAll(",", ".");
        strR = request.getParameter("R").replaceAll(",", ".");
        try {
            X = Double.parseDouble(strX);
            Y = Double.parseDouble(strY);
            R = Double.parseDouble(strR);
        } catch (NumberFormatException e) {
            isOK = false;
        }

        ArrayList<CurrentResult> results;
        if (context.getAttribute("results") != null) {
            results = (ArrayList<CurrentResult>) context.getAttribute("results");
        } else {
            results = new ArrayList<>();
        }
        CurrentResult result = new CurrentResult();
        if (isOK) {
// вычисление попадания
            if (X >= 0 && Y >= 0 && X <= R/2 && Y <= R) strResult = "Входит";
            else if (X >= 0 && X<=R/2 && Y<=0 && Y>=-R/2 && Y>=X - R/2 ) strResult = "Входит";
            else if (Y >= 0 && X <= 0 && X >= -R && Y<=R && X*X + Y*Y <= R*R) strResult = "Входит";
            else strResult = "Не входит";

            result.setX(X);
            result.setY(Y);
            result.setR(R);
            result.setResult(strResult);

        } else {
            result.setResult("Неверные данные");

        }
        results.add(result);
        context.setAttribute("results", results);


        RequestDispatcher requestDispatcher = request.getRequestDispatcher("AnswerTable.jsp");
        requestDispatcher.forward(request, response);
    }


}


