import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/movies" className="nav-item nav-link">
              Movies
            </NavLink>
            <NavLink to="/Customers" className="nav-item nav-link">
              Customers
            </NavLink>
            <NavLink to="/Rentals" className="nav-item nav-link">
              Rentals
            </NavLink>
            <NavLink to="/Login" className="nav-item nav-link">
              Login
            </NavLink>
            <NavLink to="/Register" className="nav-item nav-link">
              Register
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
