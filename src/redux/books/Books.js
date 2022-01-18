import BookContainer from "../../components/BookContainer";

const ADD_Book = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = payload => ({
  type: ADD_Book,
  payload: payload,
});

export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload: payload,
});

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Book:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== payload)
    default:
      return state;
  }
};

