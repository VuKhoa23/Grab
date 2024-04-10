package com.grab.grabwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GrabwebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(GrabwebappApplication.class, args);
	}

}
