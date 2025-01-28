import React from 'react';
import '../styles/components/contact.css'; // Caminho corrigido

const Contact = () => {
  return (
    <section id="contato" className="contact">
      <h2>📩 <strong>Entre em Contato</strong></h2>
      <p>Email: bhernardooficial@gmail.com</p>
      <p>GitHub: <a href="https://github.com/bhernardo17" target="_blank" rel="noopener noreferrer">@bhernardo17</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/bhernardo-ramos-vieira-50b343272/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></p>
    </section>
  );
};

export default Contact;