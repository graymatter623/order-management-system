// Request Actions
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_TODAY_ORDER = 'REQUEST_TODAY_ORDER';
export const REQUEST_EMPLOYEES_DATA = 'REQUEST_EMPLOYEES_DATA'; 
export const SELECT_ORDER = 'SELECT_ORDER';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const REQUEST_LOG = 'REQUEST_LOG';
export const REQUEST_LOGIN_LOGS = 'REQUEST_LOGIN_LOGS';
// Response Actions 
export const RESPONSE_EMPLOYEES_DATA_SUCCESS = 'RESPONSE_EMPLOYEES_DATA_SUCCESS';
export const RESPONSE_TODAY_ORDER_SUCCESS = 'RESPONSE_TODAY_ORDER_SUCCESS';
export const RESPONSE_LOGIN_SUCCESS = 'RESPONSE_LOGIN_SUCCESS';
//Action Creators
export const requestOrderSelect = (data) =>({type : SELECT_ORDER , data});
export const requestLogout = ()=>({type : REQUEST_LOGOUT});
export const requestEmployeesData = (token) =>({type : REQUEST_EMPLOYEES_DATA,token});
export const requestLogin = (data)=>({type : REQUEST_LOGIN,data});
export const requestTodayOrder = ()=> ({type : REQUEST_TODAY_ORDER });
export const requestLogging = (data)=> ({type : REQUEST_LOG, data});
export const requestLoginLogs = (data) => ({type : REQUEST_LOGIN_LOGS , data});
export const responseEmployeesDataSuccess = (data)=>({ type : RESPONSE_EMPLOYEES_DATA_SUCCESS,data});
export const responseTodayOrdersSuccess = (data)=>({type : RESPONSE_TODAY_ORDER_SUCCESS , data});
export const responseLoginSuccess = (data) =>({type : RESPONSE_LOGIN_SUCCESS,data });
