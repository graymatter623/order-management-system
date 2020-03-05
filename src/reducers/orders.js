import { 
    SELECT_ORDER,
    REQUEST_TODAY_ORDER,
    RESPONSE_TODAY_ORDER_SUCCESS
} from '../actions/actions';

function orders(state = { 
    orders : [],
    selectedOrder : {},
    loading : true
},action){
    switch(action.type){
        case SELECT_ORDER :
            return {
                ...state ,
                selectedOrder : {...action.data}
            }
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