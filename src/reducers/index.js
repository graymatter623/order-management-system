import  employeeLogin from './employeeLogin';
import employees from './employees';
import orders from './orders';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    employeeLogin,
    employees,
    orders
});
export default rootReducer;