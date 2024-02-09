package com.loan;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.loan.bean.Loans;
import com.loan.bean.Login;
import com.loan.bean.User;
import com.loan.service.LoanService;
import com.loan.service.LoginService;
import com.loan.service.UserService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class BankingApplicationTests {

	@Autowired
	LoginService loginservice;

	@Autowired
	UserService userservice;

	@Autowired
	LoanService loanservice;

	boolean response;
	boolean value;
	List<User> list = new ArrayList<>();
	List<User> list1 = new ArrayList<>();
	List<Loans> list2 = new ArrayList<>();
	List<Loans> list3 = new ArrayList<>();
	List<Loans> list4 = new ArrayList<>();
	List<Loans> list5 = new ArrayList<>();

	User user1 = new User(101, "Shiva", "shiva@gmail.com", "shiva123", 843244782, 543236234, "user");
	User user2 = new User(1, "Aravind", "aravind@gmail.com", "aravind", 943246482, 233234564, "user");
	User admin = new User(11, "naga", "naga@gmail.com", "naga25", 743249082, 543234564, "admin");
	Login response1 = new Login("User Success");
	Login response2 = new Login("Admin Success");
	Login response3 = new Login("Login Fail");

	Loans loan=new Loans(10,"Gold",100000,10000,10.00,"mahesh",453234564, 1);
	Loans loan1=new Loans(7,"Education",300000,15000,11.00,"Sara",233234564, 2 );

	@Test
	@Order(1)
	void performUserLogin() {
		Login response = loginservice.login(user1);
		response1.equals(response);
	}

	@Test
	@Order(2)
	void performAdminLogin() {
		Login response = loginservice.login(admin);
		response2.equals(response);
	}

	@Test
	@Order(3)
	void performLoginFail() {
		Login response = loginservice.login(user2);
		response3.equals(response);
	}

	@Test
	@Order(4)
	void performRegister() {
		value = true;
		response = userservice.registerForm(user1);
		assertEquals(value, response);
	}

	@Test
	@Order(5)
	void performUserInsert() {
		value = true;
		response = userservice.addCustomer(user1);
		assertEquals(value, response);
	}

	 @Test
     @Order(6)
     void performUserDelete() {
   	  val=true;
   	  res=userservice.deleteCustomer(11);
   	  assertEquals(val,res);
     }
	 
	 @Test
     @Order(7)
     void performViewAllUsers() {
   	list1=userservice.viewAllCustomer();
 		list.add(user1);
 		list.add(user2);
 		list.equals(list1);
     }
	 
	 @Test
     @Order(8)
     void performLoanInsert() {
   	  val=true;
   	  res=loanservice.addLoan(loan);
   	  assertEquals(val,res);
     }
	 
	  @Test
	     @Order(9)
	     void performLoanUpdate() {
	   	  val=true;
	   	  res=loanservice.editLoan(loan);
	   	  assertEquals(val,res);
	     }
	  
	     @Test
	     @Order(10)
	     void performLoanDelete() {
	   	  val=true;
	   	  res=loanservice.deleteLoan(2);
	   	  assertEquals(val,res);
	     }

	     @Test
	     @Order(12)
	     void performViewAllLoans() {
	    	list4=loanservice.viewAll();
	 		list5.add(loan1);
	 		list5.equals(list4);
	     }





}
