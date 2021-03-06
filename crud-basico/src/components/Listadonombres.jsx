import React, { useState } from "react";
import uniqid from "uniqid";

export const Listadonombres = () => {
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  const addNombre = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      console.log("el campo nombre es vacio");
      setError("el campo nombre es vacio");
      return; //vuelve a la funcion padre
    }
    const nuevoNombre = {
      id: uniqid(),
      tituloNombre: nombre,
    };
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre("");
    setError(null);
  };

  const deleteNombre = (id) => {
    const nuevoArray = listaNombres.filter((item) => item.id !== id);
    setListaNombres(nuevoArray);
  };

  const editar = (item) => {
    setModoEdicion(true);
    setNombre(item.tituloNombre);
    setId(item.id);
  };

  const editarNombre = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      console.log("el campo nombre es vacio");
      setError("el campo nombre es vacio");
      return; //vuelve a la funcion padre
    }
    const nuevoArray = listaNombres.map((item) =>
      item.id === id ? { id: item.id, tituloNombre: nombre } : item
    );
    setListaNombres(nuevoArray);
    setModoEdicion(false);
    setNombre("");
    setError(null)
  };

  return (
    <div className="container">
      <h1>Aplicación Crud Básico</h1>
      <div className="row">
        <div className="col">
          <h2>Listado de Nombres</h2>
          <ul className="list-group">
            {listaNombres.map((item) => (
              <li key="{item.id}" className="list-group-item">
                {item.tituloNombre}
                <button
                  className="btn btn-danger btn-lg float-end"
                  onClick={() => {
                    deleteNombre(item.id);
                  }}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-info btn-lg float-end"
                  onClick={() => {
                    editar(item);
                  }}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Formulario de Nombres</h2>
          <form
            onSubmit={modoEdicion ? editarNombre : addNombre}
            className="form-group"
          >
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              className="form-control mb-3"
              type="text"
              placeholder="Introduzca el nombre"
              value={nombre}
            />
            <input
              className="btn btn-info w-100 mb-3"
              type="submit"
              value={modoEdicion ? "Editar Nombre" : "Registrar Nombre"}
            />
          </form>
          {
          error != null ? (
            <div className="alert alert-danger"> {error} </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
