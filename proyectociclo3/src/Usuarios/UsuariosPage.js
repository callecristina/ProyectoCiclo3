import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UsuariosPage() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [usuarios,setUsuarios]=useState([])

  const getLista=async()=>{
    try{
    const respuesta=await fetch("http://localhost:3001/get-lista")
    const respuestajson=await respuesta.json()
    const respuestaUsuarios =respuestajson.data
    const listaUsuarios= respuestaUsuarios.map((usuario) => 
    <tr>
      <th scope="row">{usuario.identificador}</th>
      <td>{usuario.nombre}</td>
      <td>{usuario.rol}</td>
      <td>{usuario.estado}</td>
      <td>{usuario.mail}</td>
    </tr>
  );
  setUsuarios(listaUsuarios)
    console.log(respuestajson.data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getLista()
  },[])
  return (
    <div className="container">
      <h1>Usuarios</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">rol</th>
            <th scope="col">estado</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>{usuarios}</tbody>
      </table>
      <h1>Nuevos Usuarios</h1>
      <input
        class="form-control"
        type="text"
        placeholder="Nombre"
        aria-label="default input example"
        onChange={(nombre) => setNombre(nombre.target.value)}
      ></input>
      <input
        class="form-control"
        type="text"
        placeholder="Email"
        aria-label="default input example"
        onChange={(mail) => setMail(mail.target.value)}
      ></input>
      <input
        class="form-control"
        type="text"
        placeholder="Rol"
        aria-label="default input example"
        onChange={(rol) => setRol(rol.target.value)}
      ></input>
      <input
        class="form-control"
        type="text"
        placeholder="Estado"
        aria-label="default input example"
        onChange={(estado) => setEstado(estado.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Agregar
      </button>
      <Link to="/editarusuario" className="nav-link active" aria-current="page">
        Editar
      </Link>
      <h1>{nombre}</h1>
      <h1>{mail}</h1>
      <h1>{rol}</h1>
      <h1>{estado}</h1>
    </div>
  );
}
