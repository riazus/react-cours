import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
        <h4 className="mr-md-auto">
          <Link to="/" className="text-decoration-none text-white">
            BOOKS
          </Link>
        </h4>
        <nav className="btn-group">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
          <Link to="/search" className="btn btn-light">
            Search Books
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
