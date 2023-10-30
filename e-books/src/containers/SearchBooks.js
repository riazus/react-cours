import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";

function SearchBooks() {
  const [subject, setSubject] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(subject));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const displayedFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  ) : state.error !== "" ? (
    <p>{state.error}</p>
  ) : (
    state.fetchedBooks.map((item) => {
      return (
        <div className="card mb-2" key={item.id}>
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toogle="collapse"
                data-target={`#${item.id}`}
                aria-expanded="false"
              >
                {item.volumeInfo.title}
              </button>
            </h5>
          </div>
          <div id={item.id} className="" data-parent="#accordion">
            <div className="card-body">
              {item.volumeInfo.hasOwnProperty("imageLinks") && (
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                ></img>
              )}
              <br></br>
              <h4 className="card-title">Title: {item.volumeInfo.title}</h4>
              <h5 className="card-title">Authors: {item.volumeInfo.authors}</h5>
              <p className="card-text">
                Description: {item.volumeInfo.description}
              </p>
              <a
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
                href={item.volumeInfo.previewLink}
              >
                More info
              </a>
              <button className="btn btn-outline-secondary pl-3">
                Register
              </button>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <main role="main">
      <div className="jubotron jubotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indicate book's subject for search at the Google API</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="What search?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <div className="form-group m-3">
                <button className="btn btn-outline-secondary ml-1">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
      {displayedFetchedBooks}
      </div>
    </main>
  );
}

export default SearchBooks;
