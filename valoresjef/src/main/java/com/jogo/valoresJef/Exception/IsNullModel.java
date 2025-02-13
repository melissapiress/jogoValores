package com.jogo.valoresJeF.Exception;

public class IsNullModel {
    private String message;

    public IsNullModel(String message){
        this.message=message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
