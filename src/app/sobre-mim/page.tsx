'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedElement } from '@/components/AnimatedElement';
import { useState } from 'react';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

// Componente para bloco de comentário VSCode
interface CodeCommentBlockProps {
  content: string;
  startLine?: number;
}

const CodeCommentBlock: React.FC<CodeCommentBlockProps> = ({ content, startLine = 1 }) => {
  const wrapText = (text: string, maxLength: number = 60): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          lines.push(word);
        }
      }
    });
    
    if (currentLine) {
      lines.push(currentLine);
    }
    
    return lines;
  };

  const paragraphs = content.split('\n\n').filter(p => p.trim());
  const allLines: string[] = ['/**'];
  
  paragraphs.forEach((paragraph, paragraphIndex) => {
    const wrappedLines = wrapText(paragraph.trim());
    wrappedLines.forEach(line => {
      allLines.push(` * ${line}`);
    });
    
    // Adiciona linha em branco entre parágrafos (exceto no último)
    if (paragraphIndex < paragraphs.length - 1) {
      allLines.push(' *');
    }
  });
  
  allLines.push(' */');
  
  return (
    <div className="text-gray-500 text-sm font-mono flex">
      {/* Numeração das linhas */}
      <div className="text-gray-600 text-right pr-4 select-none">
        {allLines.map((_, index) => (
          <div key={index}>{startLine + index}</div>
        ))}
      </div>
      {/* Conteúdo do comentário */}
      <div className="flex-1">
        {allLines.map((line, index) => (
          <div key={index}>
            <span className="text-gray-500">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SobreMim() {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [openTabs, setOpenTabs] = useState<FileItem[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Estrutura de arquivos funcional
  const fileStructure: FileItem[] = [
    {
      id: 'pessoal',
      name: '_bio',
      type: 'folder',
      children: [
        {
          id: 'bio',
          name: 'bio.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Sobre mim" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Desenvolvedor Full Stack apaixonado por tecnologia" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Informações Pessoais`}</h3>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>👋 Olá! Sou Matteus Fernandes</p>
                    <p>🎂 Idade: 34 anos</p>
                    <p>📍 Localização: Guanambi - Bahia - Brasil</p>
                    <p>💼 Função: Desenvolvedor Full Stack</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Sobre`}</h3>
                  <CodeCommentBlock 
                    content={`Como Desenvolvedor Fullstack, busco constantemente desenvolver minha carreira sob a supervisão e o estímulo de empresas comprometidas com a inovação. Minha formação em desenvolvimento web Full Stack pela Trybe (2021-2022) me capacitou com habilidades sólidas em front-end, incluindo HTML, CSS, Javascript e React, e back-end, dominando Node.js, Express, Python, MongoDB e SQL.\n
                    Ao longo da minha experiência profissional como autônomo, fui responsável pelo desenvolvimento e manutenção de projetos cruciais. Por exemplo, no "Shaping The Future - Albert Sabin", implementei soluções tecnológicas personalizadas focadas na organização de projetos escolares, otimizando funcionalidades e garantindo uma experiência eficiente para os usuários por três anos consecutivos\n
                    Minhas experiências anteriores em liderança, como Presidente do Rotaract Club de Guanambi e Presidente da OAB Jovem (OAB-Guanambi), me proporcionaram noções valiosas de liderança e trabalho em equipe, que busco aprimorar continuamente. Estou pronto para aplicar minha formação no desenvolvimento de soluções críticas e contribuir para equipes inovadoras.`}
                    startLine={1}
                  />
                </div>
              </div>
            </AnimatedElement>
          )
        }
      ]
    },
    {
      id: '_experiencia',
      name: '_experiência',
      type: 'folder',
      children: [
        {
          id: 'trabalhos',
          name: 'trabalhos.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Experiência Profissional" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Minha jornada profissional e projetos desenvolvidos" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Experiência Atual`}</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Front End</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 2024 - Presente</p>
                      <p className="text-gray-300">Desenvolvi e mantenho o site Bemtevi, entregando soluções personalizadas em design e funcionalidade.<br />Utilizei WordPress como CMS, implementando temas e plugins customizados, além de desenvolver em PHP para atender às necessidades específicas do cliente, com foco na experiência do usuário e na eficiência técnica.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-purple text-xs px-2 py-1 rounded">WordPress</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">HTML</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">CSS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">PHP</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-300 text-sm space-y-2 mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Full Stack Freelancer</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 2022 - Presente</p>
                      <p className="text-gray-300">Atuo como desenvolvedor freelancer, com experiência no desenvolvimento e manutenção de plataformas web completas.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Outras Experiências`}</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Full Stack</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 09/2024</p>
                      <p className="text-gray-300">Foquei na manutenção contínua da plataforma Shaping Sabin, garantindo seu bom funcionamento, corrigindo eventuais falhas e implementando melhorias para otimizar ainda mais a experiência dos usuários e a eficiência na organização de projetos escolares.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-purple text-xs px-2 py-1 rounded">NextJS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">NodeJS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">MySql</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">Sequelize</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-gray-300 text-sm space-y-2 mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Full Stack</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 09/2023</p>
                      <p className="text-gray-300">Atuei na atualização da plataforma Shaping Sabin, implementando novas funcionalidades para aprimorar a experiência dos usuários e otimizar a organização de projetos escolares. Realizei a conversão do front-end de React para Next.js e executei a reestruturação do banco de dados para melhor performance e escalabilidade.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-purple text-xs px-2 py-1 rounded">NextJS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">NodeJS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">MySql</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">Sequelize</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-300 text-sm space-y-2 mt-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Full Stack</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 09/2022</p>
                      <p className="text-gray-300">Fui responsável pelo desenvolvimento da plataforma Shaping Sabin, abrangendo tanto o front-end quanto o back-end, implementando sua estrutura e funcionalidades essenciais para a organização de projetos escolares, e realizando o deploy da aplicação.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-purple text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">NodeJS</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">MySql</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">Sequelize</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        },
        {
          id: 'habilidades',
          name: 'habilidades.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Habilidades Técnicas" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Tecnologias e ferramentas que domino" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Frontend`}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800 p-3 rounded">
                      <h4 className="text-aqua-green font-semibold mb-2">React/Next.js</h4>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded">
                      <h4 className="text-aqua-green font-semibold mb-2">TypeScript</h4>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Backend`}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800 p-3 rounded">
                      <h4 className="text-aqua-green font-semibold mb-2">Node.js</h4>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded">
                      <h4 className="text-aqua-green font-semibold mb-2">Python</h4>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        },
        {
          id: 'certificacoes',
          name: 'certificacoes.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Certificações" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Cursos e certificações obtidas" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Cursos Concluídos`}</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>🎓 <strong>JavaScript ES6+</strong> - Certificação Udemy</p>
                    <p>⚛️ <strong>React.js Avançado</strong> - Rocketseat</p>
                    <p>🚀 <strong>Node.js & Express</strong> - Cod3r</p>
                    <p>💾 <strong>Banco de Dados MySQL</strong> - Curso em Vídeo</p>
                    <p>🎨 <strong>UI/UX Design</strong> - Figma Academy</p>
                    <p>🔧 <strong>Git & GitHub</strong> - Digital Innovation One</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Em Andamento`}</h3>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>📚 Engenharia de Software - Unicesumar</p>
                    <p>🔄 DevOps com Docker e Kubernetes</p>
                    <p>☁️ AWS Cloud Practitioner</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        }
      ]
    },
    {
      id: 'educação',
      name: '_educação',
      type: 'folder',
      children: [
        {
          id: 'portfolio',
          name: 'portfolio.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Meus Projetos" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Principais projetos desenvolvidos" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Projetos Destacados`}</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Sistema de Gerenciamento</h4>
                      <p className="text-gray-300">Aplicação completa para gestão de processos empresariais com dashboard interativo.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-blue text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">Node.js</span>
                        <span className="bg-yellow text-xs px-2 py-1 rounded">MySQL</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">E-commerce Platform</h4>
                      <p className="text-gray-300">Plataforma de e-commerce com carrinho, pagamentos e painel administrativo.</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="bg-blue text-xs px-2 py-1 rounded">Next.js</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">Express</span>
                        <span className="bg-purple text-xs px-2 py-1 rounded">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        },
        {
          id: 'github',
          name: 'github.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="GitHub & Repositórios" speed={100} />
                  </h1>
                </div>
                <div className="text-gray-300">
                  <p className="mb-4">🔗 <strong>GitHub:</strong> <a href="https://github.com/matteusfernandes" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">github.com/matteusfernandes</a></p>
                  <p className="mb-2">📂 <strong>Repositórios principais:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Portfolio pessoal (Next.js + TypeScript)</li>
                    <li>Sistema de gerenciamento empresarial</li>
                    <li>API REST com Node.js e Express</li>
                    <li>Aplicações React com hooks customizados</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          )
        }
      ]
    },
    {
      id: 'voluntario',
      name: '_voluntário',
      type: 'folder',
      children: [

      ]
    },
    {
      id: 'interesses',
      name: '_interesses',
      type: 'folder',
      children: [
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const openFile = (file: FileItem) => {
    // Verificar se a aba já está aberta
    if (!openTabs.find(tab => tab.id === file.id)) {
      setOpenTabs(prev => [...prev, file]);
    }
    setActiveTab(file.id);
  };

  const closeTab = (fileId: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    
    setOpenTabs(prev => {
      const newTabs = prev.filter(tab => tab.id !== fileId);
      
      // Se a aba fechada era a ativa, definir uma nova aba ativa
      if (activeTab === fileId) {
        if (newTabs.length > 0) {
          setActiveTab(newTabs[newTabs.length - 1].id);
        } else {
          setActiveTab(null);
        }
      }
      
      return newTabs;
    });
  };

  const getCurrentTabContent = () => {
    const currentTab = openTabs.find(tab => tab.id === activeTab);
    return currentTab?.content || null;
  };

  // Mapeamento de cores para as pastas
  const getFolderColor = (folderName: string) => {
    const folderColors: { [key: string]: string } = {
      '_bio': '#E96377',
      '_experiência': '#F4B460', 
      '_educação': '#554EED',
      '_voluntário': '#ED4E51',
      '_interesses': '#4AC1AF',
    };

    const baseColor = folderColors[folderName];
    
    if (baseColor) {
      return baseColor; // Sempre retorna a cor da pasta, aberta ou fechada
    }
    
    // Cor padrão para outras pastas
    return '#9CA3AF'; // text-light-gray equivalente
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map(item => (
      <div key={item.id} style={{ marginLeft: `${level * 20}px` }}>
        {item.type === 'folder' ? (
          <div>
            <div 
              className="flex items-center cursor-pointer hover:bg-gray-700 rounded px-1 py-1"
              onClick={() => toggleFolder(item.id)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill={getFolderColor(item.name)}
                className="w-5 h-5 mr-2"
              >
                <path d={expandedFolders.includes(item.id) 
                  ? "M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V8ZM10 4V9H5V20H19V4H10Z"
                  : "M22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7H21C21.5523 7 22 7.44772 22 8ZM12.4142 5H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"
                }></path>
              </svg>
              <span 
                className={`capitalize ${expandedFolders.includes(item.id) ? 'text-white' : 'text-light-gray'}`}
              >
                {item.name}
              </span>
            </div>
            {expandedFolders.includes(item.id) && item.children && (
              <div className="ml-4">
                {renderFileTree(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <div 
            className="flex items-center cursor-pointer hover:bg-gray-700 rounded px-1 py-1"
            onClick={() => openFile(item)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="rgba(255,255,255,1)"
              className="w-4 h-4 mr-2"
            >
              <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255ZM4.99255 17.9841C4.44027 17.9841 3.99255 18.4318 3.99255 18.9841C3.99255 19.5364 4.44027 19.9841 4.99255 19.9841H14.9926C15.5448 19.9841 15.9926 19.5364 15.9926 18.9841C15.9926 18.4318 15.5448 17.9841 14.9926 17.9841H4.99255ZM4.99255 7.98407C4.44027 7.98407 3.99255 8.43179 3.99255 8.98407C3.99255 9.53636 4.44027 9.98407 4.99255 9.98407H18.9926C19.5448 9.98407 19.9926 9.53636 19.9926 8.98407C19.9926 8.43179 19.5448 7.98407 18.9926 7.98407H4.99255ZM4.99255 2.98407C4.44027 2.98407 3.99255 3.43179 3.99255 3.98407C3.99255 4.53636 4.44027 4.98407 4.99255 4.98407H18.9926C19.5448 4.98407 19.9926 4.53636 19.9926 3.98407C19.9926 3.43179 19.5448 2.98407 18.9926 2.98407H4.99255Z"></path>
            </svg>
            <span className={`${activeTab === item.id ? 'text-aqua-green' : 'text-light-gray'}`}>{item.name}</span>
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      {/* Tab bar - sempre visível como no layout original */}
      <div className="w-full border-b border-gray-600 bg-gradient-main flex" style={{ height: '60px' }}>
        <div className="border-r border-gray-600 flex items-center justify-center" style={{ width: '250px' }}>
          <span className="text-light-gray text-sm">info-pessoal</span>
        </div>
        <div className="flex-1 flex items-center h-full">
          {openTabs.length > 0 && (
            openTabs.map((tab) => (
              <div
                key={tab.id}
                className={`border-r border-gray-600 px-4 py-2 cursor-pointer hover:bg-gray-700 flex items-center text-sm ${
                  activeTab === tab.id 
                    ? 'bg-dark-gray text-white' 
                    : 'bg-gradient-main text-light-gray'
                }`}
                style={{ minWidth: '120px' }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name.replace('.txt', '')}
                <span 
                  className="ml-auto text-light-gray hover:text-white cursor-pointer text-lg"
                  onClick={(e) => closeTab(tab.id, e)}
                >
                  ×
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <main className="flex-1 w-full h-full">
        <div className="flex h-full min-h-screen">
          {/* Sidebar - Explorador de arquivos */}
          <div className="border-r border-gray-600" style={{ width: '250px' }}>
            <div className="p-4 mb-4">
              {/* File Tree */}
              <div className="space-y-2">
                {renderFileTree(fileStructure)}
              </div>
            </div>
            
            {/* Seção de Contato */}
            <div className="border-t border-gray-600 border-b border-gray-600">
              <div className="flex items-center justify-center py-4">
                <span className="text-light-gray text-sm">_contato</span>
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
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                  <span className="text-light-gray text-sm font-mono">(77) 99109-9699</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo principal - 60% da largura restante */}
          <div className="flex-[3] px-6 py-4 overflow-auto">
            {getCurrentTabContent() || (
              <AnimatedElement delay={0.1} animation="fade-in-up">
                <div className="max-w-4xl">
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">
                      <TypewriterText text="Sobre mim" speed={100} />
                    </h1>
                    <div className="text-light-gray">
                      <TypewriterText 
                        text="// Clique nos arquivos para explorar meu conteúdo" 
                        speed={50} 
                        delay={1000}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-light-gray text-sm mb-3">{`//Como navegar`}</h3>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>� Clique nas pastas para expandir/recolher</p>
                      <p>📄 Clique nos arquivos para abrir em abas</p>
                      <p>❌ Use o × para fechar abas individuais</p>
                      <p>� Alterne entre abas clicando nelas</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-light-gray text-sm mb-3">{`//Estrutura dos arquivos`}</h3>
                    <div className="text-gray-300 text-sm">
                      <p>� <strong>pessoal/</strong> - Informações pessoais e biografia</p>
                      <p>⭐ <strong>_experiência/</strong> - Experiência profissional e habilidades</p>
                      <p>📁 <strong>projetos/</strong> - Portfolio de projetos desenvolvidos</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            )}
          </div>

          {/* Gap no meio */}
          <div className="w-6 border-r border-gray-600 relative border-l border-gray-600 relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Sidebar direita - 40% da largura restante */}
          <div className="flex-[2] px-6 py-4 overflow-auto">
            <AnimatedElement delay={0.3} animation="slide-in-left">
              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Linguagens`}</h3>
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <div className="text-purple">idiomas: <span className="text-light-gray">{"{"}</span></div>
                    <div className="ml-4">
                      <span className="text-aqua-green">&quot;português&quot;</span><span className="text-light-gray">:</span> <span className="text-yellow">&quot;nativo&quot;</span><span className="text-light-gray">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-aqua-green">&quot;inglês&quot;</span><span className="text-light-gray">:</span> <span className="text-yellow">&quot;intermediário&quot;</span>
                    </div>
                    <div className="text-light-gray">{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Linguagens de Programação`}</h3>
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <div className="text-purple">stacks: <span className="text-light-gray">[</span></div>
                    <div className="ml-4 space-y-1">
                      <div><span className="text-aqua-green">&quot;Javascript&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Typescript&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;React&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Node.js&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Next.js&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Express.js&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Nest.js&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Python&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;MySql&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;Java&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;HTML&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;CSS&quot;</span><span className="text-light-gray">,</span></div>
                      <div><span className="text-aqua-green">&quot;PHP&quot;</span></div>
                    </div>
                    <div className="text-light-gray">]</div>
                  </div>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Redes Sociais`}</h3>
                <div className="flex space-x-2 mb-4">
                  {/* GitHub */}
                  <a href="https://github.com/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 3.00993C5.97895 3.03591 6.94048 3.75993 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="https://instagram.com/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-r rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2386 17.001 12C17.001 14.7614 14.7624 17 12.001 17C9.24058 17 7.00098 14.7614 7.00098 12C7.00098 9.2386 9.23958 7 12.001 7ZM18.501 6.75C18.501 7.44036 17.9414 8 17.251 8C16.5606 8 16.001 7.44036 16.001 6.75C16.001 6.05964 16.5606 5.5 17.251 5.5C17.9414 5.5 18.501 6.05964 18.501 6.75ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9198 20.001 14.5355 20.001 12C20.001 9.52552 19.9944 9.12217 19.9432 7.97117C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19814 16.8124 4.09263 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.27773 18.5511 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.0875 21.8918 6.8125 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1875 21.7226 17.9125 21.476 18.55C21.221 19.2075 20.8776 19.7658 20.3226 20.3217C19.7668 20.8775 19.2101 21.221 18.5511 21.475C17.9135 21.7217 17.1876 21.8908 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81348 21.8908 6.08848 21.7217 5.45098 21.475C4.79348 21.221 4.23514 20.8775 3.67931 20.3217C3.12348 19.7658 2.78014 19.2075 2.52598 18.55C2.27931 17.9125 2.11014 17.1875 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27931 6.0875 2.52598 5.45C2.78014 4.7925 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.77917 5.45098 2.525C6.08848 2.27773 6.81348 2.10917 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  
                  {/* Email */}
                  <a href="mailto:matteus_gbi@hotmail.com" className="w-8 h-8 bg-red rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-600 my-4"></div>

              {/* Ferramentas e Tecnologias */}
                <div>
                  <h3 className="text-light-gray text-sm mb-3">{`//Ferramentas e Tecnologias`}</h3>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-8 h-8 bg-orange rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(227,79,38,1)">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(21,114,182,1)">
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-yellow rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(240,219,79,1)">
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(97,218,251,1)">
                        <path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(0,0,0,1)">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.9999 8H14.6499V12H15.9999V8ZM9.34609 9.70937L15.405 17.5379L16.4591 16.7293L9.68281 8H8V15.9969H9.34609V9.70937Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(71,74,138,1)">
                        <path d="M4.931 9.45962H3.59366L2.86408 13.211H4.05124C4.83891 13.211 5.42541 13.0622 5.81074 12.7661C6.19608 12.4686 6.45533 11.9742 6.58991 11.28C6.72024 10.6142 6.66075 10.1439 6.41425 9.87045C6.16633 9.59703 5.67333 9.45962 4.931 9.45962ZM7.38183 13.6133C7.01208 13.9675 6.56725 14.2338 6.08275 14.3939C5.60675 14.5469 4.999 14.6262 4.26233 14.6262H2.58924L2.126 17.0076H0.173828L1.91633 8.04578H5.67049C6.79958 8.04578 7.62266 8.34187 8.14116 8.93545C8.65966 9.52762 8.81549 10.355 8.60866 11.4175C8.52944 11.8379 8.38357 12.243 8.17658 12.6174C7.97399 12.9786 7.70908 13.3115 7.38183 13.6133ZM13.0825 14.6262L13.8517 10.661C13.941 10.2105 13.907 9.90162 13.7554 9.7387C13.6038 9.57437 13.2794 9.4922 12.7822 9.4922H11.2352L10.2378 14.6276H8.29983L10.0423 5.66437H11.9789L11.5157 8.0472H13.2412C14.3277 8.0472 15.0757 8.23703 15.488 8.61528C15.9002 8.99353 16.0235 9.60695 15.8606 10.4555L15.0502 14.6262H13.0825ZM23.8449 11.4175C23.767 11.8382 23.621 12.2435 23.4128 12.6174C23.2102 12.9786 22.9453 13.3115 22.6181 13.6133C22.2481 13.9664 21.8044 14.233 21.319 14.3939C20.843 14.5469 20.2352 14.6262 19.4972 14.6262H17.8255L17.3622 17.009H15.4101L17.1526 8.0472H20.9053C22.0344 8.0472 22.8575 8.34328 23.376 8.93687C23.8945 9.52762 24.0517 10.355 23.8449 11.4175ZM20.1687 9.45962H18.8327L18.1017 13.211H19.2889C20.078 13.211 20.6645 13.0622 21.0484 12.7661C21.4337 12.4686 21.693 11.9742 21.829 11.28C21.9593 10.6142 21.8984 10.1439 21.6519 9.87045C21.4054 9.59703 20.9096 9.45962 20.1687 9.45962Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gray rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(86,61,124,1)">
                        <path d="M5.42333 3.03818C4.13949 3.03818 3.18953 4.16184 3.23206 5.38047C3.27286 6.55123 3.21985 8.0675 2.83811 9.30405C2.45523 10.5442 1.80769 11.3298 0.75 11.4307V12.5694C1.80769 12.6703 2.45523 13.4559 2.83811 14.696C3.21985 15.9326 3.27286 17.4489 3.23206 18.6196C3.18953 19.8381 4.13949 20.9619 5.42352 20.9619H18.5784C19.8622 20.9619 20.812 19.8382 20.7695 18.6196C20.7287 17.4489 20.7817 15.9326 21.1634 14.696C21.5465 13.4559 22.1923 12.6703 23.25 12.5694V11.4307C22.1923 11.3298 21.5465 10.5442 21.1634 9.30405C20.7817 8.06769 20.7287 6.55123 20.7695 5.38047C20.812 4.16203 19.8622 3.03818 18.5784 3.03818H5.42314H5.42333ZM16.0042 14.0714C16.0042 15.7493 14.7526 16.767 12.6756 16.767H9.13983C9.03869 16.767 8.94169 16.7268 8.87017 16.6553C8.79865 16.5838 8.75847 16.4868 8.75847 16.3856V7.61445C8.75847 7.51331 8.79865 7.41631 8.87017 7.34479C8.94169 7.27327 9.03869 7.23309 9.13983 7.23309H12.6554C14.3873 7.23309 15.5239 8.17123 15.5239 9.61161C15.5239 10.6226 14.7593 11.5277 13.7851 11.6862V11.739C15.1113 11.8845 16.0042 12.8028 16.0042 14.0714ZM12.29 8.44199H10.274V11.2896H11.972C13.2846 11.2896 14.0084 10.761 14.0084 9.81621C14.0084 8.93089 13.386 8.44199 12.29 8.44199ZM10.274 12.4195V15.5577H12.3642C13.7308 15.5577 14.4548 15.0093 14.4548 13.9787C14.4548 12.9479 13.7106 12.4193 12.2763 12.4193L10.274 12.4195Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(6,182,212,1)">
                        <path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
                        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-purple rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
                        <path d="M8.66223 14.4841C8.66223 13.9312 9.11034 13.4829 9.6634 13.4829 10.2163 13.4829 10.6646 13.9312 10.6646 14.4841V16.4812C10.6646 17.0341 10.2165 17.4824 9.6634 17.4824 9.11034 17.4824 8.66223 17.0341 8.66223 16.4812V14.4841ZM15.3367 14.4841C15.3367 13.9312 14.8886 13.4829 14.3355 13.4829 13.7822 13.4829 13.3344 13.9314 13.3344 14.4841V16.4812C13.3344 17.0341 13.7825 17.4824 14.3355 17.4824 14.8886 17.4824 15.3367 17.0341 15.3367 16.4812V14.4841ZM11.9995 4.02765C11.1541 2.80927 9.40138 2.71883 8.0541 2.83958 6.51063 2.99438 5.21093 3.52495 4.48026 4.30434 3.2125 5.68959 3.15351 8.59518 3.76523 10.1949 3.70377 10.4683 3.64517 10.7453 3.60293 11.0385 2.4729 11.3362 1.32031 12.9371 1.32031 14.0819V16.2445C1.32031 16.8449 1.60059 17.3921 2.09466 17.7659 4.9186 19.8644 8.43899 21.49 11.9995 21.49 15.5599 21.49 19.0803 19.8644 21.9043 17.7659 22.3983 17.3921 22.6786 16.8449 22.6786 16.2445V14.0819C22.6786 12.9371 21.5261 11.3362 20.396 11.0385 20.3539 10.7453 20.2953 10.4683 20.2338 10.1949 20.8454 8.59518 20.7864 5.68959 19.5187 4.30434 18.788 3.52495 17.4883 2.99438 15.9449 2.83958 14.5976 2.71883 12.8449 2.80927 11.9995 4.02765ZM18.674 17.4874C17.139 18.3415 14.5891 19.4879 11.9995 19.4879 9.40986 19.4879 6.86 18.3415 5.325 17.4874V11.689C7.80186 12.6484 10.6522 12.1537 11.9975 9.93121H12.0014C13.3468 12.1537 16.1971 12.6484 18.674 11.689V17.4874ZM10.6646 6.82895C10.6646 8.41414 10.1848 10.1401 7.99479 10.1401 5.80474 10.1401 5.38758 9.61574 5.38758 8.14315 5.38758 5.80709 5.7441 4.80738 8.70396 4.80738 10.4143 4.80738 10.6646 5.35636 10.6646 6.82895ZM13.3344 6.82895C13.3344 5.35636 13.5847 4.80738 15.2951 4.80738 18.2548 4.80738 18.6114 5.80709 18.6114 8.14315 18.6114 9.61574 18.1942 10.1401 16.0042 10.1401 13.8141 10.1401 13.3344 8.41414 13.3344 6.82895Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
                        <path d="M23 21.6479H1L12 2.35205L23 21.6479Z"></path>
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-blue rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(33,117,155,1)">
                        <path d="M3.32308 12C3.32308 15.4385 5.32308 18.4 8.21538 19.8077L4.07692 8.46923C3.57998 9.57999 3.3231 10.7831 3.32308 12ZM12 20.6769C13.0077 20.6769 13.9769 20.5 14.8846 20.1846L14.8231 20.0692L12.1538 12.7615L9.55385 20.3231C10.3231 20.5538 11.1462 20.6769 12 20.6769ZM13.1923 7.93077L16.3308 17.2615L17.2 14.3692C17.5692 13.1692 17.8538 12.3077 17.8538 11.5615C17.8538 10.4846 17.4692 9.74615 17.1462 9.17692C16.7 8.45385 16.2923 7.84615 16.2923 7.13846C16.2923 6.33846 16.8923 5.6 17.7538 5.6H17.8615C16.2627 4.13224 14.1704 3.31946 12 3.32308C10.5629 3.32281 9.14834 3.67979 7.88347 4.3619C6.61861 5.04402 5.54315 6.02987 4.75385 7.23077L5.30769 7.24615C6.21538 7.24615 7.61539 7.13077 7.61539 7.13077C8.09231 7.10769 8.14615 7.79231 7.67692 7.84615C7.67692 7.84615 7.20769 7.90769 6.67692 7.93077L9.84615 17.3308L11.7462 11.6385L10.3923 7.93077C10.0891 7.91404 9.78636 7.88838 9.48462 7.85385C9.01538 7.82308 9.06923 7.10769 9.53846 7.13077C9.53846 7.13077 10.9692 7.24615 11.8231 7.24615C12.7308 7.24615 14.1308 7.13077 14.1308 7.13077C14.6 7.10769 14.6615 7.79231 14.1923 7.84615C14.1923 7.84615 13.7231 7.9 13.1923 7.93077ZM16.3615 19.5C17.6742 18.7368 18.7636 17.6424 19.5208 16.3263C20.2781 15.0102 20.6767 13.5184 20.6769 12C20.6769 10.4923 20.2923 9.07692 19.6154 7.83846C19.7529 9.20099 19.5466 10.5762 19.0154 11.8385L16.3615 19.5ZM12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

              {/* Divisor */}
              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Soft Skills`}</h3>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>🎯 Resolução de problemas</p>
                  <p>🤝 Trabalho em equipe</p>
                  <p>📚 Aprendizado contínuo</p>
                  <p>💡 Pensamento crítico</p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Gap após sidebar direita */}
          <div className="w-6 border border-gray-600 relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}