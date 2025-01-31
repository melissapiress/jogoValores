package com.valoresjef.valoresjef.Cadastro;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastroRepository extends MongoRepository<CadastroModel, Integer> {
}
