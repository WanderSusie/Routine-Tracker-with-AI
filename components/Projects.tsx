import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
