import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/components/projects.css'; // Caminho corrigido

const Projects = () => {
  const projects = [
    {
      title: 'EasyTatto',
      description: 'Projeto pessoal que tem como objetivo conectar Tatuador e Cliente.',
      link: 'https://github.com/bhernardo17/Easy-Tatto-v1',
    },
    {
      title: 'PGS',
      description: 'Sistema de Gestão de Contratos de Sistemas da PMF. Link levara para as telas e nada mais além disso já que é um Sistema para a Prefeitura.',
      link: 'https://github.com/bhernardo17/PGS-v2',
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