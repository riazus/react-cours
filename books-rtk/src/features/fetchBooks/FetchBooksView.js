import { useState } from "react";
import { fetchBooks } from "./fetchBooksSlice";
import { useDispatch, useSelector } from "react-redux";

const FetchBooksView = () => {
  const [searchText, setSearchText] = useState("");
  const searchedBooks = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchBooks(searchText));
  };

  return (
    <>
      <main className="jumbotron jubotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indicate book's subject for search at the Google API</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                required
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              ></input>
              <button className="btn btn-outline-secondary">Search</button>
            </div>
          </form>
        </div>
      </main>

      <div className="container text-center">
        {searchedBooks.isLoading ? (
          <p>Searcing books...</p>
        ) : searchedBooks.books.length > 0 ? (
          searchedBooks.books.map((item) => {})
        ) : searchedBooks.error ? (
          <p style={{ color: "red" }}>Error occurated: {searchedBooks.error}</p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FetchBooksView;
