import { useState, useMemo } from 'react';
import { Project } from '@/data/projects';
import { extractCategoriesFromProjects, extractTechnologiesFromProjects } from '@/utils/skillIcons';

export const useProjectFilters = (projects: Project[]) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  const categories = useMemo(() => extractCategoriesFromProjects(projects), [projects]);
  const technologies = useMemo(() => extractTechnologiesFromProjects(projects), [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category.includes(selectedCategory);
      const techMatch = selectedTech === 'all' || project.skills.includes(selectedTech);
      return categoryMatch && techMatch;
    });
  }, [projects, selectedCategory, selectedTech]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
  };

  return {
    categories,
    technologies,
    selectedCategory,
    selectedTech,
    filteredProjects,
    setSelectedCategory,
    setSelectedTech,
    clearFilters
  };
};
