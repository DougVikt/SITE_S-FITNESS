import React from "react";

import MenuLateral from "./menu-lateral/menu_lateral";


function BottonLogin(){
  return(
    <div className="">
      <a className="btn btn-warning" href="#" role="button">
        LOGIN
      </a> 
    </div>
    
  );
}

export default function Navbar() {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand w-50" href="index.html">
          S-Fitness
        </a>
        <BottonLogin />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <MenuLateral />
      </div>
    </nav>
  );
}
