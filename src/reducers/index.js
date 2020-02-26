import  employeeLogin from './employeeLogin';
import employees from './employees';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    employeeLogin,
    employees
});
export default rootReducer;