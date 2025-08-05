'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ProjectFilters,
  ProjectGrid,
  ProjectSkillsSidebar,
  ProjectDetailsSidebar
} from '@/components';
import { projects } from '@/data';
import { useProjectFilters } from '@/hooks';
import { useState } from 'react';

export default function Projetos() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const {
    categories,
    technologies,
    selectedCategory,
    selectedTech,
    filteredProjects,
    setSelectedCategory,
    setSelectedTech,
    clearFilters
  } = useProjectFilters(projects);

  const handleProjectSelect = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleGitHubClick = () => {
    if (selectedProject.githubUrl) {
      window.open(selectedProject.githubUrl, '_blank');
    }
  };

  const handleDemoClick = () => {
    if (selectedProject.demoUrl) {
      window.open(selectedProject.demoUrl, '_blank');
    }
  };

  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      {/* Tab bar fixo */}
      <div className="w-full border-b border-gray-600 bg-gradient-main flex" style={{ height: '60px' }}>
        <div className="border-r border-gray-600 flex items-center justify-center" style={{ width: '280px' }}>
          <span className="text-light-gray text-sm" style={{ fontSize: '15px' }}>Skill de projetos</span>
        </div>
        <div className="flex-1 flex items-center h-full">
          <div
            className="border-r border-gray-600 px-4 py-2 cursor-pointer bg-dark-gray text-white flex items-center text-sm"
            style={{ minWidth: '120px' }}
          >
            projetos
            <span className="ml-auto text-light-gray text-lg">×</span>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full h-full">
        <div className="flex h-full min-h-screen">
          {/* Sidebar - Skills de projetos */}
          <ProjectSkillsSidebar selectedProject={selectedProject} />

          {/* Conteúdo principal - 60% da largura restante */}
          <div className="flex-[3] px-6 py-4 overflow-auto">
            <ProjectFilters
              categories={categories}
              technologies={technologies}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              filteredProjectsCount={filteredProjects.length}
              totalProjectsCount={projects.length}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
              onClearFilters={clearFilters}
            />

            <ProjectGrid
              projects={filteredProjects}
              selectedProject={selectedProject}
              onProjectSelect={handleProjectSelect}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Gap no meio */}
          <div className="w-6 border-r border-gray-600 relative border-l border-gray-600">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Sidebar direita - 40% da largura restante */}
          <ProjectDetailsSidebar
            selectedProject={selectedProject}
            onGitHubClick={handleGitHubClick}
            onDemoClick={handleDemoClick}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
