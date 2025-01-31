package com.valoresjef.valoresjef.IsNullException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class IsNullHandler {
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    @ResponseBody
    @ExceptionHandler
    public IsNullModel handler (IsNullException ine) {
        return new IsNullModel(ine.getMessage());
    }
}
