import React from "react";
import { useState, useEffect } from "react";
import ApiBaseUrl from "../Shared/utils/Api";

export default function EditUsusariosPage() {
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [identificador, setIdentificador] = useState("");
  const[usuario,setUsuario]=useState("")

// const[infoUsuario,setInfoUsaurio]=useState({
//   rol:usuario.rol,
//   estado:usuario.estado,
// })
  
  const getUsuario=async()=>{
    try{
    const respuesta=await fetch(`${ApiBaseUrl}/get-usuario?identificador=${identificador}`)
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

  async function editRol(){
    
    const url=`${ApiBaseUrl}/edit-rol? identificador=${identificador}& rol='${rol}'`
    console.log(url)
    try{
      const respuesta=await fetch(url)
      const respuestajson=await respuesta.json()
      const respuestaUsuario =respuestajson.data
      console.log(respuestaUsuario)
    }
    catch(error){
      console.log(error)

    }
    
    

  }
function sayhi(){
  alert("hi")
}


 async function editEstado(){
    const respuesta=await fetch(`${ApiBaseUrl}/edit-estado? identificador=${identificador}& estado='${estado}'`)
    

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
        <button class="btn btn-outline-success" type="submit" onClick={getUsuario()}>
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
        class="form-control"
        type="text"
        placeholder="Rol"
        aria-label="default input example"
        onChange={(rol)=>setRol(rol.target.value)}
        // onChange={(r) => setInfoUsaurio({...infoUsuario,rol:r.target.value})}
      ></input>
      <button type="button" class="btn btn-primary" onClick={editRol}>
        Cambiar
      </button>
      <input
        class="form-control"
        type="text"
        placeholder="Estado"
        aria-label="default input example"
        onChange={(estado)=>setEstado(estado.target.value)}
        // onChange={(e) => setInfoUsaurio({...setInfoUsaurio,estado:e.target.value})}

      ></input>
      <button type="button" class="btn btn-primary" onClick={editEstado}>
        Cambiar
      </button>

      <h1>{rol}</h1>
      <h1>{estado}</h1>
    </div>
  );
}
