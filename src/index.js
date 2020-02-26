import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './reducers/index';
import rootSaga  from './sagas/index';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);
