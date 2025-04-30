import React from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id="servico" 
      className="Servico py-16 bg-gradient-to-b from-gray-50 to-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="servico-container max-w-7xl mx-auto px-4">
        <motion.h1 
          className="servico-titulo text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meus Serviços
        </motion.h1>
        <motion.p 
          className="servico-descricao text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aqui estão os serviços que ofereço para atender às suas necessidades.
        </motion.p>
        <div className="servico-flex grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => (
            <motion.div
              key={servico.id}
              variants={cardVariants}
              className="servico-card backdrop-blur-md bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="servico-icone text-6xl mb-6">
                  {servico.icone}
                </div>
                <h2 className="servico-titulo-card text-2xl font-bold mb-4 text-gray-800">
                  {servico.titulo}
                </h2>
                <p className="servico-descricao-card text-gray-600 mb-6 text-lg">
                  {servico.descricao}
                </p>
                <motion.a
                  href={servico.link}
                  className="servico-botao inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {servico.botaoTexto}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Servico;
