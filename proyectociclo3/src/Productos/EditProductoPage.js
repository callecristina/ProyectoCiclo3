import React from "react";
import { useState } from "react";

export default function EditProductoPage() {
  const [identificador, setIdentificador]=useState("")
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  return (
    <div className="container">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Identificador"
          aria-label="Search"
          onChange={(identificador)=>setIdentificador(identificador.target.value)}
        />
        <button class="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
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
        placeholder="Nombre del Producto"
        aria-label="default input example"
        onChange={(nombre) => setNombre(nombre.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>
      <input
        class="form-control"
        type="text"
        placeholder="Stock"
        aria-label="default input example"
        onChange={(stock) => setStock(stock.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>
      <input
        class="form-control"
        type="text"
        placeholder="Precio"
        aria-label="default input example"
        onChange={(precio) => setPrecio(precio.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Cambiar
      </button>
      <h1>{identificador}</h1>
      <h1>{nombre}</h1>
      <h1>{stock}</h1>
      <h1>{precio}</h1>
    </div>
  );
}
