import {
    REQUEST_LOGIN,
    RESPONSE_LOGIN_SUCCESS,
    REQUEST_LOGOUT
} from '../constants/constants';

const initialState = {
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
                loading : false  ,
                isOwner : action.data.isOwner  
            };
        case REQUEST_LOGOUT:
            return initialState;
        default :
            return state;
    }
}
export default employeeLogin;