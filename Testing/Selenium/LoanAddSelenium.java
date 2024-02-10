package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class LoanAddSelenium {
	
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void loanAdd() {
		 driver.get("http://localhost:4200/manageloan");

		 driver.findElement(By.id("addloan")).click();
		    driver.findElement(By.name("loanId")).click();
		    driver.findElement(By.name("loanId")).sendKeys("45");
		    driver.findElement(By.name("loanType")).click();
		    driver.findElement(By.name("loanType")).sendKeys("Education");
		    driver.findElement(By.name("loanAmount")).click();
		    driver.findElement(By.name("loanAmount")).sendKeys("100000");
		    driver.findElement(By.name("loanEmi")).click();
		    driver.findElement(By.name("loanEmi")).sendKeys("10000");
		    driver.findElement(By.name("loanIntrest")).click();
		    driver.findElement(By.name("loanIntrest")).sendKeys("11");
		    driver.findElement(By.name("userName")).click();
		    driver.findElement(By.name("userName")).sendKeys("Jeyandhan");
		    driver.findElement(By.name("userAccNo")).click();
		    driver.findElement(By.name("userAccNo")).sendKeys("21897132921323");
		    driver.findElement(By.name("userId")).click();
		    driver.findElement(By.name("userId")).sendKeys("2");
		    
		    driver.findElement(By.name("save")).click();
	}
}
