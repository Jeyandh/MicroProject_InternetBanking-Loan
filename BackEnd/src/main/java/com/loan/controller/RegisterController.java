package com.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loan.bean.Register;
import com.loan.bean.User;
import com.loan.service.RegisterService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class RegisterController {
	@Autowired
	RegisterService service;

	User user;

	@PostMapping("/register")
	public void register(@RequestBody Register register) {

		service.registerForm(register);
	}
}
