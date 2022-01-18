const AddBooks = () => (
  <form>
    <div class="row g-3">
        <div class="mb-2 mt-3 col-md-6">
          <label for="author" className="form-label">Author:</label>
          <input type="text" className="form-control" id="author" placeholder="Author" name="author" required />
        </div>
        <div class="mb-3 col-md-6">
          <label for="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Title" name="title" required />
        </div>
      </div>
    <button type="submit" className="btn">Add</button>
  </form>
);

export default AddBooks;
