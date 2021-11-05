import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function ProductosPage() {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  return (
    <div className="container">
      <h1>Productos</h1>
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
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <h1>Nuevo Producto</h1>
      <input
        class="form-control"
        type="text"
        placeholder="Nombre del Producto"
        aria-label="default input example"
        onChange={(nombre) => setNombre(nombre.target.value)}
      ></input>
      <input
        class="form-control"
        type="text"
        placeholder="Stock"
        aria-label="default input example"
        onChange={(stock) => setStock(stock.target.value)}
      ></input>
      <input
        class="form-control"
        type="text"
        placeholder="Precio"
        aria-label="default input example"
        onChange={(precio) => setPrecio(precio.target.value)}
      ></input>
      <button type="button" class="btn btn-primary">
        Agregar
      </button>
      <Link to="/editarproducto" className="nav-link active" aria-current="page" >Editar</Link>
      <h1>{nombre}</h1>
      <h1>{stock}</h1>
      <h1>{precio}</h1>
    </div>
  );
}
