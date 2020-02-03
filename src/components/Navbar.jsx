import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="header">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            boxShadow: "0 0.5rem 2rem rgba(0,0,0,0.1)",
            transition: "background 0.2s ease-out 0s"
          }}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="img/img.png" width={50} />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    to="/admin"
                    style={{
                      padding: "0.5rem 1rem",
                      fontWeight: 400,
                      textDecoration: "none",
                      color: "#2e3349",
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      letterSpacing: "0.1em",
                      transition: "all 0.3s"
                    }}
                    exact
                  >
                    <span>Admin</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <li className="nav-item">
                    <NavLink
                      to="/user"
                      style={{
                        padding: "0.5rem 1rem",
                        fontWeight: 400,
                        textDecoration: "none",
                        color: "#2e3349",
                        textTransform: "uppercase",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        letterSpacing: "0.1em",
                        transition: "all 0.3s"
                      }}
                      exact
                    >
                      <span>User</span>
                    </NavLink>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br />
      <br />

      <br />
      <br />
    </>
  );
}

export default Navbar;
