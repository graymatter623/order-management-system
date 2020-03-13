const {By,until} = require("selenium-webdriver");
const {navToDashBoard} = require('./navToDashBoard');
const {openSideList} = require('./openSideList');
exports.navToEmployeeDashboard= async (driver)=>{
    await openSideList(driver);
    await driver.sleep(1000);
    await driver.wait(until.elementsLocated(By.id("show-info-link-id")),2000);
    await driver.findElement(By.id("show-info-link-id")).click();
    await driver.sleep(2000);
    await navToDashBoard(driver);
};