import React from 'react';
import '../styles/components/Header.css'; // Caminho corrigido

const Header = () => {
    return (
      <header className="header">
        <div className="logo">Bhe</div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <div className="menu-icon">☰</div> {/* Ícone para mobile */}
      </header>
    );
  };
  
  export default Header;