import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import AddBooks from './AddBooks';
import { addBook, removeBook } from '../redux/books/Books';

const BookContainer = () => {
  const dispatch = useDispatch();

  const states = useSelector((state) => state.booksReducer, shallowEqual);

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
  };

  const hanldeRemove = (ids) => {
    dispatch(removeBook(ids));
  };

  return (
    <div>
      <BookList
        list={states}
        removes={hanldeRemove}
      />
      <AddBooks adds={submitBookToStore} />
    </div>
  );
};

export default BookContainer;
