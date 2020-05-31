import {
    REQUEST_LOGIN,
    RESPONSE_LOGIN_SUCCESS,
    REQUEST_LOGOUT,
    RESPONSE_LOGIN_FAILED,
} from '../constants/constants';

const initialState = {
    success : false,
    successValue : 0,
    employee : {},
    isLoggedIn : false,
    loading : false,
    token : "" ,
    isOwner : false
};
const employeeLogin = ( state = initialState,action)=>{
    switch(action.type){
        case REQUEST_LOGIN:
            return{
                ...state,
                loading : true
            };
        case RESPONSE_LOGIN_SUCCESS:
            return {
                ...state,
                employee : {...state.employee , ...action.data.employee},
                isLoggedIn : true,
                token : action.data.token,
                loading : false,
                isOwner : action.data.isOwner,
                success : true,
                successValue : 1
            };
        case RESPONSE_LOGIN_FAILED : 
            return {
              ...state,
              loading : false,
              isLoggedIn : false,
              success : false,
              successValue : 2  
            }
        case REQUEST_LOGOUT:
            return initialState;
        default :
            return state;
    }
}
export default employeeLogin;