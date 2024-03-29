package com.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loan.bean.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	

}
