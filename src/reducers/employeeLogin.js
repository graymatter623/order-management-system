import {
    REQUEST_LOGIN,
    RESPONSE_LOGIN_SUCCESS
} from '../actions/actions.js';

const employeeLogin = ( state = { 
    employee : {},
    isLoggedIn : false,
    loading : false,
    token : "" ,
    isOwner : false
},action)=>{
    switch(action.type){
        case REQUEST_LOGIN:
            return {
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
        default :
            return state;
    }
}
export default employeeLogin;