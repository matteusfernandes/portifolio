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
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className={`bg-gray-800/50 border rounded-lg overflow-hidden hover:border-gray-600 transition-colors cursor-pointer ${
                      selectedProject.id === project.id ? 'border-green-500' : 'border-gray-700'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Header */}
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="text-blue-400 text-sm mb-1">{project.name} <span className="text-light-gray">{'//'}</span> <span className="text-light-gray">{project.tech}</span></h3>
                    </div>
                    
                    {/* Project Image/Preview */}
                    <div className="h-48 bg-gray-900/50 flex items-center justify-center border-b border-gray-700">
                      <div className="text-gray-500 text-center">
                        <div className="w-16 h-16 bg-gray-700 rounded mx-auto mb-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
                          </svg>
                        </div>
                        <span className="text-xs">Preview em breve</span>
                      </div>
                    </div>
                    
                    {/* Project Description */}
                    <div className="p-4">
                      <p className="text-light-gray text-sm mb-4">{project.description}</p>
                      <button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded text-sm font-medium transition-colors">
                        View Project
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
                <h2 className="text-green-400 text-xl mb-4">{selectedProject.name}</h2>
                
                {/* Preview do projeto selecionado */}
                <div className="h-48 bg-gray-900/50 border border-gray-700 rounded mb-4 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded mx-auto mb-2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
                      </svg>
                    </div>
                    <span className="text-xs">Preview em breve</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-blue-400 text-sm mb-3">{selectedProject.category}</h3>
                <p className="text-light-gray text-sm mb-4">
                  • {selectedProject.detailedDescription}
                </p>
                <p className="text-light-gray text-sm mb-4">
                  • {selectedProject.longDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-blue-400 text-sm mb-3">Habilidades Desenvolvidas</h3>
                <div className="text-light-gray text-sm space-y-1">
                  {selectedProject.developedSkills.map((skill, index) => (
                    <p key={index}>• {skill}</p>
                  ))}
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
