package Entities;

public class CurrentResult {
    private double X;
    private double Y;
    private double R;
    private String result;

    public CurrentResult() {
    }

    public void setX(double x) {
        X = x;
    }

    public void setY(double y) {
        Y = y;
    }

    public void setR(double r) {
        R = r;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public double getX() {
        return X;
    }

    public double getY() {
        return Y;
    }

    public double getR() {
        return R;
    }

    public String getResult() {
        return result;
    }

}


