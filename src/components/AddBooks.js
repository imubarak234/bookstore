import PropTypes from 'prop-types';

const AddBooks = (props) => {
  const { adds } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const ans = e.target;
    const category = ans.category.value;
    const title = ans.title.value;
    adds(title, category);
    ans.title.value = '';
    ans.category.value = 'Category ▼';
  };

  return (
    <div>
      <form action="#" className="py-5 container" onSubmit={handleSubmit}>
        <h3 id="form-title">ADD NEW BOOK</h3>
        <div className="row gx-5 d-flex">
          <div className="mb-2 mt-3 col-md-7">
            <input type="text" id="titles" className="form-control p-3" placeholder="Book Title" name="title" required />
          </div>
          <div className="mt-3 col-md-3">
            <select className="form-select p-3" aria-label="Default select example" id="category" name="category">
              <option selected>Category ▼</option>
              <option value="Fiction">Fiction</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Classic">Classic</option>
            </select>
          </div>
          <button type="submit" className="mb-2 mt-3 col-md-2 btn" id="both">ADD BOOKS</button>
        </div>
      </form>
    </div>

  );
};

AddBooks.propTypes = {
  adds: PropTypes.func.isRequired,
};

export default AddBooks;
