import React from "react";

  

function ElementosMenu({nome ,caminho ,imagem}){
    return(
    <li className="nav-item">
        <a href={caminho} className="nav-link active">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref={imagem}></use></svg>
          {nome}
        </a>
      </li>
    );
}

export default function MenuLateral(){
    return(
    <ul className="navbar-nav">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi pe-none me-2" width="40" height="32"></svg>
            <span className="fs-4"><font style={{verticalAlign:'inherit'}}><font style={{verticalAlign: 'inherit'}}>Menu</font></font></span>
        </a>  
        <ul className="nav nav-pills flex-column mb-auto">
          <ElementosMenu nome={'inicio'}  caminho={'/s-fitness/public/index.html'} imagem={"http://www.w3.org/2000/svg"}/>
          <ElementosMenu nome={'teste'}  caminho={'/s-fitness/public/index.html'} imagem={"http://www.w3.org/2000/svg"}/>

        </ul>    
        <hr></hr>
    </ul>
    );
}