import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { getSkillIcon } from '@/utils/skillIcons';

interface ProjectCardProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
  onGitHubClick?: () => void;
  onDemoClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onClick,
  onGitHubClick,
  onDemoClick
}) => {
  const [imageError, setImageError] = useState(false);
  const previewImage = project.images?.main || project.image;

  return (
    <div 
      className={`bg-gray-800/50 border rounded-lg overflow-hidden hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
        isSelected ? 'border-aqua-green shadow-lg shadow-aqua-green/20' : 'border-gray-700'
      }`}
      onClick={onClick}
    >
      {/* Project Header com badges */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-purple text-sm font-medium">{project.name}</h3>
          <div className="flex items-center space-x-1">
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
              Concluído
            </span>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              Trybe
            </span>
          </div>
        </div>
        <p className="text-light-gray text-xs">
          <span className="text-light-gray">{'//'}</span> {project.tech}
        </p>
      </div>
      
      {/* Project Image/Preview */}
      <div className="h-48 bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center border-b border-gray-700 relative group overflow-hidden">
        {!imageError && previewImage ? (
          <Image
            src={previewImage}
            alt={`${project.name} - Preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-gray-500 text-center transition-all duration-300 group-hover:text-gray-400">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
              </svg>
            </div>
            <span className="text-xs">Preview em desenvolvimento</span>
          </div>
        )}
        
        {/* Overlay para hover */}
        <div className="absolute inset-0 bg-aqua-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-aqua-green text-sm font-medium">Clique para mais detalhes</span>
        </div>
      </div>
      
      {/* Project Description com chips de tecnologias */}
      <div className="p-4">
        <p className="text-light-gray text-sm mb-3">{project.description}</p>
        
        {/* Chips de tecnologias */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.skills.slice(0, 3).map((skill, index) => {
            const skillData = getSkillIcon(skill);
            return (
              <span 
                key={index}
                className={`${skillData.color} text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1`}
              >
                <span className="w-3 h-3 flex items-center justify-center">
                  {skillData.icon}
                </span>
                <span>{skill}</span>
              </span>
            );
          })}
          {project.skills.length > 3 && (
            <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
              +{project.skills.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-end space-x-2">
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-sm transition-colors group" 
            title="Ver no GitHub"
            onClick={(e) => {
              e.stopPropagation();
              onGitHubClick?.();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform">
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>
          </button>
          <button 
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-sm transition-colors group" 
            title="Ver Demo"
            onClick={(e) => {
              e.stopPropagation();
              onDemoClick?.();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform">
              <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L15 7.5V9.5H13V3H21ZM19 5H15V6.5L19 10V5Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
