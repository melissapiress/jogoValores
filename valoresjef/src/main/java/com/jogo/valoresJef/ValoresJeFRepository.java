package com.jogo.valoresJeF;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValoresJeFRepository extends MongoRepository<ValoresJeFModel, String> {
}
