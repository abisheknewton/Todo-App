package com.newt.Todo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newt.Todo.models.AuthenticationBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {

	@GetMapping("/basicAuth")
	public AuthenticationBean helloworldBean() {
		return new AuthenticationBean("You are Authenticated");
//		throw new RuntimeException("Error in fetching ... contact support team");
	}	
	 
}

