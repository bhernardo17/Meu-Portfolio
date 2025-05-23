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
      link: 'https://pgs.pmf.sc.gov.br/',
    },
    {
      title: 'Minhoca na Cabeça',
      description: 'Em Desenvolvimento...',
      link: 'https://github.com/bhernardo17/Minhoca-na-Cabeca',
    },
    {
      title: 'Projeto PII',
      description: 'Site para o Programa de Incentivo à Inovação (PII).',
      link: 'https://pii.pmf.sc.gov.br/',
    },
    {
      title: 'Criador de Tabelas',
      description: 'Uma aplicação moderna para criação de tabelas personalizadas com suporte a colunas horizontais e verticais, além de exportação para PDF.',
      link: 'https://github.com/bhernardo17/criador-de-tabelas',
    }
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