import BookList from './BookList';
import AddBooks from './AddBooks';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/Books';

const BookContainer = () => {

  return (
    <div>
      <BookList />
      <AddBooks />
    </div>
  );
};

export default BookContainer;
