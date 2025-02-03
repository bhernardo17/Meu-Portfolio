import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/components/Projects.css'; // Caminho corrigido

const Projects = () => {
  const projects = [
    {
      title: 'EasyTatto',
      description: 'Projeto pessoal que tem como objetivo conectar Tatuador e Cliente.',
      link: 'https://github.com/bhernardo17/Easy-Tatto-v1',
    },
    {
      title: 'PGS',
      description: 'Sistema de Gestão de Contratos de Sistemas da PMF. Funcional na prefeitura porém por conta de ser um sistema privado não tenho autorização para mostrar o código.',
      link: '#',
    },
    {
      title: 'Minhoca na Cabeça',
      description: 'Em Desenvolvimento...',
      link: '#',
    },
  ];

  return (
    <section id="projetos" className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;