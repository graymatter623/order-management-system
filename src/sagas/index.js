import {put,takeLatest,takeEvery,all} from 'redux-saga/effects';
import {
    REQUEST_LOGIN,
    responseLoginSuccess,
    REQUEST_EMPLOYEES_DATA,
    responseEmployeesDataSuccess
} from '../actions/actions';
import axios from 'axios';

let token = "";
function* fetchLoginDetails(action){
    const response = yield axios.post('http://localhost:5000/authenticate-login',action.data)
        .then(response => response);
    token = response.data.token;
    yield put(responseLoginSuccess(response.data)); 
}
function* fetchEmployeeData(){
    const response = yield axios.get('http://localhost:5000/employees',{
        headers : {
            'Accept' : 'application/json',
            'Authorization' :`Bearer ${token}` 
        }
    })
        .then(response => response);
    yield put(responseEmployeesDataSuccess(response.data));        
}
function* watchFetchEmployeeData(){
    yield takeEvery(REQUEST_EMPLOYEES_DATA,fetchEmployeeData);
}
function* watchFetchLoginDetails(){
    yield takeLatest(REQUEST_LOGIN, fetchLoginDetails);
}
function* rootSaga(){
    yield all([
       watchFetchLoginDetails(),
       watchFetchEmployeeData()
    ]);
}
export default rootSaga;