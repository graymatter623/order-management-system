const {buildDriver} =require('./utility/buildDriver');
const {register} =require('./utility/register');
const {login} = require('./utility/login');
const {logout} = require('./utility/logout');
const {Credentials} = require('./utility/Credentials');
const {deleteDummyUser} = require('./utility/db-services');
describe("Test for the action register and login /register route", ()=>{
    let driver;
    before(async()=>{
        driver = await buildDriver();
    });
    it("Register testing" ,async ()=>{
        await register(driver,Credentials.at03);
        await driver.sleep(500);
    });
    it("Login Testing" , async ()=>{
        await login(driver,Credentials.at03);
        await logout(driver);
        await deleteDummyUser(Credentials.at03.employee_username);
    });
});