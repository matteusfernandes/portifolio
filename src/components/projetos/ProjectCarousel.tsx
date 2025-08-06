'use client';

import { useState, useRef, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data/projects';

interface ProjectCarouselProps {
  projects: Project[];
  selectedProject: Project;
  onProjectSelect: (project: Project) => void;
  onClearFilters: () => void;
}

export const ProjectCarousel = ({ 
  projects, 
  selectedProject, 
  onProjectSelect,
  onClearFilters 
}: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update current index when selected project changes
  useEffect(() => {
    const index = projects.findIndex(p => p.id === selectedProject.id);
    if (index !== -1 && index !== currentIndex) {
      setCurrentIndex(index);
    }
  }, [selectedProject.id, projects, currentIndex]);

  // Auto-scroll to current project
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth; // Full width of container
      const scrollPosition = currentIndex * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handleProjectClick = (project: Project, index: number) => {
    setCurrentIndex(index);
    onProjectSelect(project);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    setCurrentIndex(newIndex);
    onProjectSelect(projects[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    onProjectSelect(projects[newIndex]);
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-light-gray mb-4">Nenhum projeto encontrado</p>
        <button 
          onClick={onClearFilters}
          className="text-purple hover:text-white transition-colors"
        >
          Limpar filtros
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Navigation arrows and counter */}
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full border border-light-gray/30 hover:border-white/50 transition-colors"
          disabled={projects.length <= 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="text-center">
          <span className="text-light-gray text-sm">
            {currentIndex + 1} de {projects.length}
          </span>
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-light-gray/30 hover:border-white/50 transition-colors"
          disabled={projects.length <= 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex-shrink-0 snap-center"
              style={{ width: 'calc(100vw - 2rem)' }}
            >
              <ProjectCard
                project={project}
                isSelected={project.id === selectedProject.id}
                onClick={() => handleProjectClick(project, index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              onProjectSelect(projects[index]);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-purple scale-125' 
                : 'bg-light-gray/30 hover:bg-light-gray/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
