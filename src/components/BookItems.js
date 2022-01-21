import PropTypes from 'prop-types';

const BookItems = (props) => {
  const {
    title, category, removing, ids,
  } = props;

  return (
    <li className="d-flex w-50 justify-content-between">
      <p>
        Title:
        {title}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={() => removing(ids)}>Remove</button>
    </li>
  );
};

BookItems.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removing: PropTypes.func.isRequired,
  ids: PropTypes.string.isRequired,
};

export default BookItems;
