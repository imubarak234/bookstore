import PropTypes from 'prop-types';
import BookItems from './BookItems';

const BookList = (props) => {
  const { list, removes } = props;
  return (
    <ul>
      {list.map((book) => (
        <BookItems
          key={book.item_id}
          ids={book.item_id}
          title={book.title}
          category={book.category}
          removing={removes}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removes: PropTypes.func.isRequired,
};

export default BookList;
