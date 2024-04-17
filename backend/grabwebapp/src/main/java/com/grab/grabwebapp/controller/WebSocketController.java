package com.grab.grabwebapp.controller;

import ch.qos.logback.core.net.server.Client;
import com.grab.grabwebapp.entity.ClientMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @MessageMapping("/chat")
    public void receiveMsg(@Payload ClientMessage message){
        // add logic before send messages to subscribers
        simpMessagingTemplate.convertAndSend("/topic/messages/"  + User.getUsername(), message);
        simpMessagingTemplate.convertAndSend("/topic/messages/all", message);
    }
}
