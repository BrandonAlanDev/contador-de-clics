import './App.css';
import './hojas-de-estilo/contador.css'
import breadoge from './imagenes/breadoge.png';
import Botoncito from './componentes/Botoncito.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClics,setNumClics] = useState(0,);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <img class='logoSuperior-img'src={breadoge} alt='Imagen de un pan con cara de un can'/>
      <header><h1>contador de clics</h1></header>
      <Contador class='contador'
        numClics={numClics}/>
      <section class='botoncitos'>
      <Botoncito
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

      <Botoncito
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </section>
    </div>
  );
}

export default App;
