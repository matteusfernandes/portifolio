export interface Project {
  id: number;
  name: string;
  tech: string;
  description: string;
  skills: string[];
  detailedDescription: string;
  longDescription: string;
  category: string;
  developedSkills: string[];
  image: string; // Imagem principal (mantido para compatibilidade)
  images?: {
    main?: string;
    mobile?: string;
    features?: string;
    dashboard?: string;
  };
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'App Delivery',
    tech: '_next.js & mongodb',
    description: '/Sistema completo de delivery modernizado com Next.js 15 e MongoDB',
    skills: ['Next.js 15', 'TypeScript', 'MongoDB', 'Prisma ORM', 'NextAuth.js', 'Tailwind CSS', 'Radix UI'],
    detailedDescription: 'Aplicação completa de delivery de bebidas modernizada do React+MySQL para Next.js 15+MongoDB, com sistema de autenticação multi-role, carrinho inteligente, dashboard administrativo e processo de checkout otimizado.',
    longDescription: 'Sistema full-stack para delivery completamente modernizado de uma aplicação legacy React/Express/MySQL para Next.js 15 com App Router, MongoDB Atlas e TypeScript. Inclui autenticação segura com NextAuth.js, sistema de carrinho com Context API, dashboards específicos por role (Cliente/Vendedor/Administrador), processo de checkout com seleção de vendedor, e interface moderna com gradientes e animações. Arquitetura Clean Code com API Routes, Prisma ORM e validação robusta.',
    category: 'Full-Stack Application',
    developedSkills: [
      'Migrar aplicações legacy para Next.js 15 moderno',
      'Implementar App Router com TypeScript completo',
      'Integrar MongoDB Atlas com Prisma ORM',
      'Criar sistema de autenticação multi-role com NextAuth.js',
      'Desenvolver Context API para carrinho de compras',
      'Construir dashboards administrativos com métricas',
      'Implementar API Routes com validação server-side',
      'Criar interfaces responsivas com Tailwind CSS + Radix UI'
    ],
    image: '/images/projects/app-delivery/desktop-main.png',
    images: {
      main: '/images/projects/app-delivery/desktop-main.png',
      mobile: '/images/projects/app-delivery/mobile-view.png',
      features: '/images/projects/app-delivery/features-demo.png',
      dashboard: '/images/projects/app-delivery/dashboard.png'
    },
    githubUrl: 'https://github.com/matteusfernandes/app-delivery',
    demoUrl: 'https://app-delivery-demo.vercel.app'
  },
  {
    id: 2,
    name: 'Trybe Wallet',
    tech: '_next.js & zustand',
    description: '/Carteira financeira modernizada com conversor de moedas e relatórios',
    skills: ['Next.js 15', 'TypeScript', 'Zustand', 'Tailwind CSS', 'API Integration', 'React Query', 'Chart.js'],
    detailedDescription: 'Aplicação financeira completa refatorada de Redux para Zustand com Next.js, incluindo conversor de moedas em tempo real, categorização inteligente de despesas e dashboard com gráficos interativos.',
    longDescription: 'Sistema de controle financeiro modernizado de React/Redux para Next.js 15 com Zustand para gerenciamento de estado. Permite controle completo de gastos com conversão automática de moedas via API, categorização avançada de despesas, geração de relatórios detalhados e dashboard com métricas visuais. Interface totalmente responsiva com gráficos interativos e exportação de dados. Migração completa mantendo todas as funcionalidades com performance superior.',
    category: 'Frontend Application',
    developedSkills: [
      'Refatorar aplicações React/Redux para Next.js + Zustand',
      'Implementar gerenciamento de estado moderno com Zustand',
      'Integrar APIs externas de cotação em tempo real',
      'Criar dashboards financeiros com visualizações de dados',
      'Desenvolver sistema de categorização automática',
      'Implementar relatórios dinâmicos com exportação',
      'Otimizar performance com React Query e cache inteligente',
      'Construir interfaces financeiras responsivas'
    ],
    image: '/images/projects/trybe-wallet/desktop-main.png',
    images: {
      main: '/images/projects/trybe-wallet/desktop-main.png',
      mobile: '/images/projects/trybe-wallet/mobile-view.png',
      features: '/images/projects/trybe-wallet/features-demo.png',
      dashboard: '/images/projects/trybe-wallet/dashboard.png'
    },
    githubUrl: 'https://github.com/matteusfernandes/trybe-wallet',
    demoUrl: 'https://trybe-wallet-modern.vercel.app'
  },
  {
    id: 3,
    name: 'Library App',
    tech: '_next.js & mysql',
    description: '/Sistema completo de biblioteca com API RESTful e interface moderna',
    skills: ['Next.js 15', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'TDD'],
    detailedDescription: 'Sistema full-stack para gerenciamento de biblioteca desenvolvido como desafio técnico, com API REST robusta, interface Next.js moderna, containerização Docker e cobertura completa de testes.',
    longDescription: 'Aplicação completa de gerenciamento de biblioteca desenvolvida para processo seletivo, featuring CRUD completo de livros, API RESTful em Node.js/Express, frontend migrado para Next.js 15 com TypeScript, banco MySQL com Sequelize ORM. Inclui sistema de validação client/server-side, interface responsiva com Tailwind CSS, containerização completa com Docker Compose, e cobertura de testes com TDD. Arquitetura escalável com middlewares personalizados e documentação técnica completa.',
    category: 'Full-Stack Application',
    developedSkills: [
      'Desenvolver API RESTful completa com Node.js + Express',
      'Implementar arquitetura MVC com Sequelize ORM',
      'Migrar frontend de React para Next.js 15 + TypeScript',
      'Criar sistema de validação robusta client/server-side',
      'Configurar containerização completa com Docker Compose',
      'Aplicar metodologia TDD com cobertura completa de testes',
      'Implementar middlewares personalizados e tratamento de erros',
      'Construir interfaces modernas com Tailwind CSS'
    ],
    image: '/images/projects/library-app/desktop-main.png',
    images: {
      main: '/images/projects/library-app/desktop-main.png',
      mobile: '/images/projects/library-app/mobile-view.png',
      features: '/images/projects/library-app/features-demo.png',
      dashboard: '/images/projects/library-app/dashboard.png'
    },
    githubUrl: 'https://github.com/matteusfernandes/library-app',
    demoUrl: 'https://library-app-demo.vercel.app'
  },
  {
    id: 4,
    name: 'Recipe App',
    tech: '_react hooks & context api',
    description: '/App de receitas com favoritos, filtros e acompanhamento',
    skills: ['React', 'Context API', 'React Hooks', 'JavaScript', 'CSS3', 'API Integration', 'LocalStorage'],
    detailedDescription: 'Aplicação de receitas desenvolvida em equipe com metodologias ágeis, consumindo múltiplas APIs externas com sistema completo de favoritos, filtros dinâmicos e acompanhamento de progresso de receitas.',
    longDescription: 'Aplicação mobile-first para receitas e drinks desenvolvida em equipe utilizando Scrum e metodologias ágeis. Consume APIs externas de receitas (TheMealDB e TheCocktailDB), implementa sistema de favoritos persistente, filtros por categoria/área/ingrediente, e acompanhamento detalhado do progresso de preparação. Gerenciamento de estado global com Context API e hooks customizados, navegação SPA com React Router, e interface responsiva otimizada para mobile.',
    category: 'Frontend Application',
    developedSkills: [
      'Trabalhar em equipe com metodologias ágeis (Scrum)',
      'Implementar gerenciamento de estado com Context API',
      'Consumir e integrar múltiplas APIs externas',
      'Criar sistema de filtros dinâmicos e busca',
      'Desenvolver funcionalidades de favoritos com persistência',
      'Implementar navegação SPA com React Router',
      'Construir interfaces mobile-first responsivas',
      'Aplicar hooks customizados para lógica reutilizável'
    ],
    image: '/window.svg',
    githubUrl: 'https://github.com/matteusfernandes/recipe-app',
    demoUrl: 'https://recipe-app-demo.vercel.app'
  },
  {
    id: 5,
    name: 'Tryunfo',
    tech: '_react & class components',
    description: '/Jogo de cartas estilo Super Trunfo com validações',
    skills: ['React', 'Class Components', 'JavaScript', 'CSS3', 'PropTypes', 'Form Validation'],
    detailedDescription: 'Jogo de cartas no estilo Super Trunfo desenvolvido com React Class Components, incluindo sistema de criação, listagem, filtros e jogabilidade completa com validações robustas.',
    longDescription: 'Aplicação que simula o clássico jogo Super Trunfo, permitindo criar cartas personalizadas com diferentes atributos, listar e filtrar cartas existentes, e jogar partidas completas. Desenvolvido com React Class Components seguindo boas práticas, implementa validações de formulário, PropTypes para type checking, sistema de filtros em tempo real, e lógica de jogo funcional. Interface intuitiva com feedback visual e tratamento completo de estados de componente.',
    category: 'Frontend Application',
    developedSkills: [
      'Dominar React Class Components e lifecycle methods',
      'Implementar gerenciamento de estado em componentes',
      'Criar e gerenciar eventos de formulários complexos',
      'Aplicar validação robusta client-side',
      'Utilizar PropTypes para type checking',
      'Desenvolver lógica de jogo e interatividade',
      'Implementar sistemas de filtros em tempo real',
      'Construir interfaces com feedback visual'
    ],
    image: '/window.svg',
    githubUrl: 'https://github.com/matteusfernandes/tryunfo',
    demoUrl: 'https://tryunfo-game.vercel.app'
  },
  {
    id: 6,
    name: 'Star Wars Planets',
    tech: '_react hooks & context api',
    description: '/Explorador de planetas Star Wars com filtros avançados',
    skills: ['React', 'React Hooks', 'Context API', 'JavaScript', 'CSS3', 'API REST', 'Async/Await'],
    detailedDescription: 'Aplicação que consome a SWAPI (Star Wars API) para listar e filtrar planetas do universo Star Wars, com sistema de filtros múltiplos, ordenação dinâmica e interface temática.',
    longDescription: 'Explorador interativo dos planetas do universo Star Wars que consome a SWAPI para exibir informações detalhadas como população, período orbital, diâmetro e clima. Implementa sistema de filtros múltiplos e combinados (por nome, população, período orbital), ordenação ascendente/descendente, e interface temática com design inspirado no universo Star Wars. Utiliza Context API para gerenciamento de estado global e hooks customizados para lógica de filtros complexos.',
    category: 'Frontend Application',
    developedSkills: [
      'Masterizar React Hooks (useState, useEffect, useContext)',
      'Implementar Context API para estado complexo',
      'Consumir APIs REST com async/await',
      'Criar sistemas de filtros múltiplos e combinados',
      'Desenvolver hooks customizados reutilizáveis',
      'Implementar ordenação dinâmica de dados',
      'Construir interfaces temáticas com CSS avançado',
      'Gerenciar loading states e tratamento de erros'
    ],
    image: '/window.svg',
    githubUrl: 'https://github.com/matteusfernandes/starwars-planets',
    demoUrl: 'https://starwars-planets-filter.vercel.app'
  },
  {
    id: 7,
    name: 'Store Manager',
    tech: '_node.js & mysql',
    description: '/API RESTful para e-commerce com arquitetura MSC',
    skills: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'RESTful API', 'MSC Architecture', 'Validation'],
    detailedDescription: 'API RESTful robusta para sistema de gerenciamento de vendas em formato dropshipping, construída com arquitetura MSC (Model-Service-Controller) e validações completas.',
    longDescription: 'Sistema backend completo para e-commerce desenvolvido com Node.js e Express, implementando arquitetura MSC (Model-Service-Controller) bem estruturada. Gerencia produtos e vendas com CRUD completo, validações de dados robustas, middlewares customizados para tratamento de erros, e integração com MySQL. Inclui sistema de relacionamentos entre tabelas, validação de estoque, cálculo automático de totais, e API documentation. Código limpo seguindo princípios SOLID e padrões de mercado.',
    category: 'Backend API',
    developedSkills: [
      'Construir APIs RESTful seguindo padrões de mercado',
      'Implementar arquitetura MSC (Model-Service-Controller)',
      'Desenvolver middlewares customizados e tratamento de erros',
      'Integrar Node.js com banco de dados MySQL',
      'Criar validações robustas de dados e regras de negócio',
      'Aplicar princípios SOLID em código backend',
      'Implementar relacionamentos complexos entre entidades',
      'Desenvolver testes unitários para APIs'
    ],
    image: '/window.svg',
    githubUrl: 'https://github.com/matteusfernandes/store-manager',
    demoUrl: 'https://store-manager-api.vercel.app'
  },
  {
    id: 8,
    name: 'Talker Manager',
    tech: '_node.js & express',
    description: '/API para gerenciamento de palestrantes com autenticação',
    skills: ['Node.js', 'Express', 'File System', 'JavaScript', 'JWT', 'Middleware', 'JSON Manipulation'],
    detailedDescription: 'API RESTful para cadastro e gerenciamento de palestrantes com sistema de autenticação via token, validações customizadas e persistência em arquivo JSON.',
    longDescription: 'Sistema backend para gerenciamento de palestrantes (talkers) desenvolvido com Node.js e Express. Implementa CRUD completo com persistência em arquivo JSON, sistema de autenticação com JWT tokens, middlewares de validação customizados, e endpoints para busca e filtros. Inclui validações robustas de dados (email, idade, rating), tratamento de erros personalizado, e manipulação de sistema de arquivos de forma eficiente. Arquitetura modular com separação de responsabilidades.',
    category: 'Backend API',
    developedSkills: [
      'Desenvolver APIs RESTful com Node.js + Express',
      'Implementar sistema de autenticação com JWT',
      'Criar middlewares de validação personalizados',
      'Manipular sistema de arquivos (File System) eficientemente',
      'Desenvolver endpoints com busca e filtros avançados',
      'Implementar tratamento de erros robusto',
      'Trabalhar com persistência de dados em JSON',
      'Aplicar validações de dados complexas'
    ],
    image: '/window.svg',
    githubUrl: 'https://github.com/matteusfernandes/talker-manager',
    demoUrl: 'https://talker-manager-api.vercel.app'
  },
  {
    id: 9,
    name: 'Docker To-Do List',
    tech: '_next.js & docker',
    description: '/Lista de tarefas containerizada com Docker e CI/CD',
    skills: ['Next.js 15', 'TypeScript', 'Docker', 'Docker Compose', 'CI/CD', 'Tailwind CSS', 'Local Storage'],
    detailedDescription: 'Aplicação de lista de tarefas totalmente containerizada com Docker, incluindo ambiente de desenvolvimento e produção, pipeline de CI/CD e deploy automatizado.',
    longDescription: 'Sistema completo de gerenciamento de tarefas desenvolvido com foco em DevOps e containerização. Utiliza Next.js 15 com TypeScript para o frontend, totalmente containerizado com Docker e Docker Compose para ambientes de desenvolvimento e produção. Inclui pipeline completo de CI/CD, deploy automatizado, ambiente multi-stage, e configuração de produção otimizada. Interface moderna com Tailwind CSS, funcionalidades completas de CRUD, persistência de dados e documentação técnica detalhada.',
    category: 'DevOps Application',
    developedSkills: [
      'Containerizar aplicações com Docker e Docker Compose',
      'Configurar ambientes multi-stage (dev/prod)',
      'Implementar pipeline de CI/CD completo',
      'Automatizar deploy e versionamento',
      'Configurar Docker networks e volumes',
      'Otimizar builds e performance de containers',
      'Implementar monitoramento e logging',
      'Criar documentação DevOps completa'
    ],
    image: '/images/projects/todo-list/desktop-main.png',
    images: {
      main: '/images/projects/todo-list/desktop-main.png'
    },
    githubUrl: 'https://github.com/matteusfernandes/docker-todo-list',
    demoUrl: 'https://docker-todo-list.vercel.app'
  },
];
