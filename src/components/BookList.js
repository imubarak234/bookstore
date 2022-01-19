import PropTypes from 'prop-types';
import BookItems from './BookItems';

const BookList = (props) => {
  const { list, removes } = props;
  return (
    <ul>
      {list.map((book) => (
        <BookItems
          key={book.id}
          ids={book.id}
          title={book.title}
          author={book.author}
          removing={removes}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
  removes: PropTypes.func.isRequired,
};

export default BookList;
