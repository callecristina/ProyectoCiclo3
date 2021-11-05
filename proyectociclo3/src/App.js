import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./login/loginPage";
import RegisterPage from "./Register/RegisterPage";
import ProductosPage from "./Productos/ProductosPage";
import VentasPage from "./Ventas/VentasPage";
import Navbar from "./Shared/navbar/Navbar";
import UsuariosPage from "./Usuarios/UsuariosPage";
import EditProductoPage from "./Productos/EditProductoPage";
import EditUsusariosPage from "./Usuarios/EditUsusariosPage";


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/login" exact>
            <LoginPage></LoginPage>
          </Route>
          <Route path ="/registro" exact>
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/ventas" exact>
            <VentasPage></VentasPage>
          </Route>
          <Route path="/productos" exact>
            <ProductosPage></ProductosPage>
          </Route>
          <Route path="/editarproducto" exact>
          <EditProductoPage></EditProductoPage>
          </Route>
          <Route path="/usuarios" exact>
            <UsuariosPage></UsuariosPage>
          </Route>
          <Route path="/editarusuario" exact>
          <EditUsusariosPage></EditUsusariosPage>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
