import { Link } from "react-router-dom";
import '../style/Contacto.css'

function Contacto(){
    return(
    <div>
        <h1>Contacto</h1>
            <nav><Link to="home">Home</Link></nav>
            <form>
                <label htmlFor="">Email</label>
                <span>-</span>
                <input></input>
                <span>-</span>
                <label htmlFor="">Mensaje</label>
                <span>-</span>
                <textarea></textarea>  
                <span>-</span>
                <button>Enviar</button>        
            </form>
    </div>)
}

export default Contacto
