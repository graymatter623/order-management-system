import {
    SELECT_ORDER,
    REQUEST_LOGOUT,
    REQUEST_EMPLOYEES_DATA,
    REQUEST_LOGIN,
    REQUEST_TODAY_ORDER,
    REQUEST_LOG,
    REQUEST_LOGIN_LOGS,
    RESPONSE_EMPLOYEES_DATA_SUCCESS,
    RESPONSE_TODAY_ORDER_SUCCESS,
    RESPONSE_LOGIN_SUCCESS,
    RESPONSE_LOGIN_FAILED,
} from '../constants/constants';

//Request Action Creators
export const requestOrderSelect = (data) =>({type : SELECT_ORDER , data});
export const requestLogout = ()=>({type : REQUEST_LOGOUT});
export const requestEmployeesData = (token) =>({type : REQUEST_EMPLOYEES_DATA,token});
export const requestLogin = (data)=>({type : REQUEST_LOGIN,data});
export const requestTodayOrder = ()=> ({type : REQUEST_TODAY_ORDER });
export const requestLogging = (data)=> ({type : REQUEST_LOG, data});
export const requestLoginLogs = (data) => ({type : REQUEST_LOGIN_LOGS , data});
//Response Action Creators
export const responseEmployeesDataSuccess = (data)=>({ type : RESPONSE_EMPLOYEES_DATA_SUCCESS,data});
export const responseTodayOrdersSuccess = (data)=>({type : RESPONSE_TODAY_ORDER_SUCCESS , data});
export const responseLoginSuccess = (data) =>({type : RESPONSE_LOGIN_SUCCESS,data });
export const responseLoginFailed = () => ({type : RESPONSE_LOGIN_FAILED});  
