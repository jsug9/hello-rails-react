import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting'

const rootReducer = combineReducers({
    greetings: greetingReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
