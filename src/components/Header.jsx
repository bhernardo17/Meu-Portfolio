import React from 'react';
import '../styles/components/header.css'; 

const Header = () => {
    return (
      <header className="header">
        <div className="logo">Bhe</div>
        <nav className="nav">
          <ul className="nav-list">
            
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#galeria-logos">Logos</a></li>
            <li><a href="#servico">Serviços</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="menu-icon">☰</div> {/* Ícone para mobile */}
      </header>
    );
  };
  
  export default Header;