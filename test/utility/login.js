const {By , until} = require('selenium-webdriver');
const {triggerEvent} = require('./triggerEvents');

exports.login = async (driver, creds)=>{
    await driver.get('http://localhost:3000/');
    await driver.manage().window().maximize();
    await driver.wait(until.elementLocated(By.id("employee-username-id-01")),25000);
    await driver.findElement(By.id("employee-username-id-01")).sendKeys(creds.employee_username);
    await driver.wait(until.elementLocated(By.id("employee-password-id-01")),25000);
    await driver.findElement(By.id("employee-password-id-01")).sendKeys(creds.employee_password);
    await triggerEvent(driver,"click","#login-button-id");
    await driver.wait(until.urlIs("http://localhost:3000/dashboard"),20000);
    //await driver.wait(until.elementLocated(By.id("main-content-area")),20000);
    await driver.sleep(1000);
};
