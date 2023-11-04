import { useState } from "react";
import { fetchBooks } from "./fetchBooksSlice";
import { useDispatch, useSelector } from "react-redux";
import { addBook as addBookAction } from "../library/librarySlice";

const FetchBooksView = () => {
  const [searchText, setSearchText] = useState("");
  const searchedBooks = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(searchText));
    setSearchText("");
  };

  return (
    <>
      <main className="jumbotron jubotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indicate book's subject for search at the Google API</p>

          <form
            className="form-inline justify-content-center"
            onSubmit={(e) => handleSubmit(e)}
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
          <ul>
            {searchedBooks.books.map((item) => {
              return (
                <div key={item.id}>
                  <li key={item.id}>
                    Title: {item.volumeInfo.title} |{" "}
                    {item.volumeInfo.authors?.length > 1
                      ? `Authors:`
                      : "Author:"}{" "}
                    {item.volumeInfo.authors ?? `doesn't exists`}
                  </li>
                  <button
                    onClick={() =>
                      dispatch(
                        addBookAction({
                          id: item.id,
                          title: item.volumeInfo.title,
                          author: item.volumeInfo.authors[0],
                        })
                      )
                    }
                    className="btn btn-secondary"
                  >
                    Add to my library
                  </button>
                </div>
              );
            })}
          </ul>
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
