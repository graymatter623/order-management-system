import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import App from "./components/App";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "employeeLogin",
  storage: storage,
  whitelist: ["employeeLogin"]
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(sagaMiddleware, logger));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App history = {history}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
export { persistor, store };
