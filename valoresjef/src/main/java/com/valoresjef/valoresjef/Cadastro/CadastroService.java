package com.valoresjef.valoresjef.Cadastro;

import com.valoresjef.valoresjef.IsNullException.IsNullException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastroService {
    @Autowired
    private CadastroRepository cadastroRepository;
    
    public String save(CadastroModel cadastroModel) {
        if (cadastroModel.getEmail() == null) {
            throw new IsNullException("O email não pode ser vazio.");
        } else if (cadastroModel.getUsername() == null) {
            throw new IsNullException("O nome de usuário não pode ser vazio.");
        } else if (cadastroModel.getPassword() == null) {
            throw new IsNullException("A senha não pode ser vazia.");
        } else {
            cadastroRepository.save(cadastroModel);
            return "Cadastro salvo";
        }
    }


}
