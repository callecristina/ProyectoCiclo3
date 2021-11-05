import React from "react";

export default function VentasPage() {
  return (
    <div className="container">
      <h1>Ventas</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id venta</th>
            <th scope="col"> Id cliente</th>
            <th scope="col">Nombre del cliente</th>
            <th scope="col">Valor</th>
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
      <h1>Nueva Venta</h1>
      <input class="form-control" type="text" placeholder="Identificación del Cliente" aria-label="default input example"></input>
      <input class="form-control" type="text" placeholder="Nombre del clienteCliente" aria-label="default input example"></input>
      <input class="form-control" type="text" placeholder="Valor de la venta" aria-label="default input example"></input>
      <button type="button" class="btn btn-primary">Agregar</button>
      <button type="button" class="btn btn-primary">Editar  </button>
    </div>
  );
}
