import React from 'react';
import './Navbar.css'; // Asegúrate de crear este archivo para estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#aspirantes">Aspirantes</a></li>
        <li><a href="#alumnos">Alumnos</a></li>
        <li><a href="#administrativos">Administrativos</a></li>
        <li><a href="#docentes">Docentes</a></li>
        <li><a href="#egresados">Egresados</a></li>
        <li><a href="#oferta-educativa">Oferta Educativa</a></li>
        <li><a href="#publico-general">Público en General</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
