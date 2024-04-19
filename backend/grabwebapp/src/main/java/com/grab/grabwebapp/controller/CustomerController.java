package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.dto.BookingInfoDTO;
import com.grab.grabwebapp.entity.user.Operator;
import com.grab.grabwebapp.services.OperatorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api")
public class CustomerController {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    private OperatorServices operatorServices;

    @MessageMapping("/booking/private")
    private void bookCar(@RequestBody BookingInfoDTO bookingInfoDTO){
        Operator operator = operatorServices.getAvailableOperator();
        if(operator != null){
            int id = operator.getId();
            String destination = "/topic/operator/" + id;
            System.out.println("destination " + destination);
            messagingTemplate.convertAndSend(destination, "Car booked");
        }
    }
}
