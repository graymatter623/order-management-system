import {
    REQUEST_EMPLOYEES_DATA,
    RESPONSE_EMPLOYEES_DATA_SUCCESS
} from '../actions/actions.js';
function employees(state = { employeesList : [] ,loading : false} , action){
    switch(action.type){
        case REQUEST_EMPLOYEES_DATA:
                return {...state,loading : true };
            case RESPONSE_EMPLOYEES_DATA_SUCCESS :
                return {
                    ...state,
                    employeesList : [...state.employeesList , ...action.data.employee],
                    loading : false
                };
        default :
            return state;
    }
}
export default employees;