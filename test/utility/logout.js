const {By,until} = require('selenium-webdriver');
const {triggerEvent} = require('./triggerEvents');


exports.logout = async (driver)=>{ 
    await driver.wait(until.elementLocated(By.id("profile-card-button-id")),2000);
    await triggerEvent(driver,"click","#profile-card-button-id");
    await driver.sleep(1000);
    await triggerEvent(driver,'click',"#profile-card-logout-button-id");
}