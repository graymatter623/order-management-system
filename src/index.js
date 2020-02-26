import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './reducers/index';
import rootSaga  from './sagas/index';
// import {persistStore , autoRehydrate} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger));
// if(window.location.search.startsWith('?token=')){
//     const token = window.location.search.substr(7);
//     localStorage.setItem('token',token);
//     window.location.assign('/#/');
// }else{
//     sagaMiddleware.run(rootSaga);
// }
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store = {store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);
