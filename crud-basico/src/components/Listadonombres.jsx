import React, {useState} from 'react'

export const Listadonombres = () => {
    return (
        <div className="container">
            <h1>Aplicación Crud Básico</h1>
            <div className='row'>
            <div className='col'>
                <h2>Listado de Nombres</h2>
                </div>
                <div className='col'>
                <h2>Formulario de Nombres</h2>
                <form className="form-group">
                    <input className="form-control mb-3" type= "text" placeholder="Introduzca el nombre"/>
                    <input className="btn btn-info w-100" type= "submit" value="Registrar el nombre"/>
                </form>
                </div>
            </div>
        </div>
    )
}
