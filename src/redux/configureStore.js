import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/Books';

const reducer = combineReducers({});

const store = createStroe(
  reducer,
  applyMiddleware(logger)
);

export default store;