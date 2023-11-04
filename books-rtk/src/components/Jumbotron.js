import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook as addBookAction } from "../features/library/librarySlice";

const Jumbotron = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBookAction({
        id: uuidv4(),
        title,
        author,
      })
    );
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">BOOKS</h1>
        <p>Add books to the library</p>
        <form
          className="form-inline justify-content-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-group">
            <input
              className="form-control"
              value={title}
              placeholder="Title"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <input
              className="form-control"
              placeholder="Author"
              value={author}
              required
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            ></input>
            <button className="btn btn-outline-secondary ml-1">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jumbotron;
