const mongoose = require('mongoose');
const {EmployeeLoginModel,EmployeeModel} = require('./dummy-models');
const MONGOURI = "mongodb://localhost:27017/order-management";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(MONGOURI)
    .then(()=>{
        console.log('Connected to dummy client');
    });
exports.updateEmployeeName = async (creds)=>{
    await EmployeeModel.findOneAndUpdate( {username : creds.employee_username}, {$set : {name : creds.employee_name , isAvailable : true}});
}
exports.updateEmployeeAvailable = async ()=>{
    await EmployeeModel.findOneAndUpdate({isAvailable : false}, {$set : {isAvailable : true}});
}
exports.deleteDummyUser = async (username)=>{
    await EmployeeLoginModel.findOneAndDelete({ username : username } , (error)=>{
        if(error){
            console.error(error);
          //  throw new Error("Delete User : cannot delete user ");
        }
    });
    await EmployeeModel.deleteOne({ username : username } , (error)=>{
        if(error){
            console.error(error);
            //throw new Error("Delete User : cannot delete user ");
        }
    });
};