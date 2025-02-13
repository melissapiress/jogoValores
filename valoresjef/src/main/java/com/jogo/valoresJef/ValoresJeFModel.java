package com.jogo.valoresJeF;

import org.springframework.data.annotation.Id;

public class ValoresJeFModel {

    private String username;

    @Id
    private String email;

    public ValoresJeFModel(String username, String email, String password) {
        this.username = username;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
