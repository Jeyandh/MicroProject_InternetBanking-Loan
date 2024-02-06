package com.loan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.loan.bean.Register;
import com.loan.bean.User;
import com.loan.repository.RegisterRepo;

@Service
public class RegisterService {
	@Autowired
	RegisterRepo repo;
	
	
	User user;

	public boolean registerForm(@RequestBody Register register) {
		repo.save(register);
		return true;
	}
	
}
