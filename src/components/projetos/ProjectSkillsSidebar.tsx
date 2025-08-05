import React from 'react';
import { Project } from '@/data/projects';
import { getSkillIcon } from '@/utils/skillIcons';

interface ProjectSkillsSidebarProps {
  selectedProject: Project;
}

export const ProjectSkillsSidebar: React.FC<ProjectSkillsSidebarProps> = ({ selectedProject }) => {
  return (
    <div className="border-r border-gray-600" style={{ width: '280px' }}>
      <div className="p-4 mb-4">
        {/* Skills Icons do projeto selecionado */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {selectedProject.skills.map((skill) => {
            const skillData = getSkillIcon(skill);
            return (
              <div key={skill} className="flex flex-col items-center">
                <div className={`w-12 h-12 ${skillData.color} rounded flex items-center justify-center mb-2`}>
                  {skillData.icon}
                </div>
                <span className="text-xs text-light-gray">{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Seção de Contato */}
      <div className="border-t border-gray-600 border-b border-gray-600">
        <div className="flex items-center justify-center py-4">
          <span className="text-light-gray text-sm" style={{ fontSize: '15px' }}>_contato</span>
        </div>
      </div>
      
      {/* Detalhes do Contato */}
      <div className="p-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(156,163,175,1)" className="w-4 h-4">
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
            </svg>
            <span className="text-light-gray text-sm font-mono">matteus_gbi@hotmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(156,163,175,1)" className="w-4 h-4">
              <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821Z"></path>
            </svg>
            <span className="text-light-gray text-sm font-mono">(77) 99109-9699</span>
          </div>
        </div>
      </div>
    </div>
  );
};
