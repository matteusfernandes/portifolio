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
  image: string;
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
    image: '/placeholder-project.png',
    githubUrl: 'https://github.com/matteusfernandes/app-delivery',
    demoUrl: 'https://app-delivery-demo.vercel.app'
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
