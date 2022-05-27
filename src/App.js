import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);    

  const manejarClic = () =>{
    setNumClics(numClics + 1);

  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
      <img 
          className='freecodecamp-logo'
          src={freecodecamplogo} 
          alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador  numClics={numClics}
        />

        <Boton 
        texto='Clic'
        esDeBotonDeClic={true}
        manejarClic= {manejarClic} 
        />
        <Boton
        texto='Reiniciar'
        esDeBotonDeClic={false}
        manejarClic= {reiniciarContador}
        />
        
      </div>
    </div>
  );
}

export default App;
