import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState} from 'react';

function App() {

  const [numCLics,setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numCLics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(numCLics - 1);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numCLics}/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
