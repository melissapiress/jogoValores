package com.valoresjef.valoresjef.Cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
public class CadastroController {
    @Autowired
    private CadastroRepository cadastroRepository;

    @Autowired
    private CadastroService cadastroService;

    @PostMapping("/cadastroUser")
    public ResponseEntity<String> saveUser(@RequestBody CadastroModel cadastroModel){
        return new ResponseEntity<>(cadastroService.save(cadastroModel), HttpStatus.OK);
    }

    @GetMapping("/getUsers")
    public List<CadastroModel> getAllUsers() {return cadastroRepository.findAll();}
}
