import Jumbotron from "../../components/Jumbotron";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook as deleteBookAction } from "./librarySlice";

const LibraryView = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const displayBooks =
    books.length > 0 ? (
      books.map((item) => {
        return (
          <li
            key={item.id}
            className="list-group-item list-group-item-light d-flex justify-content-between"
          >
            <span>
              <strong>Title: </strong>
              {item.title}
            </span>
            <span>
              <strong>Author: </strong>
              {item.author}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteBookAction(item.id))}
            >
              x
            </button>
          </li>
        );
      })
    ) : (
      <li className="list-group-item list-group-item-light d-flex justify-content-center">
        Registered books here
      </li>
    );

  return (
    <main role="main">
      <Jumbotron />
      <div className="container" style={{ minHeight: "100px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="group-list">{displayBooks}</ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LibraryView;
