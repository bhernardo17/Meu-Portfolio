import React from "react";
import '../styles/components/Servico.css';

function Servico() {
  const servicos = [
    {
      id: 1,
      titulo: "Criação de Logos",
      descricao: "Desenvolvimento de logos profissionais utilizando Figma.",
      icone: "🎨",
      layout: "horizontal", 
    },
    {
      id: 2,
      titulo: "Desenhos Personalizados",
      descricao: "Arte digital personalizada para seus projetos ou presentes.",
      icone: "🖌️",
      layout: "horizontal", 
    },
    {
      id: 3,
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites básicos para pequenas lojas ou portfólios.",
      icone: "💻",
      layout: "horizontal", 
    },
  ];

  return (
    <section id="servico" className="Servico">
    <div className="servico-container">
      <h1 className="servico-titulo">Meus Serviços</h1>
      <p className="servico-descricao">Aqui estão os serviços que ofereço.</p>
      <div className="servico-flex">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className={`servico-card ${servico.layout}`}
          >
            <div className="servico-icone">{servico.icone}</div>
            <h2 className="servico-titulo-card">{servico.titulo}</h2>
            <p className="servico-descricao-card">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Servico;
