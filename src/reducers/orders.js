import {REQUEST_TODAY_ORDER,RESPONSE_TODAY_ORDER_SUCCESS} from '../actions/actions';

function orders(state = { 
    orders : [],
    loading : true
} , action){
    switch(action.type){
        case REQUEST_TODAY_ORDER :
            return {
                ...state,
                loading : true
            }
        
        case RESPONSE_TODAY_ORDER_SUCCESS :
            return {
                ...state,
                orders : [...action.data]
            }
        default :
            return state;
    }
}
export default orders;