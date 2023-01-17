import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props){
    
    return(
        <div>
            <nav>
            <h2>{props.logo}</h2>
            <ul>
                <li><Link to="home">{props.menu1}</Link></li>
                <li><Link to="acercade">{props.menu2}</Link></li>
                <li><Link to="contacto">{props.menu3}</Link></li>
            </ul>
            </nav>
        </div>
    )
}


export default Navbar 