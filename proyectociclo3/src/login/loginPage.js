import React, { Fragment, useState} from "react";

export default function LoginPage() {
const [email, setEmail]=useState("")
const [clave, setClave]=useState("")

  return (
    <Fragment>
      <div className="container">
        <h1>Login</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(email)=>setEmail(email.target.value)}
          />
          <label for="floatingInput">Correo Electronio</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={clave=>setClave(clave.target.value)}
          />
          <label for="floatingPassword">Clave</label>
        </div>
        <button type="button" className="btn btn-primary">Ingresar</button>
        <h1>{email}</h1>
        <h1>{clave}</h1>
      </div>
    </Fragment>
  );
}
