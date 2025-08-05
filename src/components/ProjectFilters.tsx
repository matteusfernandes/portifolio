import React from 'react';

interface FiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTech: string;
  filteredProjectsCount: number;
  totalProjectsCount: number;
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string) => void;
  onClearFilters: () => void;
}

export const ProjectFilters: React.FC<FiltersProps> = ({
  categories,
  technologies,
  selectedCategory,
  selectedTech,
  filteredProjectsCount,
  totalProjectsCount,
  onCategoryChange,
  onTechChange,
  onClearFilters
}) => {
  return (
    <div className="mb-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-aqua-green text-sm">Filtros</h3>
        <span className="text-light-gray text-xs">
          {filteredProjectsCount} de {totalProjectsCount} projetos
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Filtro por categoria */}
        <div className="flex flex-col">
          <label className="text-light-gray text-xs mb-1">Categoria</label>
          <select 
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-xs rounded px-2 py-1 focus:border-aqua-green focus:outline-none"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Todas' : category}
              </option>
            ))}
          </select>
        </div>
        
        {/* Filtro por tecnologia */}
        <div className="flex flex-col">
          <label className="text-light-gray text-xs mb-1">Tecnologia</label>
          <select 
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white text-xs rounded px-2 py-1 focus:border-aqua-green focus:outline-none"
          >
            {technologies.map(tech => (
              <option key={tech} value={tech}>
                {tech === 'all' ? 'Todas' : tech}
              </option>
            ))}
          </select>
        </div>
        
        {/* Botão de reset */}
        <div className="flex flex-col justify-end">
          <button 
            onClick={onClearFilters}
            className="bg-purple hover:bg-purple-dark text-white text-xs px-3 py-1 rounded transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};
