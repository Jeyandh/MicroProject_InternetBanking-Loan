package com.loan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.bean.Login;
import com.loan.bean.Register;
import com.loan.repository.RegisterRepo;

@Service
public class LoginService {

	@Autowired
	RegisterRepo repo;
	Register register;

	public Login login(Register register) {
		Register ref = repo.findByEmailId(register.getEmailId());
		Register pass = repo.findByPassword(register.getPassword());
		if (ref != null && pass != null) {
			String value = ref.getPassword();
			String word = pass.getPassword();
			if (value.equals(word)) {
				String res = ref.getUserType();
				if (res.equalsIgnoreCase("admin")) {
					return new Login("Admin Success");
				} else {
					return new Login("User Success");
				}
			} else {
				return new Login("Login Fail");
			}
		} else {
			return new Login("Login Fail");
		}

	}
}
