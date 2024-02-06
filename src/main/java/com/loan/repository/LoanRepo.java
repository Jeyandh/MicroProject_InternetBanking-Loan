package com.loan.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.loan.bean.Loans;


@Repository
public interface LoanRepo extends CrudRepository<Loans, Long> {

}
