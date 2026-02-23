import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary">
          <nav className="navbar navbar-expand-lg navbar-light px-3">
            {/* Brand / Home Link */}
            <NavLink
              to="/"
              className="navbar-brand text-light"
            >
              HOME
            </NavLink>
            
            {/* Hamburger for smaller screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link text-light"
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link text-light"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Cart Icon */}
            <div className="position-relative">
              <NavLink
                to="/cart"
                className="nav-link text-light"
              >
                <i className="fa-solid fa-cart-shopping fs-3"></i>
              </NavLink>
              <span
                className="count rounded-pill text-dark position-absolute top-0 start-100 translate-middle"
                style={{ backgroundColor: "orange", right: '-10%' }}
              >
                {cartAllProduct?.length}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
