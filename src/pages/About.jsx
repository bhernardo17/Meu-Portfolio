import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCode, FaLaptopCode, FaStar, FaHeart, FaPalette, FaCertificate } from "react-icons/fa";
import "../styles/components/About.css";
import { motion } from 'framer-motion';

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
          Olá! Sou um desenvolvedor apaixonado por tecnologia e design. 
          Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no UNICESUSC, 
          com previsão de conclusão em 2025. Este portfólio foi criado para apresentar minhas habilidades, 
          projetos e aspirações na área de tecnologia.
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
    {
      title: "Certificado: Lógica de Programação",
      content: (
        <div className="mt-4 flex flex-col items-center">
          <p>
            <FaCertificate className="inline-block text-purple-400" size={20} />{" "}
            <strong>Certificado de Lógica de Programação</strong>
          </p>
          <div className="mt-4 w-full max-w-xs h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/images/logica-programacao-certificado.png" // Substitua pelo caminho correto
              alt="Certificado de Lógica de Programação"
              className="certificate-image"
            />
          </div>
          <div className="mt-4 text-left w-full max-w-xs">
            <p>
              <strong>Bhernardo Ramos Vieira</strong> concluiu com sucesso o curso de Lógica de Programação da Trybe, com carga horária de 10 horas.
            </p>
            <p className="mt-2">
              Durante o curso, foram abordados:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Importância da lógica de programação</li>
              <li>Conceitos fundamentais de algoritmos</li>
              <li>Estruturas de seleção e repetição</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Certificado: JavaScript do Zero",
      content: (
        <div className="mt-4 flex flex-col items-center">
          <p>
            <FaCertificate className="inline-block text-purple-400" size={20} />{" "}
            <strong>Certificado de JavaScript do Zero</strong>
          </p>
          <div className="mt-4 w-full max-w-xs h-64 overflow-hidden rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/images/javascript-zero-certificado.png" 
              alt="Certificado de JavaScript do Zero"
              className="certificate-image"
            />
          </div>
          <div className="mt-4 text-left w-full max-w-xs">
            <p>
              <strong>Bhernardo Ramos Vieira</strong> concluiu o Curso JavaScript do Zero, alcançando, no mínimo, 80% de aproveitamento, com carga horária de 10 horas.
            </p>
            <p className="mt-2">
              Durante o curso, foram abordados:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Fundamentos da linguagem JavaScript</li>
              <li>Manipulação do DOM</li>
              <li>Eventos e programação assíncrona</li>
            </ul>
          </div>
        </div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

export const RevealOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default About;