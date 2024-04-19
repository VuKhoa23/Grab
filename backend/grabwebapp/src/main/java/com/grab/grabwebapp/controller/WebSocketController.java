package com.grab.grabwebapp.controller;

import com.grab.grabwebapp.entity.ClientMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public ClientMessage sendMessage(@Payload ClientMessage message){
        return message;
    }

    @MessageMapping("/booking/operator")
    @SendTo("/topic/operator")
    public String sendMessageToOperator(String username){
        return "Hello operator " + username;
    }

    @MessageMapping("/booking/driver")
    @SendTo("/topic/driver")
    public String sendMessageToCustomer(String username){
        return "Hello driver " + username;
    }
}
