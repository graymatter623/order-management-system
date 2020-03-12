const {By,until} = require('selenium-webdriver');
const {triggerEvent} = require('./triggerEvents');
exports.openSideList = async (driver)=>{
    await driver.wait(until.elementLocated(By.id("toolbar-icon-button-id-01")),2000);
    await triggerEvent(driver,'click',"#toolbar-icon-button-id-01");
    await driver.sleep(500);
}