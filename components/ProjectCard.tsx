import React from 'react';
import type { Project } from '../types';
import SkillBadge from './SkillBadge';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;

  return (
    <div className="bg-primary rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-105 border border-gray-200">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <SkillBadge key={tag} skillName={tag} />
          ))}
        </div>
        <div className="mt-auto pt-4 flex items-center justify-end space-x-4">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub Repository">
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="Live Demo">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
