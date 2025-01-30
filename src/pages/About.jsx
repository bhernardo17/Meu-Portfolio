import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCode, FaLaptopCode, FaStar, FaHeart, FaPalette } from "react-icons/fa";
import "../styles/components/About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Sobre Mim",
      content: (
        <div>
          <p>
            <FaStar className="inline-block text-yellow-400" size={20} />{" "}
            <strong>Portfólio Pessoal de Bhernardo Ramos Vieira</strong>
          </p>
          <p className="mt-4">
            Olá! Sou um desenvolvedor apaixonado por tecnologia e design. Este portfólio foi
            criado para apresentar minhas habilidades, projetos e aspirações na área de
            tecnologia.
          </p>
        </div>
      ),
    },
    {
      title: "Projetos Concluídos",
      content: (
        <ul className="mt-4">
          <li>
            <strong>PGS:</strong> <FaLaptopCode className="inline-block text-blue-400" size={16} />{" "}
            Sistema de gestão de contratos para a prefeitura, otimizado para melhorar processos no setor público.
          </li>
        </ul>
      ),
    },
    {
      title: "Projetos em Andamento",
      content: (
        <ul className="mt-4">
          <li>
            <strong>EasyTatto:</strong>{" "}
            <FaCode className="inline-block text-green-400" size={16} /> Projeto inovador em desenvolvimento, refletindo minha busca contínua por aprendizado.
          </li>
        </ul>
      ),
    },
    {
      title: "Tecnologias e Ferramentas",
      content: (
        <ul className="mt-4">
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
        <p className="mt-4">
          Meu maior objetivo é construir uma carreira sólida como desenvolvedor, criando soluções que impactem a vida das pessoas e alcançando estabilidade profissional para realizar meus sonhos pessoais.
        </p>
      ),
    },
    {
      title: "Hobbies e Interesses",
      content: (
        <p className="mt-4">
          <FaPalette className="inline-block text-pink-400" size={16} />{" "}
          Além de codificar, adoro explorar minha criatividade em design gráfico, edição de vídeos e criação de personagens. Também curto atividades ao ar livre para equilibrar corpo e mente.
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
            className="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400 flex items-center"
          >
            Próximo <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
