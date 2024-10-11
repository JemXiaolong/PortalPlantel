import React from 'react';
import Navbar from '../Navbar'; // Asegúrate de importar la Navbar correctamente

function Aspirantes() {
  return (
    <>
      {/* Solo el menú de navegación */}
      <Navbar />

      {/* Contenido exclusivo para la página de aspirantes */}
      <div className="aspirantes-container">
        <h1 className="aspirantes-title">Bienvenido a la página de Aspirantes</h1>
        <h1>Hola mundo</h1>
      </div>
    </>
  );
}

export default Aspirantes;
