package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class LoanEditSeleniumTest {
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void loanEdit() {
		driver.get("http://localhost:4200/manageloan");

		 driver.findElement(By.id("editbtn")).click();
		    driver.findElement(By.name("loanId")).clear();
		    driver.findElement(By.name("loanId")).sendKeys("45");
		    driver.findElement(By.name("loanType")).clear();
		    driver.findElement(By.name("loanType")).sendKeys("Education");
		    driver.findElement(By.name("loanAmount")).clear();
		    driver.findElement(By.name("loanAmount")).sendKeys("100000");
		    driver.findElement(By.name("loanEmi")).clear();
		    driver.findElement(By.name("loanEmi")).sendKeys("10000");
		    driver.findElement(By.name("loanIntrest")).clear();
		    driver.findElement(By.name("loanIntrest")).sendKeys("11");
		    driver.findElement(By.name("userName")).clear();
		    driver.findElement(By.name("userName")).sendKeys("Jeyandhan");
		    driver.findElement(By.name("userAccNo")).clear();
		    driver.findElement(By.name("userAccNo")).sendKeys("21897132921323");
		    driver.findElement(By.name("userId")).clear();
		    driver.findElement(By.name("userId")).sendKeys("2");
		    
		    driver.findElement(By.name("save")).click();
	}
}
