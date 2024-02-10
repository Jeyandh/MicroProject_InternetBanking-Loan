package com.loan.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class UserApply {
	WebDriver driver;

	@BeforeClass

	public void initialize() {
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Test
	public void apply(){
		driver.get("http://localhost:4200/userapply");
	    driver.manage().window().setSize(new Dimension(1536, 820));
	driver.findElement(By.name("applybtn")).click();
    
    driver.findElement(By.id("mat-input-0")).sendKeys("6");
    driver.findElement(By.cssSelector(".ng-tns-c1205077789-1 > .mat-mdc-form-field-infix")).click();
    driver.findElement(By.id("mat-input-1")).sendKeys("Medical");
    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-4 > .mat-mdc-form-field-required-marker")).click();
    driver.findElement(By.id("mat-input-2")).sendKeys("400000");
    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-6 > .mat-mdc-form-field-required-marker")).click();
    driver.findElement(By.id("mat-input-3")).sendKeys("12");
    driver.findElement(By.cssSelector(".ng-tns-c1205077789-4 > .mat-mdc-form-field-infix")).click();
    driver.findElement(By.id("mat-input-4")).sendKeys("15000");
    driver.findElement(By.cssSelector(".ng-tns-c1205077789-5 > .mat-mdc-form-field-infix")).click();
    driver.findElement(By.id("mat-input-5")).sendKeys("Madhan");
    driver.findElement(By.cssSelector("#mat-mdc-form-field-label-12 > .ng-tns-c1205077789-6:nth-child(1)")).click();
    driver.findElement(By.id("mat-input-6")).sendKeys("323489234893244");
    driver.findElement(By.cssSelector(".ng-tns-c1205077789-7 > .mat-mdc-form-field-infix")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".mat-unthemed > .mat-mdc-button-touch-target"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".mat-primary > .mat-mdc-button-touch-target"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.id("mat-input-7")).sendKeys("2");
    driver.findElement(By.cssSelector(".mat-primary > .mdc-button__label")).click();
  }
}
