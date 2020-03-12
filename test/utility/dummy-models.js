const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
        min : 8,
        max : 255
    },
    name : {
        type : String,
        required : true
    },
    isOwner : {
        type : Boolean,
        required : true
    }
});

var employeeSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    isAvailable : {
        type : Boolean,
        required : true
    },
    current_order_id: {
        type : String
    }
});

exports.EmployeeModel = mongoose.model('Employee',employeeSchema,'employees');
exports.EmployeeLoginModel = mongoose.model('EmployeeLoginSchema' , loginSchema,'employeeLogin');
