import React from "react";

import MenuLateral from "./menu-lateral/menu_lateral";




export default function Navbar() {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand w-75 justify-content-top" href="index.html">
          S-Fitness
        </a>
        <div classNameName="btn-menu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="offcanvas-body">
          <MenuLateral />
        </div>
        
      </div>
    </nav>
  );
}
