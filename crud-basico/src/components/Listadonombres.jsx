import React, { useState } from "react";
import uniqid from 'uniqid';

export const Listadonombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([])

const addNombre = (e) =>{
    e.preventDefault()
    const nuevoNombre= {
        id: uniqid(),
        tituloNombre: nombre
    }
    setListaNombres([...listaNombres, nuevoNombre])
}

  return (
    <div className="container">
      <h1>Aplicación Crud Básico</h1>
      <div className="row">
        <div className="col">
          <h2>Listado de Nombres</h2>
        </div>
        <div className="col">
          <h2>Formulario de Nombres</h2>
          <form onSubmit= {(e) => addNombre (e)} className="form-group">
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Introduzca el nombre"
            />
            <input
              className="btn btn-info w-100"
              type="submit"
              value="Registrar el nombre"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
