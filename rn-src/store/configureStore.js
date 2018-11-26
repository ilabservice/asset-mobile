/**
 *@author: meekoMa
 *@date: 18/11/17 16:30:24
 *@desc: 对redux数据持久化
 */
'use strict';
import { persistStore, persistReducer,persistCombineReducers} from 'redux-persist'
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import storage from 'redux-persist/es/storage'
import rootReducer from "../reducers/index";

import logger from 'redux-logger'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['nav'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const store = createStore(
    persistedReducer,
    applyMiddleware(middleware,thunk,logger,),
);

const persistor = persistStore(store);

export default {store,persistor};