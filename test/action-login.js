const { triggerEvent } = require("./utility/triggerEvents");
const { buildDriver } = require("./utility/buildDriver");
const { By, until } = require("selenium-webdriver");
const { login } = require("./utility/login");
const { Credentials } = require("./utility/Credentials");
const { logout } = require("./utility/logout");
const { navToDashBoard } = require("./utility/navToDashBoard");
const { openSideList } = require("./utility/openSideList");
const {updateEmployeeName,updateEmployeeAvailable} = require('./utility/db-services');

const {register} = require('./utility/register');
describe.only("Test for the action login on the / route", () => {
  let driver;
  before(async () => {
    driver = await buildDriver();
  });
  it("Correctly Registered" , async ()=>{
      await register(driver,Credentials.at03);
      await driver.sleep(1000);
  });
  it("correctly login", async () => {
    await login(driver, Credentials.at01);
    await driver.sleep(500);
  });
  it("Correctly checked the username on profile menu card ", async () => {
    await driver.wait(until.elementLocated(By.id("profile-card-button-id")));
    await driver.findElement(By.id("profile-card-button-id")).click();
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("profile-card-employee-username-id")),
      2000
    );
    await driver.findElement(By.id("profile-card-employee-username-id"));
    await navToDashBoard(driver);
  });

  it("correctly search employee ", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("employees-id-01")), 2000);
    await triggerEvent(driver, "click", "#employees-id-01");
    await driver.sleep(500);
    await driver.wait(
      until.elementLocated(By.id("search-employee-id-01")),
      2000
    );
    await triggerEvent(driver, "click", "#search-employee-id-01");
    await driver.sleep(500);
    await driver.wait(until.elementsLocated(By.id("search-employee-id")), 2000);
    await driver.findElement(By.id("search-employee-id")).sendKeys("shubham");
    await driver.wait(
      until.elementsLocated(By.id("employee-name-link-id-0")),
      2000
    );
    await driver
        .wait(until.elementTextIs(
            driver.findElement(
                By.id("employee-name-link-id-0")),
                "Shubham carpenter"),
            2000);
    await triggerEvent(driver, "click", "#employee-name-link-id-0");
    await driver.sleep(2000);
    await navToDashBoard(driver);
  });

  it("correctly create order", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("orders-id-01")), 2000);
    await triggerEvent(driver, "click", "#orders-id-01");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("create-order-id-01")), 2000);
    await triggerEvent(driver, "click", "#create-order-id-01");
    await driver.sleep(500);
    await driver.wait(
      until.elementLocated(By.id("create-order-input-id")),
      2000
    );
    await driver
      .findElement(By.id("create-order-input-id"))
      .sendKeys("Full Sleeve Green shirt");
    await driver.sleep(1000);
    await driver.wait(until.elementsLocated(By.id("increment-quantity-id")));
    await triggerEvent(driver, "click", "#increment-quantity-id");
    await driver.sleep(1000);
    await triggerEvent(driver, "click", "#increment-quantity-id");
    await driver.sleep(1000);
    await driver.wait(until.elementsLocated(By.id("decrement-quantity-id")));
    await triggerEvent(driver, "click", "#decrement-quantity-id");
    await driver.sleep(1000);
    await driver.wait(
      until.elementsLocated(By.id("create-order-submit-button-id"))
    );
    await triggerEvent(driver, "click", "#create-order-submit-button-id");
    await driver.sleep(1000);
    await navToDashBoard(driver);
  });

  it("correctly assign order to employee", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("orders-id-01")), 2000);
    await triggerEvent(driver, "click", "#orders-id-01");
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("assign-order-to-employee-id-01")),
      2000
    );
    await triggerEvent(driver, "click", "#assign-order-to-employee-id-01");

    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("order-0")), 2000);
    await triggerEvent(driver, "click", "#order-0");
    await driver.sleep(2000);
    await driver.wait(
      until.elementsLocated(By.id("employee-name-link-id-0")),
      2000
    );
    await driver.findElement(By.id("employee-name-link-id-0")).click();
    await driver.sleep(1000);
    await driver.wait(
      until.elementsLocated(By.id("assign-order-to-employee-submit-button-id")),
      2000
    );
    await driver
      .findElement(By.id("assign-order-to-employee-submit-button-id"))
      .click();
    await driver.sleep(1000);
    await updateEmployeeAvailable();
    await navToDashBoard(driver);
  });

  it("correctly show orders", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("orders-id-01")), 2000);
    await triggerEvent(driver, "click", "#orders-id-01");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("show-orders-id-01")), 2000);
    await triggerEvent(driver, "click", "#show-orders-id-01");
    await driver.sleep(1000);
    await navToDashBoard(driver);
  });

  it("correctly show status dialog", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("orders-id-01")), 2000);
    await triggerEvent(driver, "click", "#orders-id-01");
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("show-order-status-id-01")),
      2000
    );
    await triggerEvent(driver, "click", "#show-order-status-id-01");
    await driver.sleep(1000);
    await navToDashBoard(driver);
  });

  it("correctly edit employee ", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("employees-id-01")), 2000);
    await triggerEvent(driver, "click", "#employees-id-01");
    await driver.sleep(500);
    await driver.wait(until.elementLocated(By.id("edit-employee-id-01")), 2000);
    await triggerEvent(driver, "click", "#edit-employee-id-01");
    await driver.sleep(500);
    await driver.wait(until.elementsLocated(By.id("search-employee-id")), 2000);
    await driver
      .findElement(By.id("search-employee-id"))
      .sendKeys(Credentials.at03.employee_name);
    await driver.wait(
      until.elementsLocated(By.id("employee-name-link-id-0")),
      2000
    );
    await driver
        .wait(until.elementTextIs(
            driver.findElement(
                By.id("employee-name-link-id-0")),
                Credentials.at03.employee_name),
            2000);
    await driver.sleep(1000);
    await triggerEvent(driver, "click", "#employee-name-link-id-0");
    await driver.sleep(1100);
    await driver.wait(
      until.elementLocated(By.id("edit-employee-search-input-id"))
    );
    await driver
      .findElement(By.id("edit-employee-search-input-id"))
      .sendKeys(Credentials.at03.employee_name + " new name");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("select-available-id")));
    await driver.findElement(By.id("select-available-id")).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("select-no-value-id")));
    await driver.findElement(By.id("select-no-value-id")).click();
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("edit-employee-submit-button-id"))
    );
    await triggerEvent(driver, "click", "#edit-employee-submit-button-id");
    await driver.sleep(1000);
    await updateEmployeeName(Credentials.at03);
    await navToDashBoard(driver);
  });
  it("correctly delete employee", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("employees-id-01")), 2000);
    await triggerEvent(driver, "click", "#employees-id-01");
    await driver.sleep(500);
    await driver.wait(
      until.elementLocated(By.id("delete-employee-id-01")),
      2000
    );
    await triggerEvent(driver, "click", "#delete-employee-id-01");
    await driver.sleep(500);
    await driver.wait(until.elementsLocated(By.id("search-employee-id")), 2000);
    await driver
      .findElement(By.id("search-employee-id"))
      .sendKeys(Credentials.at03.employee_name);
    
    await driver.wait(
      until.elementsLocated(By.id("employee-name-link-id-0")),
      2000
    );

    await driver
        .wait(until.elementTextIs(
            driver.findElement(
                By.id("employee-name-link-id-0")),
                Credentials.at03.employee_name),
            2000);

    await triggerEvent(driver, "click", "#employee-name-link-id-0");
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("delete-select-id")));
    await driver.findElement(By.id("delete-select-id")).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("select-yes-value-id")));
    await driver.findElement(By.id("select-yes-value-id")).click();
    await driver.sleep(1000);
    // await driver.wait(
    //   until.elementLocated(By.id("delete-employee-submit-button-id"))
    // );
    // await triggerEvent(driver, "click", "#delete-employee-submit-button-id");
    // await driver.sleep(1000);
    await navToDashBoard(driver);
  });
  it("correctly show login logs", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("logs-id-01")), 2000);
    await triggerEvent(driver, "click", "#logs-id-01");
    await driver.sleep(1000);

    await driver.wait(
      until.elementLocated(By.id("show-login-logs-id-01")),
      2000
    );
    await driver.findElement(By.id("show-login-logs-id-01")).click();
    await driver.sleep(1000);

    await driver.wait(
      until.elementLocated(By.id("filter-logs-select-id")),
      2000
    );
    await driver.findElement(By.id("filter-logs-select-id")).click();
    await driver.sleep(1000);

    await driver.wait(until.elementLocated(By.id("by-hours-filter-id")), 2000);
    await driver.findElement(By.id("by-hours-filter-id")).click();
    await driver.sleep(1000);

    await driver.wait(until.elementLocated(By.id("hours-input-id")), 2000);
    await driver.findElement(By.id("hours-input-id")).sendKeys("1000");
    await driver.sleep(1000);

    await driver.wait(
      until.elementLocated(By.id("filter-logs-submit-button-id")),
      2000
    );
    await driver.findElement(By.id("filter-logs-submit-button-id")).click();
    await driver.sleep(1000);
    await navToDashBoard(driver);
  });
  it("correctly show route logs", async () => {
    await openSideList(driver);
    await driver.wait(until.elementLocated(By.id("logs-id-01")), 2000);
    await triggerEvent(driver, "click", "#logs-id-01");
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("show-route-logs-id-01")),
      2000
    );
    await triggerEvent(driver, "click", "#show-route-logs-id-01");
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("filter-logs-select-id")),
      2000
    );
    await driver.findElement(By.id("filter-logs-select-id")).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("by-hours-filter-id")), 2000);
    await driver.findElement(By.id("by-hours-filter-id")).click();
    await driver.sleep(1000);
    await driver.wait(until.elementLocated(By.id("hours-input-id")), 2000);
    await driver.findElement(By.id("hours-input-id")).sendKeys("1000");
    await driver.sleep(1000);
    await driver.wait(
      until.elementLocated(By.id("filter-logs-submit-button-id")),
      2000
    );
    await driver.findElement(By.id("filter-logs-submit-button-id")).click();
    await driver.sleep(1000);
    await navToDashBoard(driver);
  });
  
  it("correctly logged out", async () => {
    await logout(driver);
  });
});
