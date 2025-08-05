'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AnimatedElement } from '@/components/AnimatedElement';
import { useState } from 'react';

export default function Projetos() {
  // Dados dos projetos com mais detalhes
  const projects = [
    {
      id: 1,
      name: 'Trybe Wallet',
      tech: '_react & redux',
      description: '/Carteira de controle de gastos com conversor de moedas',
      skills: ['React', 'Redux', 'JavaScript', 'CSS'],
      detailedDescription: 'Projeto proposto para o desenvolvimento de uma carteira de controle de gastos com conversor de moedas.',
      longDescription: 'Essa aplicação permite ao usuário adicionar, remover e editar um gasto, além de proporcionar a visualização de uma tabela com todos os seus gastos e a visualização do total de gastos convertidos para uma moeda de escolha.',
      category: 'Bloco 15 - Gerenciamento de estado com Redux.',
      developedSkills: [
        'Criar um store Redux em aplicações React',
        'Criar reducers no Redux em aplicações React',
        'Criar actions no Redux em aplicações React',
        'Criar dispatchers no Redux em aplicações React',
        'Conectar Redux aos componentes React',
        'Criar actions assíncronas na sua aplicação React que faz uso do Redux.'
      ],
      image: '/placeholder-project.png',
    },
    {
      id: 2,
      name: 'Recipe App',
      tech: '_react hooks & context api',
      description: '/App de receitas com favoritos e filtros',
      skills: ['React', 'Hooks', 'Context API', 'JavaScript'],
      detailedDescription: 'Aplicação de receitas desenvolvida em grupo utilizando metodologias ágeis.',
      longDescription: 'App que permite buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks.',
      category: 'Projeto em Grupo - React Hooks & Context API',
      developedSkills: [
        'Utilizar React Hooks',
        'Utilizar Context API do React',
        'Trabalhar em equipe com metodologias ágeis',
        'Consumir APIs externas',
        'Implementar filtros e busca',
        'Gerenciar estado global da aplicação'
      ],
      image: '/placeholder-project.png',
    },
    {
      id: 3,
      name: 'Tryunfo',
      tech: '_react & class components',
      description: '/Jogo de cartas estilo Super Trunfo',
      skills: ['React', 'Class Components', 'JavaScript', 'CSS'],
      detailedDescription: 'Jogo de cartas no estilo Super Trunfo desenvolvido com React.',
      longDescription: 'Aplicação que permite criar, listar, filtrar e jogar com cartas personalizadas no estilo Super Trunfo.',
      category: 'Projeto React - Componentes de Classe',
      developedSkills: [
        'Criar componentes de classe em React',
        'Criar e gerenciar estado em componentes',
        'Criar e gerenciar eventos em componentes',
        'Passar informações entre componentes via props',
        'Verificar tipos com PropTypes'
      ],
      image: '/placeholder-project.png',
    },
    {
      id: 4,
      name: 'Star Wars Planets',
      tech: '_react hooks & context api',
      description: '/Filtro de planetas do universo Star Wars',
      skills: ['React', 'Hooks', 'Context API', 'JavaScript'],
      detailedDescription: 'Lista com filtros de planetas do universo de Star Wars usando Context API.',
      longDescription: 'Aplicação que consome a API do Star Wars e permite filtrar planetas por diferentes critérios como população, período orbital, etc.',
      category: 'Projeto React Hooks & Context API',
      developedSkills: [
        'Utilizar Context API para gerenciar estado',
        'Utilizar React Hook useState',
        'Utilizar React Hook useContext',
        'Utilizar React Hook useEffect',
        'Criar filtros dinâmicos'
      ],
      image: '/placeholder-project.png',
    },
    {
      id: 5,
      name: 'Store Manager',
      tech: '_node.js & mysql',
      description: '/API RESTful para gerenciamento de vendas',
      skills: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
      detailedDescription: 'API RESTful para sistema de gerenciamento de vendas em formato dropshipping.',
      longDescription: 'Sistema completo de CRUD para produtos e vendas, seguindo arquitetura MSC (Model, Service, Controller) e utilizando MySQL.',
      category: 'Projeto Back-end - Node.js & MySQL',
      developedSkills: [
        'Desenvolver API RESTful',
        'Implementar arquitetura MSC',
        'Trabalhar com banco de dados MySQL',
        'Criar middleware de validações',
        'Implementar testes unitários'
      ],
      image: '/placeholder-project.png',
    },
    {
      id: 6,
      name: 'Talker Manager',
      tech: '_node.js & express',
      description: '/API para cadastro de palestrantes',
      skills: ['Node.js', 'Express', 'File System', 'JavaScript'],
      detailedDescription: 'API para cadastro e gerenciamento de palestrantes (talkers).',
      longDescription: 'Sistema de CRUD que permite cadastrar, visualizar, pesquisar, editar e excluir informações de palestrantes, utilizando arquivo JSON como base de dados.',
      category: 'Projeto Back-end - Node.js & Express',
      developedSkills: [
        'Desenvolver endpoints de uma API',
        'Implementar middlewares',
        'Trabalhar com sistema de arquivos',
        'Realizar validações de dados',
        'Implementar autenticação com token'
      ],
      image: '/placeholder-project.png',
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  // Extrair categorias e tecnologias únicas
  const categories = ['all', ...new Set(projects.map(p => p.category.split(' - ')[0]))];
  const technologies = ['all', ...new Set(projects.flatMap(p => p.skills))];

  // Filtrar projetos
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category.includes(selectedCategory);
    const techMatch = selectedTech === 'all' || project.skills.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  const getSkillIcon = (skill: string): { icon: React.ReactElement; color: string } => {
    const skillIcons: Record<string, { icon: React.ReactElement; color: string }> = {
      'React': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001Z"></path></svg>,
        color: 'bg-cyan-500'
      },
      'Redux': {
        icon: <span className="text-white font-bold text-lg">R</span>,
        color: 'bg-purple-600'
      },
      'JavaScript': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>,
        color: 'bg-yellow-500'
      },
      'CSS': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>,
        color: 'bg-blue-600'
      },
      'Node.js': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"></path></svg>,
        color: 'bg-green-600'
      },
      'Express': {
        icon: <span className="text-white font-bold text-lg">E</span>,
        color: 'bg-gray-700'
      },
      'MySQL': {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153z"></path></svg>,
        color: 'bg-blue-800'
      },
      'Hooks': {
        icon: <span className="text-white font-bold text-lg">H</span>,
        color: 'bg-cyan-600'
      },
      'Context API': {
        icon: <span className="text-white font-bold text-lg">C</span>,
        color: 'bg-orange-600'
      },
      'Class Components': {
        icon: <span className="text-white font-bold text-lg">CC</span>,
        color: 'bg-indigo-600'
      },
      'File System': {
        icon: <span className="text-white font-bold text-lg">FS</span>,
        color: 'bg-yellow-700'
      }
    };

    return skillIcons[skill] || { icon: <span className="text-white font-bold text-lg">{skill[0]}</span>, color: 'bg-gray-600' };
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

          {/* Conteúdo principal - 60% da largura restante */}
          <div className="flex-[3] px-6 py-4 overflow-auto">
            {/* Seção de Filtros */}
            <div className="mb-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-aqua-green text-sm">Filtros</h3>
                <span className="text-light-gray text-xs">
                  {filteredProjects.length} de {projects.length} projetos
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                {/* Filtro por categoria */}
                <div className="flex flex-col">
                  <label className="text-light-gray text-xs mb-1">Categoria</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
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
                    onChange={(e) => setSelectedTech(e.target.value)}
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
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedTech('all');
                    }}
                    className="bg-purple hover:bg-purple-dark text-white text-xs px-3 py-1 rounded transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              </div>
            </div>

            <AnimatedElement delay={0.1} animation="fade-in-up">
              {filteredProjects.length === 0 ? (
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
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedTech('all');
                    }}
                    className="bg-aqua-green hover:bg-aqua-green-dark text-black px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className={`bg-gray-800/50 border rounded-lg overflow-hidden hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                      selectedProject.id === project.id ? 'border-aqua-green shadow-lg shadow-aqua-green/20' : 'border-gray-700'
                    }`}
                    onClick={() => setSelectedProject(project)}
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
                    
                    {/* Project Image/Preview com loading animado */}
                    <div className="h-48 bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center border-b border-gray-700 relative group">
                      <div className="text-gray-500 text-center transition-all duration-300 group-hover:text-gray-400">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center animate-pulse">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                            <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
                          </svg>
                        </div>
                        <span className="text-xs">Preview em desenvolvimento</span>
                      </div>
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
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform">
                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                          </svg>
                        </button>
                        <button 
                          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded text-sm transition-colors group" 
                          title="Ver Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform">
                            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L15 7.5V9.5H13V3H21ZM19 5H15V6.5L19 10V5Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              )}
            </AnimatedElement>
          </div>

          {/* Gap no meio */}
          <div className="w-6 border-r border-gray-600 relative border-l border-gray-600">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Sidebar direita - 40% da largura restante */}
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
                
                {/* Preview melhorado do projeto selecionado */}
                <div className="h-48 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-lg mb-4 flex items-center justify-center relative group overflow-hidden">
                  <div className="text-gray-500 text-center transition-all duration-300 group-hover:text-gray-400">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
                      </svg>
                    </div>
                    <span className="text-sm">Screenshot em breve</span>
                  </div>
                  {/* Gradiente overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-aqua-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Botões de ação */}
                <div className="flex space-x-3 mb-6">
                  <button className="flex-1 bg-aqua-green hover:bg-aqua-green-dark text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-aqua-green/20 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                    <span>GitHub</span>
                  </button>
                  <button className="flex-1 bg-purple hover:bg-purple-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple/20 flex items-center justify-center space-x-2">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
