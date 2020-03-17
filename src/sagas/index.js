import { put, takeLatest, takeEvery, all } from "redux-saga/effects";
import {
  REQUEST_LOGIN,
  REQUEST_EMPLOYEES_DATA,
  REQUEST_TODAY_ORDER,
  REQUEST_LOG,
  REQUEST_LOGIN_LOGS
} from "../constants/constants";
import { 
  responseLoginSuccess,
  responseEmployeesDataSuccess,
  responseTodayOrdersSuccess,
} from "../actions/actions";
import {BACKURL} from '../constants/constants';
import axios from "axios";

function* requestLoginLogs (action) {
  yield axios.post(`${BACKURL}login-logs-route`,action.data)
    .then(response=>response);
}
function* watchRequestLoginLogs(){
  yield takeLatest(REQUEST_LOGIN_LOGS ,requestLoginLogs);
}
function* requestLogViewer(action) {
  yield axios
    .post(`${BACKURL}log-route`, action.data)
    .then(response => response);
}
function* watchRequestLogViewer() {
  yield takeEvery(REQUEST_LOG, requestLogViewer);
}
function* fetchLoginDetails(action) {
  const response = yield axios
    .post(`${BACKURL}authenticate-login`, action.data)
    .then(response => response);
  yield put(responseLoginSuccess(response.data));
}
function* fetchEmployeeData(action) {
  const response = yield axios
    .get(`${BACKURL}employees`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${action.token}`
      }
    })
    .then(response => response);
  yield put(responseEmployeesDataSuccess(response.data));
}
function* fetchTodayOrders(action) {
  const response = yield axios
    .get(`${BACKURL}get-today-orders`, {
      headers: {
        Authorization: `Bearer ${action.token}`,
        Accept: "application/json"
      }
    })
    .then(response => response);
  yield put(responseTodayOrdersSuccess(response.data));
}
function* watchFetchTodayOrders() {
  yield takeEvery(REQUEST_TODAY_ORDER, fetchTodayOrders);
}
function* watchFetchEmployeeData() {
  yield takeEvery(REQUEST_EMPLOYEES_DATA, fetchEmployeeData);
}
function* watchFetchLoginDetails() {
  yield takeLatest(REQUEST_LOGIN, fetchLoginDetails);
}
function* rootSaga() {
  yield all([
    watchFetchLoginDetails(),
    watchFetchEmployeeData(),
    watchFetchTodayOrders(),
    watchRequestLogViewer(),
    watchRequestLoginLogs()
  ]);
}
export default rootSaga;
