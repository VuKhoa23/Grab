package com.grab.grabwebapp.controller;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DriverController {

    private SimpMessagingTemplate messagingTemplate;

    public DriverController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @PostMapping("/acceptRide")
    public String acceptRide(@RequestBody String rideDetails) {
        messagingTemplate.convertAndSend("/topic/customer", "Your ride has been accepted by a driver");
        return "Ride accepted";
    }
}
