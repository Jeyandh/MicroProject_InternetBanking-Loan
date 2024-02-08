package com.loan.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.loan.bean.Loans;
import com.loan.repository.LoanRepo;


public class LoanService {

	@Autowired
	LoanRepo repo;

	Loans loan;

	public String addLoan(@RequestBody Loans loan) {
		repo.save(loan);
		return "record inserted";

	}

	public String editLoan(@RequestBody Loans loan) {
		repo.save(loan);
		return "record updated";
	}

	public String deleteLoan(@PathVariable("loanId") long loanId) {
		repo.deleteById(loanId);
		return "record deleted";
	};

	public List<Loans> viewAllLoan() {
		Iterator<Loans> it = repo.findAll().iterator();
		ArrayList<Loans> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	};

	public Loans viewDetail(@PathVariable("loanId") long loanId) {
		Loans loan = repo.findById(loanId).get();
		return loan;
	};
}
