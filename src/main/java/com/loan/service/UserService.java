package com.loan.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.loan.bean.User;
import com.loan.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo repo;
	
	
	User user;

	public String addCustomer(@RequestBody User user) {
		repo.save(user);
		return "record inserted";
		
	}
	
	public String editCustomer(@RequestBody User user) {
		repo.save(user);
		return "record updated";
	}

	public String deleteCustomer(@PathVariable("userId") long userId) {
		repo.deleteById(userId);
		return "record deleted";
	};

	public List<User> viewAllCustomer(){
		Iterator<User> it = repo.findAll().iterator();
		ArrayList<User> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	};
	
	public User viewDetail(@PathVariable("userId") long userId) {
		User user = repo.findById(userId).get();
		return user;
	};

}
