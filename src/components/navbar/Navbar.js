import React from "react";
import { NavLink } from "react-router-dom";
import Products from "../products/Products";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            yourCart.com
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/home">
                  Home
                  {/* <NavLink to = '/home'>Home</NavLink> */}
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={Products} href="/products">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle show"
                  data-bs-toggle="dropdown"
                  href="/login"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  User
                </a>
                <div class="dropdown-menu show" data-bs-popper="none">
                  <a class="dropdown-item" href="/signup">
                    Signup
                  </a>
                  <a class="dropdown-item" href="/login">
                    Login
                  </a>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                  {/* <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a> */}
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
