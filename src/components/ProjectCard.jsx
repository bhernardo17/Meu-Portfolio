import React from 'react';
import '../styles/components/ProjectCard.css'; // Caminho corrigido

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;