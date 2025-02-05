import React from "react";
import "../styles/components/Servico.css";

function Servico() {
  const servicos = [
    {
      id: 1,
      titulo: "Desenvolvimento Web",
      descricao:
        "Criação de sites modernos e responsivos para pequenas lojas ou portfólios.",
      icone: "💻",
      botaoTexto: "Peça seu Site",
      link: "#contato",
      layout: "horizontal",
    },
    {
      id: 2,
      titulo: "Criação de Logos",
      descricao:
        "Desenvolvimento de logos utilizando Figma, refletindo a identidade única da sua marca.",
      icone: "🎨",
      botaoTexto: "Ver Galeria",
      link: "#galeria-logos",
      layout: "horizontal",
    },
    {
      id: 3,
      titulo: "Desenhos Personalizados",
      descricao:
        "Arte digital personalizada para projetos criativos ou presentes únicos.",
      icone: "🖌️",
      botaoTexto: "Solicitar Desenho",
      link: "#contato",
      layout: "horizontal",
    },
  ];

  return (
    <section id="servico" className="Servico py-12 bg-gray-100">
      <div className="servico-container text-center mx-auto">
        <h1 className="servico-titulo text-4xl font-bold mb-4 text-gray-800">
          Meus Serviços
        </h1>
        <p className="servico-descricao text-lg text-gray-600 mb-10">
          Aqui estão os serviços que ofereço para atender às suas necessidades.
        </p>
        <div className="servico-flex grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className={`servico-card bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl ${servico.layout}`}
            >
              <div className="servico-icone text-5xl mb-4 text-blue-600">
                {servico.icone}
              </div>
              <h2 className="servico-titulo-card text-2xl font-semibold mb-2 text-gray-800">
                {servico.titulo}
              </h2>
              <p className="servico-descricao-card text-gray-600 mb-6">
                {servico.descricao}
              </p>
              <a
                href={servico.link}
                className="servico-botao inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {servico.botaoTexto}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servico;
