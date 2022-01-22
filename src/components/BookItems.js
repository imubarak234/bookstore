import PropTypes from 'prop-types';

const BookItems = (props) => {
  const {
    title, category, removing, ids,
  } = props;

  return (
    <div>
      <div className="container bookys d-flex justify-content-between my-4">
        <div className="texters d-flex flex-column align-content-around">
          <p className="cate">{category}</p>
          <p className="title">{title}</p>
          <p className="author">Suzanne</p>
          <ul className="d-flex buttons">
            <li><button type="button" className="btn">Comments</button></li>
            <li className="middle-man"><button className="btn" type="button" onClick={() => removing(ids)}>Remove</button></li>
            <li><button type="button" className="btn">Edit</button></li>
          </ul>
        </div>
        <div className="d-flex w-50 justify-content-around align-items-center">
          <div className="others w-50 d-flex">
            <div className="Oval-2" />
            <div>
              <p className="h1">64%</p>
              <p>Completed</p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between h-75 last-part">
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter">Chapter 17</p>
            <button type="button" className="btn">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

BookItems.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removing: PropTypes.func.isRequired,
  ids: PropTypes.string.isRequired,
};

export default BookItems;
