const {By,until} = require("selenium-webdriver");
const {navToDashBoard} = require('./navToDashBoard');
const {openSideList} = require('./openSideList');
exports.navToEmployeeDashboard= async (driver)=>{
    await openSideList(driver);
    await driver.wait(until.elementsLocated(By.id("show-info-link-id")),2000);
    await driver.findElement(By.id("show-info-link-id")).click();
    await navToDashBoard(driver);
};