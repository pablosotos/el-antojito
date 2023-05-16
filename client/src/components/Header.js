import React from 'react';
import logo from '../images/logo-black-white.png';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/menu">Menú</a></li>
          <li><a href="/reservas">Reservas</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
      <img src={logo} alt="Logo de El Antojito" />
      <h1>El Antojito</h1>
    </header>
  );
};

export default Header;
