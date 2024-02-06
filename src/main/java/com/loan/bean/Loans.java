package com.loan.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_loan")
public class Loans {
	@Id
	@Column(name = "loan_id")
	private long loanId;
	@Column(name = "loan_type")
	private String loanType;
	@Column(name = "loan_amount")
	private long loanAmount;
	@Column(name = "loan_emi")
	private long loanEmi;
	@Column(name = "userId")
	private long userId;

	public Loans() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Loans(long loanId, String loanType, long loanAmount, long loanEmi, long userId) {
		super();
		this.loanId = loanId;
		this.loanType = loanType;
		this.loanAmount = loanAmount;
		this.loanEmi = loanEmi;
		this.userId = userId;
	}

	public long getLoanId() {
		return loanId;
	}

	public void setLoanId(long loanId) {
		this.loanId = loanId;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public long getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(long loanAmount) {
		this.loanAmount = loanAmount;
	}

	public long getLoanEmi() {
		return loanEmi;
	}

	public void setLoanEmi(long loanEmi) {
		this.loanEmi = loanEmi;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

}
