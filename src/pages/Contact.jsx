import React from 'react';
import '../styles/components/Contact.css'; // Caminho corrigido

const Contact = () => {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      <p>Email: bhe@example.com</p>
      <p>LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></p>
    </section>
  );
};

export default Contact;