package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class CustomerDelete {
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void customerDelete() {
		driver.get("http://localhost:4200/managecustomer");
	    driver.manage().window().setSize(new Dimension(1536, 820));
	    driver.findElement(By.id("delbtn")).click();
	 
	}
}
