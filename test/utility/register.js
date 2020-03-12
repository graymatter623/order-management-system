const {triggerEvent} = require("./triggerEvents");
const {By,until} = require('selenium-webdriver');
exports.register = async (driver,Credentials)=>{
    await driver.get("http://localhost:3000/");
    await driver.manage().window().maximize();
    await driver.wait(until.elementsLocated(By.id("register-link-id")),20000);
    await triggerEvent(driver,"click","#register-link-id");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("employee-name-id-02")),20000);
    await driver.findElement(By.id("employee-name-id-02")).sendKeys(Credentials.employee_name);
    await driver.wait(until.elementLocated(By.id("employee-username-id-02")),20000);
    await driver.findElement(By.id("employee-username-id-02")).sendKeys(Credentials.employee_username);
    await driver.wait(until.elementLocated(By.id("employee-password-id-02")),20000);
    await driver.findElement(By.id("employee-password-id-02")).sendKeys(Credentials.employee_password);
    await driver.sleep(500);
    await triggerEvent(driver,"click", "#register-button-id");    
    await driver.sleep(1000);
    
};