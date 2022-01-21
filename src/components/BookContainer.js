import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import AddBooks from './AddBooks';
import { addBookAsync, removeBookAsync } from '../redux/books/Books';

const BookContainer = () => {
  const dispatch = useDispatch();

  const states = useSelector((state) => state.booksReducer, shallowEqual);

  const submitBookToStore = (title, category) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBookAsync(newBook));
  };

  const hanldeRemove = (ids) => {
    const newNode = { item_id: ids };
    dispatch(removeBookAsync(newNode));
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
