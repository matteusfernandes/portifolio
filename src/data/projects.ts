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
    tech: '_next.js & typescript',
    description: '/Aplicação full-stack de delivery modernizada',
    skills: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    detailedDescription: 'Aplicação completa de delivery modernizada com as melhores práticas atuais.',
    longDescription: 'Sistema full-stack para delivery com frontend Next.js, backend Node.js, banco MongoDB, sistema de pagamento integrado e notificações em tempo real. Projeto totalmente modernizado com TypeScript.',
    category: 'Projeto Full-Stack - Next.js & TypeScript',
    developedSkills: [
      'Desenvolver aplicações full-stack modernas',
      'Implementar TypeScript em projetos complexos',
      'Integrar banco de dados MongoDB',
      'Criar sistemas de pagamento online',
      'Implementar notificações em tempo real',
      'Configurar CI/CD e deploy automatizado'
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
    description: '/Carteira financeira modernizada com Next.js e Zustand',
    skills: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind CSS', 'API Integration'],
    detailedDescription: 'Carteira de controle de gastos modernizada com conversor de moedas em tempo real.',
    longDescription: 'Aplicação financeira completa refatorada para Next.js 15 com TypeScript e Zustand para gerenciamento de estado. Permite controlar gastos, converter moedas, categorizar despesas e gerar relatórios detalhados. Interface moderna e responsiva com gráficos interativos.',
    category: 'Projeto Full-Stack - Next.js & TypeScript',
    developedSkills: [
      'Refatorar aplicações React para Next.js',
      'Implementar Zustand para gerenciamento de estado',
      'Integrar APIs de cotação em tempo real',
      'Criar dashboards com gráficos interativos',
      'Desenvolver sistema de categorização',
      'Implementar exportação de relatórios'
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
    tech: '_next.js & prisma',
    description: '/API RESTful para livraria com frontend moderno',
    skills: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    detailedDescription: 'Sistema completo de gerenciamento de biblioteca com API RESTful e interface moderna.',
    longDescription: 'Aplicação full-stack desenvolvida para processo seletivo, featuring sistema completo de CRUD para livros, autores e empréstimos. Backend Node.js robusto com frontend Next.js moderno, autenticação JWT, dashboard administrativo e relatórios em tempo real.',
    category: 'Projeto Full-Stack - Next.js & TypeScript',
    developedSkills: [
      'Desenvolver API RESTful robusta',
      'Implementar autenticação JWT',
      'Criar dashboard administrativo',
      'Integrar frontend com backend',
      'Implementar sistema de relatórios',
      'Configurar banco PostgreSQL com Prisma'
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
    image: '/window.svg',
  },
  {
    id: 5,
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
    image: '/window.svg',
  },
  {
    id: 6,
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
    image: '/window.svg',
  },
  {
    id: 7,
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
    image: '/window.svg',
  },
  {
    id: 8,
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
    image: '/window.svg',
  },
  {
    id: 9,
    name: 'Ebytr To-Do List',
    tech: '_next.js & typescript',
    description: '/Lista de tarefas modernizada para processo seletivo',
    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'React Hooks'],
    detailedDescription: 'Aplicação de lista de tarefas modernizada com interface limpa e responsiva.',
    longDescription: 'Sistema completo de gerenciamento de tarefas desenvolvido para processo seletivo da Ebytr. Permite criar, editar, excluir e organizar tarefas com status de conclusão. Interface moderna e responsiva com persistência de dados local. Migrado para Next.js com TypeScript para melhor experiência do usuário.',
    category: 'Projeto Full-Stack - Next.js & TypeScript',
    developedSkills: [
      'Modernizar aplicações JavaScript para TypeScript',
      'Implementar interfaces responsivas modernas',
      'Gerenciar estado local com React Hooks',
      'Criar sistemas de CRUD intuitivos',
      'Desenvolver aplicações para processos seletivos',
      'Implementar persistência de dados no navegador'
    ],
    image: '/images/projects/todo-list/desktop-main.png',
    images: {
      main: '/images/projects/todo-list/desktop-main.png'
    },
    githubUrl: 'https://github.com/matteusfernandes/ebytr-todo-list',
    demoUrl: 'https://ebytr-todo-list.vercel.app'
  },
];
