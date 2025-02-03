import React from 'react';
import '../styles/components/Footer.css'; // Caminho corrigido

const Footer = () => {
  return (
    <footer className="footer">
      <p>©{new Date().getFullYear()} Portfólio de Bhernardo. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
