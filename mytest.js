const {Builder, By, Key} = require ("selenium-webdriver/chrome");

async function submitting() { 

 // Wait for browser to launch

 let driver = await new Builder().forBrowser("chrome").build();

 //To  fetch https://demoqa.com/text-box from the browser with our code

 await driver.get("https://demoqa.com/text-box");

 // Find and fill in the FULL NAME, EMAIL, CURRENT ADDRESS, PERMANENT ADDRESS FIELDS

 await driver.findElement(By_id("userName")).sendKeys("Yelena",Key.RETURN);
 await driver.findElement(By_id("userEmail")).sendKeys("elenatade@gmail.com",Key.RETURN);
 await driver.findElement(By_id("currentAddress")).sendKeys("Yerevan",Key.RETURN);
 await driver.findElement(By_id("submit")).click();
 
 //close the  browser
 
await driver.quit();


}
submitting()
