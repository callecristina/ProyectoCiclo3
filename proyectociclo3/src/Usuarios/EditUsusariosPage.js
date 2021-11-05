import React from "react";
import { useState, useEffect } from "react";

export default function EditUsusariosPage() {
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [identificador, setIdentificador] = useState("");
  

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
          {" "}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      <h1>Editar</h1>
      <input
        class="form-control"
        type="text"
        placeholder="Rol"
        aria-label="default input example"
        onChange={(rol) => setRol(rol.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>
      <input
        class="form-control"
        type="text"
        placeholder="Estado"
        aria-label="default input example"
        onChange={(estado) => setEstado(estado.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>

      <h1>{rol}</h1>
      <h1>{estado}</h1>
      <h1>{identificador}</h1>
    </div>
  );
}
