package com.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.loan.bean.User;
import com.loan.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
	@Autowired
	UserService service;

	User user;

	@PostMapping("/adduser")
	public void addUser(@RequestBody User user) {
		service.addCustomer(user);
	}

	@PutMapping("/edituser")
	public void editUser(@RequestBody User user) {
		service.editCustomer(user);
	}

	@DeleteMapping("/deleteuser/{userId}")
	public void deleteUser(@PathVariable("userId") long userId) {
		service.deleteCustomer(userId);
	}

	@GetMapping("/viewAll")
	public void viewAllDetails() {
		service.viewAllCustomer();
	}

	@GetMapping("view/{userId}")
	public void viewDetail(@PathVariable("userId") long userId) {
		service.viewDetail(userId);
	}

}
