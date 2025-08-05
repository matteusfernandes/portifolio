import React from 'react';
import { Project } from '@/data/projects';
import { AnimatedElement } from '@/components/AnimatedElement';
import { ProjectImageGallery } from './ProjectImageGallery';

interface ProjectDetailsSidebarProps {
  selectedProject: Project;
  onGitHubClick?: () => void;
  onDemoClick?: () => void;
}

export const ProjectDetailsSidebar: React.FC<ProjectDetailsSidebarProps> = ({
  selectedProject,
  onGitHubClick,
  onDemoClick
}) => {
  return (
    <div className="flex-[2] px-6 py-4 overflow-auto">
      <AnimatedElement delay={0.3} animation="slide-in-left">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-aqua-green text-xl font-semibold">{selectedProject.name}</h2>
            <div className="flex space-x-2">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Finalizado
              </span>
            </div>
          </div>
          
          {/* Galeria de imagens do projeto */}
          <ProjectImageGallery project={selectedProject} className="mb-4" />
          
          {/* Botões de ação */}
          <div className="flex space-x-3 mb-6">
            <button 
              onClick={onGitHubClick}
              className="flex-1 bg-aqua-green hover:bg-aqua-green-dark text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aqua-green/20 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
              <span>GitHub</span>
            </button>
            <button 
              onClick={onDemoClick}
              className="flex-1 bg-purple hover:bg-purple-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple/20 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L15 7.5V9.5H13V3H21ZM19 5H15V6.5L19 10V5Z"></path>
              </svg>
              <span>Demo</span>
            </button>
          </div>
        </div>

        {/* Seção de informações com cards */}
        <div className="space-y-4">
          {/* Card de Categoria */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h3 className="text-purple text-sm mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"></path>
              </svg>
              Categoria
            </h3>
            <p className="text-light-gray text-sm">{selectedProject.category}</p>
          </div>

          {/* Card de Descrição */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h3 className="text-purple text-sm mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z"></path>
              </svg>
              Sobre o Projeto
            </h3>
            <p className="text-light-gray text-sm mb-3">{selectedProject.detailedDescription}</p>
            <p className="text-light-gray text-sm">{selectedProject.longDescription}</p>
          </div>

          {/* Card de Habilidades */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h3 className="text-purple text-sm mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="mr-2">
                <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311ZM12 16L8 12L9.5 10.5L12 13L16.5 8.5L18 10L12 16Z"></path>
              </svg>
              Habilidades Desenvolvidas
            </h3>
            <div className="space-y-2">
              {selectedProject.developedSkills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-aqua-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-light-gray text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};
