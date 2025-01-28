import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/components/projects.css'; // Caminho corrigido

const Projects = () => {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição breve do projeto.',
      link: '#',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição breve do projeto.',
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