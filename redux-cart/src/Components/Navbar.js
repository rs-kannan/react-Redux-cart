import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Redux-Cart
          </Link>
        </div>

        <div className="collapse navbar-collapse p-2 " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-Link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-Link" to="/Product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/cart">
                <span class="material-symbols-outlined">shopping_cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;