
import './App.css';

import { imagenes } from './data';

import Cuadro from './components/Cuadro/Cuadro';
import { useEffect, useState } from 'react';

function App() {
  const [ fase, setFase ] = useState(0)
  const [ estadoImagen, setEstadoImagen ] = useState(false)

  function tiempo(index) {
    if(index == 0) return 'duration-[900ms]'
    if(index == 1 || index == 3) return 'duration-[1100ms]'
    if(index == 2 || index == 4 || index == 6) return 'duration-[1400ms]'
    if(index == 5 || index == 7) return 'duration-[1700ms]'
    if(index == 8) return 'duration-[2000ms]'
  }

  useEffect(() => {
    // Configurar un intervalo para incrementar el contador cada segundo
    const interval = setInterval(() => {
      setFase(prevCount => (prevCount + 1) % (imagenes[1][1].length)); // Modulo 3 para reiniciar en 0 después de 2
    }, 4200);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    // Configurar un temporizador para cambiar el valor después de 2 segundos
    const timeout = setTimeout(() => {
      setEstadoImagen(false)
    }, 3500);

    const time = setTimeout(() => {
      setEstadoImagen(true)
    }, 1500)

    // Limpiar el temporizador cuando el componente se desmonta o antes de que se vuelva a ejecutar
    return () => {
      clearTimeout(timeout);
      clearTimeout(time);
    }
  }, [fase])
  
  return (
    <div className="bg-black h-dvh flex justify-center items-center">
      <div className='h-5/6 w-11/12 border-white border-2 grid grid-cols-3 grid-rows-3 [perspective:1000px]'>
        {
          imagenes.map((imagen, index) =>
            <Cuadro 
              className={imagen[0]}
              imagen={imagen[1]}
              fase={fase}
              estadoImagen={estadoImagen}
              duracion={tiempo(index)}
              key={index}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
