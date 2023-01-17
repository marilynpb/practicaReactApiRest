import React, { useEffect } from "react";
import { useState } from "react";

function ApiUsers(){
    const [usuario, setUsuario] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((r)=> r.json())
        .then((usuario)=> setUsuario(usuario));
    })

    return(
        <ul className="lista">
                    <h3>Api usuarios</h3>
            {usuario.map((usuario, i)=>(
                <li key={i}>Id: {usuario.id} - Nombre: {usuario.name}</li>
            ))}
        </ul>
    )
}

export default ApiUsers