package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.dto.BookingInfoDTO;
import com.grab.grabwebapp.dto.LoginDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CustomerController {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/bookCar")
    private ResponseEntity<String> bookCar(@RequestBody BookingInfoDTO bookingInfoDTO){
        messagingTemplate.convertAndSend("/app/customer-ws", "Car booked");
        return new ResponseEntity<>("Car booked", HttpStatus.OK);
    }
}
