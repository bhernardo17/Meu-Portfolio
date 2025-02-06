import React, { useState } from 'react';
import '../styles/components/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Bhe</div>
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <nav className="nav">
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#galeria-logos">Logos</a></li>
          <li><a href="#servico">Serviços</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      {/* <div className="menu-icon" onClick={toggleMenu}>☰</div> */}
    </header>
  );
};

export default Header;