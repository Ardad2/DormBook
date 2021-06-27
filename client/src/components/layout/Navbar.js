import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> DormBook
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/profiles">User List</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
