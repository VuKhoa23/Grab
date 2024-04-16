package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.entity.user.Operator;
import com.grab.grabwebapp.services.OperatorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OperatorController {
    private final OperatorServices operatorService;

    @Autowired
    public OperatorController(OperatorServices operatorService) {
        this.operatorService = operatorService;
    }
}
