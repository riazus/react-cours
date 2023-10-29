import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addBook,
  deleteAllBook,
  deleteBook,
} from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

function AddBooks({ libraryData, addBook, deleteBook, deleteAllBook }) {
  const initialState = {
    title: "",
    author: "",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(data);

    // clear input
    setData(initialState);
  };

  const displayBooks =
    libraryData.length > 0 ? (
      <FlipMove>
        {libraryData.map((data) => {
          return (
            <li
              key={data.id}
              className="list-group-item list-group-item-light d-flex justify-content-between"
            >
              <span>
                <strong>Titre: </strong>
                {data.title}
              </span>
              <span>
                <strong>Author: </strong>
                {data.author}
              </span>
              <span
                className="btn btn-danger"
                onClick={() => deleteBook(data.id)}
              >
                x
              </span>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <li className="list-group-item list-group-item-light d-flex justify-content-center">
        registered books here
      </li>
    );

  const deleteBooksBtn = libraryData.length > 0 && (
    <div className="d-flex justify-content-center">
      <button onClick={() => deleteAllBook()} className="btn btn-danger mt-4 mb-5">Delete all books</button>
    </div>
  );

  return (
    <main role="main">
      <div className="jubotron jubotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Add books to the biblioatecque</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                value={data.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                onChange={(e) => setData({ ...data, title: e.target.value })}
                required
              />
              <input
                value={data.author}
                type="text"
                className="form-control"
                placeholder="Author"
                onChange={(e) => setData({ ...data, author: e.target.value })}
                required
              />
              <div className="form-group">
                <button className="btn btn-outline-secondary ml-1">
                  Add Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "100px" }}></div>
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">{displayBooks}</ul>
          {deleteBooksBtn}
        </div>
      </div>
    </main>
  );
}

const addStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAllBook: () => dispatch(deleteAllBook()),
  };
};

export default connect(addStateToProps, addDispatchToProps)(AddBooks);
