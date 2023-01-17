import {Route, Routes } from "react-router-dom";
import Tarjeta from "./components/Tarjeta";
import Navbar from "./components/Navbar";
import ApiUsers from "./components/ApiUsers";
import Contacto from "./components/Contacto";
import Acercade from "./components/Acercade";
import Footer from "./components/Footer";
import Contador from "./components/Contador";
import "./style/App.css"


function App() {
  return (
    <div className="App">
              <Navbar
        logo="Curso React"
        menu1="Home" 
        menu2="Acerca de"
        menu3="Contacto"/>
        <Routes>
        <Route path="home" element={<App/>}></Route>
          <Route path="acercade" element={<Acercade/>}></Route>
          <Route path="contacto" element={<Contacto/>}></Route>
        </Routes>
        <p>Práctica React</p>
        <Tarjeta/>
        <ApiUsers id="1"/>
        <Contador/>
        <Footer texto="Práctica - Educación IT - 2022"/>
    </div>
  );
}

export default App;
