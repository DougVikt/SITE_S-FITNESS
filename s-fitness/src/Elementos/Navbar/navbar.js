import React from "react";

import MenuLateral from "./menu-lateral/menu_lateral";




function BottonMunu(){
  return(
    <div className="col d-flex justify-content-end p-0">
      <button className="navbar-toggler w-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button> 
    </div>
  );
}
function BottonLogin(){
  return(
    <div className="col d-flex justify-content-end">
      <a className="btn btn-warning ms-5 px-4" href="#" role="button">
        LOGIN
      </a> 
    </div>
    
  );
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light fixed-top">
      <div className="container-fluid m-0">
        <div className="row d-flex justify-content-end w-100">
          <div className="col-9">
             <a className="navbar-brand" href="index.html">
            S-Fitness
          </a>
          </div>
          <BottonLogin />
          <BottonMunu />
          <MenuLateral />
        </div>
      </div>
    </nav>
  );
}
