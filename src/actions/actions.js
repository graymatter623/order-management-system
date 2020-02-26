// Request Actions

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_TODAY_ORDER = 'REQUEST_TODAY_ORDER';
export const REQUEST_EMPLOYEES_DATA = 'REQUEST_EMPLOYEES_DATA'; 
// export const RESPONSE_AUTH_TOKEN = 'RESPONSE_AUTH_TOKEN';

// Response Actions 
export const RESPONSE_EMPLOYEES_DATA_SUCCESS = 'RESPONSE_EMPLOYEES_DATA_SUCCESS';
export const RESPONSE_TODAY_ORDER_SUCCESS = 'RESPONSE_TODAY_ORDER_SUCCESS';
export const RESPONSE_LOGIN_SUCCESS = 'RESPONSE_LOGIN_SUCCESS';
// export const RESPONSE_AUTH_TOKEN_SUCCESS = 'RESPONSE_AUTH_TOKEN_SUCCESS';

//Action Creators

export const requestEmployeesData = () =>({type : REQUEST_EMPLOYEES_DATA });
export const requestLogin = (data)=>({type : REQUEST_LOGIN,data});
export const requestTodayOrder = ()=> ({type : REQUEST_TODAY_ORDER });
export const responseEmployeesDataSuccess = (data)=>({ type : RESPONSE_EMPLOYEES_DATA_SUCCESS,data});
export const responseTodayOrdersSuccess = (data)=>({type : RESPONSE_TODAY_ORDER_SUCCESS , data});
export const responseLoginSuccess = (data) =>({type : RESPONSE_LOGIN_SUCCESS,data });


//Filter Action Constants
