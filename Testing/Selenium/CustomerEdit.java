package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class CustomerEdit {
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void customerEdit() {
		 driver.get("http://localhost:4200/managecustomer");
		    driver.manage().window().setSize(new Dimension(1536, 820));
		    driver.findElement(By.id("editbtn")).click();
		    driver.findElement(By.id("mat-input-1")).clear();
		    driver.findElement(By.id("mat-input-1")).sendKeys("jeyandhan");
		    driver.findElement(By.id("mat-input-2")).clear();
		    driver.findElement(By.id("mat-input-2")).sendKeys("jeyandhan14@gmail.com");
		    driver.findElement(By.id("custbutton")).click();
	}
	}

