/* eslint-disable no-restricted-syntax */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer, { addBook } from './books/Books';

const ids = 'ObbG1JsyiVwBBexxqAxs';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

const spread = (obj = {}) => {
  const ans = [];
  for (const i in obj) {
    if ((typeof obj[i]) === 'object') {
      const newObj = { item_id: i, ...obj[i][0] };
      ans.push(newObj);
    }
  }
  return ans;
};

export const refresh = async () => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ids}/books`)
    .then((response) => response.json())
    .then((data) => {
      const newData = spread(data);
      newData.map((next) => store.dispatch(addBook(next)));
    });
};

refresh();

export default store;
