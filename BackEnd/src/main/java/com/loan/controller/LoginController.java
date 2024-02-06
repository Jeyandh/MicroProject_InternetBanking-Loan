package com.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.bean.Login;
import com.loan.bean.Register;
import com.loan.service.LoginService;

@RestController

@CrossOrigin("http://localhost:4200/")
public class LoginController {
	@Autowired
	LoginService service;

	@RequestMapping("/login")
	public ResponseEntity<?> performLogin(@RequestBody Register register) {
		Login res = service.login(register);
		return ResponseEntity.ok(res);
	}

}
