import React from "react";
import { useState, useEffect } from "react";

export default function EditUsusariosPage() {
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [identificador, setIdentificador] = useState("");
  const[usuario,setUsuario]=useState("")
const[infoUsuario,setInfoUsaurio]=useState({
  rol:usuario.rol,
  estado:usuario.estado,
})
  
  const getUsuario=async()=>{
    try{
    const respuesta=await fetch(`http://localhost:3001/get-usuario?identificador=${identificador}`)
    const respuestajson=await respuesta.json()
    const respuestaUsuario =respuestajson.data
    const usuario= respuestaUsuario.map((usuario) => 
    <tr>
      <th scope="row">{usuario.identificador}</th>
      <td>{usuario.nombre}</td>
      <td>{usuario.mail}</td>
      <td>{usuario.rol}</td>
      <td>{usuario.estado}</td>
    </tr>
  );
  setUsuario(usuario)
    console.log(respuestajson.data)
    }
    catch(error){
      console.log(error)
    }
  }


///función para editar rol



  const editarRol=()=>{
    try{
      (response)=>{console.log(response.data)}
  //   const respuesta=await fetch(`http://localhost:3001/edit-rol? identificador=${identificador} & rol=${rol}`)
  //   const respuestajson=await respuesta.json()
  //   const respuestaUsuario =respuestajson.data
  //   console.log(respuestaUsuario)

  // setUsuario(usuario)
  //   console.log(respuestaUsuario)
    }
    catch(error){
      
      console.log(error)
    }
  }

  const editarEstado=()=>{    try{
    (response)=>{console.log(response.data)}
//   const respuesta=await fetch(`http://localhost:3001/edit-rol? identificador=${identificador} & rol=${rol}`)
//   const respuestajson=await respuesta.json()
//   const respuestaUsuario =respuestajson.data
//   console.log(respuestaUsuario)

// setUsuario(usuario)
//   console.log(respuestaUsuario)
  }
  catch(error){
    
    console.log(error)
  }
}




  useEffect(()=>{
    getUsuario()
  },[])

  return (
    <div className="container">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Identificador"
          aria-label="Search"
          onChange={(identificador) =>
            setIdentificador(identificador.target.value)
          }
        />
        <button class="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuario}
        </tbody>
      </table>
      <h1>Editar</h1>
      <input
        value={infoUsuario.rol}
        class="form-control"
        type="text"
        placeholder="Rol"
        aria-label="default input example"
        onChange={(r) => setInfoUsaurio({...infoUsuario,rol:r.target.value})}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>
      <input
        value={infoUsuario.estado}
        class="form-control"
        type="text"
        placeholder="Estado"
        aria-label="default input example"
        onChange={(e) => setInfoUsaurio({...setInfoUsaurio,estado:e.target.value})}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>

      <h1>{rol}</h1>
      <h1>{estado}</h1>
    </div>
  );
}
