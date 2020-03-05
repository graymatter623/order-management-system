import { put, takeLatest, takeEvery, all } from "redux-saga/effects";
import {
  REQUEST_LOGIN,
  REQUEST_EMPLOYEES_DATA,
  REQUEST_TODAY_ORDER,
  responseLoginSuccess,
  responseEmployeesDataSuccess,
  responseTodayOrdersSuccess,
  REQUEST_LOG
} from "../actions/actions";
import axios from "axios";

// eslint-disable-next-line
function* requestLogViewer(action) {
  yield axios
    .post("http://localhost:5000/log-route", action.data)
    .then(response => {
      console.log(response.data);
    });
}
function* watchRequestLogViewer() {
  yield takeEvery(REQUEST_LOG, requestLogViewer);
}
function* fetchLoginDetails(action) {
  const response = yield axios
    .post("http://localhost:5000/authenticate-login", action.data)
    .then(response => response);
  yield put(responseLoginSuccess(response.data));
}
function* fetchEmployeeData(action) {
  const response = yield axios
    .get("http://localhost:5000/employees", {
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
    .get("http://localhost:5000/get-today-orders", {
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
    watchRequestLogViewer()
  ]);
}
export default rootSaga;
