import React, { useEffect, useState } from "react";

const Usuario = () => {
    // Agregar usuario
    const [nameUser, setNameUser] = useState("");
    const [termContrato, setTermContrato] = useState(false);
    const handleUsuario = (evento) => {
        // ¿Dónde está en el evento lo que viene escrito por el usuario desde el input de texto?
        // Respuesta: evento.target.value
        setNameUser(evento.target.value)
    };
    const handleTerminos = () => {
        setTermContrato(!termContrato)
    }
    // Interfaz de usuario
    return (
        <>
            <h1>Formulario de usuario</h1>
            <label htmlFor="usuario">Indique un nombre de usuario</label><br/>
            <input type="text" name="usuario" placeholder="Por ej: Marcelo Díaz" onChange={handleUsuario}/><br/><br/><br/>
            {
                nameUser == "Daniel" &&
                <p>Ya existe ese Usuario</p>
            }
            <br/>
            <input type="checkbox" checked={termContrato} onChange={handleTerminos} name="terminos"/>
            <label htmlFor="terminos">Acepto términos de contrato</label><br/><br/>
            <button type="submit">Guardar nombre usuario</button>
            
        </>
    );
};
export default Usuario;