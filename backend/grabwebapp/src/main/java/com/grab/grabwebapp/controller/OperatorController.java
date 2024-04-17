package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.entity.user.Operator;
import com.grab.grabwebapp.services.OperatorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class OperatorController {
    private final OperatorServices operatorService;

    @Autowired
    public OperatorController(OperatorServices operatorService) {
        this.operatorService = operatorService;
    }
}
