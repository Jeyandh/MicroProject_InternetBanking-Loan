package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class RegisterSeleniumTest {
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	@Test
	public void register() {
		driver.get("http://localhost:4200/");
	    driver.manage().window().setSize(new Dimension(1536, 820));
	    
	    driver.findElement(By.linkText("Register")).click();
	    driver.findElement(By.name("id")).click();
	    driver.findElement(By.name("id")).sendKeys("45");
	    driver.findElement(By.name("name")).click();
	    driver.findElement(By.name("name")).sendKeys("jeyandh");
	    driver.findElement(By.name("email")).click();
	    driver.findElement(By.name("email")).sendKeys("jeyandh@gmail.com");
	    driver.findElement(By.name("password")).click();
	    driver.findElement(By.name("password")).sendKeys("naga");
	    driver.findElement(By.name("contact")).click();
	    driver.findElement(By.name("contact")).sendKeys("3437434743");
	    driver.findElement(By.name("account")).click();
	    driver.findElement(By.name("account")).sendKeys("4374934734349343");
	    driver.findElement(By.name("type")).click();
	    driver.findElement(By.name("type")).sendKeys("user");
	    
		
	}

}
