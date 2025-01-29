import React from "react";
import "../styles/components/Galeria.css";

function Galeria() {
  const desenhos = [
    { id: 1, src: "./images/imagem1.png", alt: "Desenho Horizontal", orientacao: "horizontal" },
    { id: 2, src: "./images/imagem6.png", alt: "Desenho Vertical", orientacao: "vertical" },
    { id: 3, src: "/images/desenho3.jpg", alt: "Desenho Horizontal", orientacao: "horizontal" },
    { id: 4, src: "/images/7.png", alt: "Desenho Vertical", orientacao: "vertical" },
    { id: 5, src: "/images/imagem4.png", alt: "Desenho Horizontal", orientacao: "horizontal" },
  ];

  return (
    <div id="galeria" className="galeria">
      <h1 className="galeria-titulo">Galeria de Desenhos</h1>
      <p className="galeria-descricao">Aqui estão alguns dos meus desenhos favoritos.</p>
      <div className="galeria-flex">
        {desenhos.map((desenho) => (
          <div
            key={desenho.id}
            className={`galeria-item ${desenho.orientacao}`}
          >
            <img src={desenho.src} alt={desenho.alt} className="galeria-imagem" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
