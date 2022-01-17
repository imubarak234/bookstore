import PropTypes from 'prop-types';

const BookItems = (props) => {
  const { title, author } = props;
  return (
    <li>
      <p>
        Title:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <button type="button">Remove</button>
    </li>
  );
};

BookItems.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItems;
