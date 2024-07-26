import { useState } from 'react'

import './App.css'
import Sidebar from './sidebar'
import Proyectos from './Proyectos';
import Contact from './Contact';
import SobreMi from './Sobremi';

function App() {
  const [actual, setActual] = useState(0);

  const changeActual = (actual) =>{
    setActual(actual);
  }

  return (
    <div className="principal-container">
      <Sidebar changeActual={changeActual} />
      <div className="container-content">
        {actual == 0 && <h1>SOBRE MI</h1>}
        {actual == 1 && <h1>PROYECTOS</h1>}
        {actual == 2 && <h1>CONTACTO</h1>}
        <div className="content">
          {actual == 0 && <SobreMi />}
          {actual == 1 && <Proyectos />}
          {actual == 2 && <Contact />}
          
        </div>
      </div>
    </div>
  )
}

export default App
