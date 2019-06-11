import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "rgba(37, 37, 37, 1)",
        boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.3)"
      }}
    >
      <Link class="navbar-brand" to="/">
        Home
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <Link class="nav-link" to="/campusListing">
              Campuses<span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="students">
              Students
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
