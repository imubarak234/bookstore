import PropTypes from 'prop-types';

const AddBooks = (props) => {
  const { adds } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const ans = e.target;
    const title = ans.author.value;
    const author = ans.title.value;
    adds(title, author);
    ans.author.value = '';
    ans.title.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="mb-2 mt-3 col-md-6">
          <label htmlFor="author" className="form-label">
            Author:
            <input type="text" className="form-control" id="author" placeholder="Author" name="author" required />
          </label>
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="title" className="form-label">
            Title:
            <input type="text" className="form-control" id="title" placeholder="Title" name="title" required />
          </label>
        </div>
      </div>
      <button type="submit" className="btn bg-secondary">Add</button>
    </form>
  );
};

AddBooks.propTypes = {
  adds: PropTypes.func.isRequired,
};

export default AddBooks;
