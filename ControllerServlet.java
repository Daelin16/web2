package main.java.Servlets;


import Entities.CurrentResult;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.util.ArrayList;


public class ControllerServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        ServletContext context = request.getServletContext();
        if (request.getParameter("X") == null || request.getParameter("Y") == null || request.getParameter("R") == null) {
            if (request.getParameter("reset") != null) {
                context.setAttribute("results", null);
//                context.setAttribute("result", new ArrayList<>());
                RequestDispatcher requestDispatcher = request.getRequestDispatcher("AnswerTable.jsp");
                requestDispatcher.forward(request, response);
            } else {
                ArrayList<CurrentResult> results;
                if (context.getAttribute("results") != null) {
                    results = (ArrayList<CurrentResult>) context.getAttribute("results");
                } else {
                    results = new ArrayList<CurrentResult>();
                }
                CurrentResult result = new CurrentResult();
                result.setResult("Неверные данные");
                results.add(result);
                context.setAttribute("result", result);
                context.setAttribute("rofl", "rofl");
                RequestDispatcher requestDispatcher = request.getRequestDispatcher("rofl.jsp");
                requestDispatcher.forward(request, response);
            }
        } else {
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("check");
            requestDispatcher.forward(request, response);
        }
    }
}


