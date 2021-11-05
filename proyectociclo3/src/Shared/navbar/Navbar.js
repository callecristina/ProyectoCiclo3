import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    console.log(props);
    return (
        <container>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/Home" className="navbar-brand" >{props.titulo}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/registro" className="nav-link active" aria-current="page" >Registro</Link>
      </li>
      <li className="nav-item">
          <Link to="/login" className="nav-link active" aria-current="page" >Login</Link>
      </li>
      <li className="nav-item">
          <Link to="/ventas" className="nav-link active" aria-current="page" >Ventas</Link>
      </li>
      <li className="nav-item">
          <Link to="/productos" className="nav-link active" aria-current="page" >Productos</Link>
      </li>
      <li className="nav-item">
          <Link to="/usuarios" className="nav-link active" aria-current="page" >Usuarios</Link>
      </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</container>
        
    )
}
