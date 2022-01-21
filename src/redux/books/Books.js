const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ids = 'ObbG1JsyiVwBBexxqAxs';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBookAsync = (payload) => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ids}/books`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.text())
  .then((data) => {
    if (data === 'Created') { dispatch(addBook(payload)); }
  });

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBookAsync = (payload) => (dispatch) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ids}/books/${payload.item_id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
}).then((response) => response.text())
  .then(() => {
    dispatch(removeBook(payload.item_id));
  });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
