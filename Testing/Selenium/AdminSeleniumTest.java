package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AdminSeleniumTest {

	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void admin() {
		driver.get("http://localhost:4200/admin");
	    driver.manage().window().setSize(new Dimension(1536, 820));
	    driver.findElement(By.cssSelector(".menu-btn")).click();
	    driver.findElement(By.linkText("ManageCustomers")).click();
	}
}
