import React, { useState } from "react";
import "../styles/components/About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sobre Mim",
      content: (
        <div>
          <p>🌟 <strong>Portfólio Pessoal de Bhernardo Ramos Vieira</strong></p>
          <p>
            Bem-vindo ao meu repositório de portfólio! Este projeto foi criado
            para compartilhar minha jornada como desenvolvedor, apresentando
            minhas habilidades, projetos e aspirações.
          </p>
        </div>
      ),
    },
    {
      title: "Projetos Concluídos",
      content: (
        <ul>
          <li>
            <strong>PGS:</strong> Um sistema de gestão de contratos desenvolvido
            para a prefeitura, otimizando processos e trazendo eficiência ao
            setor público.
          </li>
        </ul>
      ),
    },
    {
      title: "Projetos em Andamento",
      content: (
        <ul>
          <li>
            <strong>EasyTatto:</strong> Projeto pessoal em desenvolvimento que
            reflete minha busca por inovação e aprendizado.
          </li>
        </ul>
      ),
    },
    {
      title: "Tecnologias e Ferramentas",
      content: (
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Frameworks:</strong> React, TailwindCSS</li>
          <li><strong>Design:</strong> Figma, Adobe Photoshop</li>
          <li><strong>Outros:</strong> Integração de APIs e Banco de Dados</li>
        </ul>
      ),
    },
    {
      title: "Meu Objetivo",
      content: (
        <p>
          Meu maior sonho é construir uma carreira sólida na área de tecnologia,
          criando soluções que impactem positivamente a vida das pessoas.
        </p>
      ),
    },
    {
      title: "Hobbies e Interesses",
      content: (
        <p>
          Quando não estou codificando, gosto de explorar minha criatividade em
          design gráfico, edição de vídeos e criação de personagens.
        </p>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="sobre" className="about">
      <h2 className="text-3xl font-bold text-center mb-6">Sobre Mim</h2>
      <div className="carousel-container">
        <div className="carousel-slide">
          <h3 className="text-xl font-semibold mb-4">{slides[currentSlide].title}</h3>
          <div>{slides[currentSlide].content}</div>
        </div>
        <div className="carousel-controls flex justify-center mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400"
          >
            &#8592; Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400"
          >
            Próximo &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
