package com.loan.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loan.bean.Register;

@Repository
public interface RegisterRepo extends CrudRepository<Register, Long> {
	public Register findByEmailId(String emailId);
	public Register findByPassword(String password);
}
