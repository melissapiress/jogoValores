package com.jogo.valoresJeF;

import com.jogo.valoresJeF.Exception.IsNullException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ValoresJeFService {
    @Autowired
    private ValoresJeFRepository cadastroRepository;

    public String save(ValoresJeFModel valoresModel) {
        if (valoresModel.getEmail() == null) {
            throw new IsNullException("O email não pode ser vazio.");
        } else if (valoresModel.getUsername() == null) {
            throw new IsNullException("O nome de usuário não pode ser vazio.");
        } else {
            cadastroRepository.save(valoresModel);
            return "Cadastro salvo";
        }
    }
}
