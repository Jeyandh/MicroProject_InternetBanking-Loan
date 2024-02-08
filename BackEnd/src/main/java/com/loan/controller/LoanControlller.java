package com.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.loan.bean.Loans;
import com.loan.service.LoanService;

public class LoanControlller {
	@Autowired
	LoanService service;	
	
	Loans loan;
	
	@PostMapping("/adduser")
	public void AddLoan(@RequestBody Loans loan) {
		service.addLoan(loan);
	}
	
	@PutMapping("/edituser")
	public void EditUser(@RequestBody Loans loan) {
		service.editLoan(loan);
	}
	
	@DeleteMapping("/deleteuser/{userId}")
	public void DeleteLoan(@PathVariable("loanId") long loanId) {
		service.deleteLoan(loanId);
	}

	
	@GetMapping("/viewAll")
	public void ViewAllDetails() {
		service.viewAllLoan();
	}
	
	@GetMapping("view/{userId}")
	public void ViewDetail(@PathVariable("loanId") long loanId) {
		service.viewDetail(loanId);
	}
}
