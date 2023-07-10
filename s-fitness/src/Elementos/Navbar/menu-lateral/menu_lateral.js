import React from "react";
import PropTypes from "prop-types";

function TopMenu({imagem}){
  return(
    <a href="index.html" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref={imagem}></use></svg>
      <span className="fs-4">Barra Lateral</span>
    </a>
                  
  );
}

function ElementosLinha({nome ,caminho ,imagem}){
    return(
    <li className="nav-item">
        <a href={caminho} className="nav-link link-dark">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref={imagem}></use></svg>
          {nome}
        </a>
      </li>
    );
}


function ElementosMenu(){
  return(
     <ul className="navbar-nav">
        <TopMenu /> 
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <ElementosLinha nome={'inicio'}  caminho={'/s-fitness/public/index.html'} imagem={"http://www.w3.org/2000/svg"}/>
          <ElementosLinha nome={'teste'}  caminho={'/s-fitness/public/index.html'} imagem={"http://www.w3.org/2000/svg"}/>

        </ul>    
        <hr></hr>
    </ul>
  );
}


export default function MenuLateral(){
    return(
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
          <ElementosMenu />
      </div>
    </div> 
    );
}

// Usando o prop-types para restringir a entrada das props 
TopMenu.PropTypes ={
  imagem: PropTypes.string.isRequired
}
ElementosLinha.PropTypes = {
  nome: PropTypes.string.isRequired,
  caminho: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired
}