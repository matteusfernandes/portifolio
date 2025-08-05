import React from 'react';
import { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { AnimatedElement } from '../AnimatedElement';

interface ProjectGridProps {
  projects: Project[];
  selectedProject: Project;
  onProjectSelect: (project: Project) => void;
  onClearFilters: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  selectedProject,
  onProjectSelect,
  onClearFilters
}) => {
  if (projects.length === 0) {
    return (
      <AnimatedElement delay={0.1} animation="fade-in-up">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(156,163,175,1)">
              <path d="M12 2C13.1046 2 14 2.89543 14 4V9H19C19.5523 9 20 9.44772 20 10V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V10C4 9.44772 4.44772 9 5 9H10V4C10 2.89543 10.8954 2 12 2ZM12 4V9H12V4ZM6 11V20H18V11H6Z"></path>
            </svg>
          </div>
          <h3 className="text-light-gray text-lg mb-2">Nenhum projeto encontrado</h3>
          <p className="text-gray-500 text-sm mb-4">
            Tente ajustar os filtros para encontrar projetos correspondentes.
          </p>
          <button 
            onClick={onClearFilters}
            className="bg-aqua-green hover:bg-aqua-green-dark text-black px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      </AnimatedElement>
    );
  }

  return (
    <AnimatedElement delay={0.1} animation="fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject.id === project.id}
            onClick={() => onProjectSelect(project)}
            onGitHubClick={() => {
              if (project.githubUrl) {
                window.open(project.githubUrl, '_blank');
              }
            }}
            onDemoClick={() => {
              if (project.demoUrl) {
                window.open(project.demoUrl, '_blank');
              }
            }}
          />
        ))}
      </div>
    </AnimatedElement>
  );
};
