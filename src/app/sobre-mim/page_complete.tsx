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
  children?: FileItem[];
  content?: React.ReactNode;
}

export default function SobreMim() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['pessoal']));
  const [activeTab, setActiveTab] = useState<string | null>('bio');

  // Estrutura de arquivos completa restaurada
  const fileStructure: FileItem[] = [
    {
      id: 'pessoal',
      name: 'pessoal',
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
                    <p>🎂 Idade: 20 anos</p>
                    <p>📍 Localização: Brasil</p>
                    <p>💼 Função: Desenvolvedor Full Stack</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Educação`}</h3>
                  <div className="text-gray-300 text-sm">
                    <p>📚 Cursando Engenharia de Software - Unicesumar</p>
                    <p>🎓 Formação técnica em Informática</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        },
        {
          id: 'experiencia-file',
          name: 'experiencia.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Experiência Profissional" speed={100} />
                  </h1>
                </div>
                <p className="text-gray-300">Conteúdo sobre experiência profissional...</p>
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
                      <h4 className="text-white font-semibold mb-2">Desenvolvedor Full Stack</h4>
                      <p className="text-light-gray text-xs mb-1">Freelancer • 2023 - Presente</p>
                      <p className="text-gray-300">Desenvolvimento de aplicações web completas usando React, Next.js, Node.js e bancos de dados relacionais.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Projetos Destacados`}</h3>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Sistema de Gerenciamento</h4>
                      <p className="text-gray-300">Aplicação completa para gestão de processos empresariais com dashboard interativo.</p>
                      <ul className="mt-2 text-xs text-light-gray">
                        <li>• Frontend: React + TypeScript</li>
                        <li>• Backend: Node.js + Express</li>
                        <li>• Banco: PostgreSQL</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">E-commerce Platform</h4>
                      <p className="text-gray-300">Plataforma de e-commerce com sistema de pagamentos integrado.</p>
                      <ul className="mt-2 text-xs text-light-gray">
                        <li>• Next.js + Tailwind CSS</li>
                        <li>• API RESTful</li>
                        <li>• Integração com gateways de pagamento</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-light-gray text-sm mb-3">{`//Tecnologias que domino`}</h3>
                  <div className="text-gray-300 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Frontend</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• React & Next.js</li>
                          <li>• TypeScript</li>
                          <li>• Tailwind CSS</li>
                          <li>• HTML5 & CSS3</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Backend</h4>
                        <ul className="space-y-1 text-xs">
                          <li>• Node.js & Express</li>
                          <li>• Python</li>
                          <li>• PostgreSQL & MySQL</li>
                          <li>• APIs RESTful</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        },
        {
          id: 'projetos',
          name: 'projetos.txt',
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
                      text="// Alguns dos projetos que desenvolvi" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-3">Portfolio pessoal (Next.js + TypeScript)</h3>
                    <p className="text-gray-300 mb-4">
                      Portfolio responsivo com tema VSCode, incluindo explorador de arquivos interativo,
                      animações suaves e design moderno.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Next.js', 'TypeScript', 'Tailwind CSS', 'React'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-700 text-aqua-green text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-aqua-green hover:text-white transition-colors">
                        Ver código →
                      </a>
                      <a href="#" className="text-aqua-green hover:text-white transition-colors">
                        Demo live →
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-3">Sistema de Gestão</h3>
                    <p className="text-gray-300 mb-4">
                      Aplicação full-stack para gerenciamento de processos empresariais com
                      dashboard analítico e relatórios em tempo real.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Node.js', 'PostgreSQL', 'Express'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-700 text-aqua-green text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href="#" className="text-aqua-green hover:text-white transition-colors">
                        Ver detalhes →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        }
      ]
    },
    {
      id: 'contato',
      name: 'contato',
      type: 'folder',
      children: [
        {
          id: 'redes-sociais',
          name: 'redes-sociais.txt',
          type: 'file',
          content: (
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">
                    <TypewriterText text="Entre em Contato" speed={100} />
                  </h1>
                  <div className="text-light-gray">
                    <TypewriterText 
                      text="// Vamos conversar sobre projetos e oportunidades" 
                      speed={50} 
                      delay={1000}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="text-aqua-green mr-3">📧</span>
                          <a href="mailto:matteus_gbi@hotmail.com" className="text-gray-300 hover:text-white">
                            matteus_gbi@hotmail.com
                          </a>
                        </div>
                        <div className="flex items-center">
                          <span className="text-aqua-green mr-3">📱</span>
                          <span className="text-gray-300">Disponível via WhatsApp</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-aqua-green mr-3">📍</span>
                          <span className="text-gray-300">Brasil</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                      <div className="space-y-3">
                        <a href="https://github.com/matteusfernandes" className="flex items-center text-gray-300 hover:text-white transition-colors">
                          <span className="text-aqua-green mr-3">🐙</span>
                          GitHub
                        </a>
                        <a href="https://linkedin.com/in/matteusfernandes" className="flex items-center text-gray-300 hover:text-white transition-colors">
                          <span className="text-aqua-green mr-3">💼</span>
                          LinkedIn
                        </a>
                        <a href="https://instagram.com/matteusfernandes" className="flex items-center text-gray-300 hover:text-white transition-colors">
                          <span className="text-aqua-green mr-3">📷</span>
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Disponibilidade</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>🟢 <strong>Disponível para projetos freelance</strong></p>
                      <p>🟢 <strong>Disponível para colaborações</strong></p>
                      <p>🟢 <strong>Interessado em oportunidades full-time</strong></p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Áreas de Interesse</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="text-aqua-green font-semibold mb-2">Desenvolvimento Web</h4>
                        <ul className="space-y-1 text-gray-300">
                          <li>• Aplicações React/Next.js</li>
                          <li>• APIs RESTful</li>
                          <li>• E-commerce</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-aqua-green font-semibold mb-2">Outros Projetos</h4>
                        <ul className="space-y-1 text-gray-300">
                          <li>• Sistemas de gestão</li>
                          <li>• Dashboards analíticos</li>
                          <li>• Automação de processos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const openFile = (fileId: string) => {
    setActiveTab(fileId);
  };

  const renderFileTree = (items: FileItem[], level = 0) => {
    return items.map(item => (
      <div key={item.id} className={`ml-${level * 4}`}>
        <div 
          className={`flex items-center cursor-pointer hover:bg-gray-800 p-1 rounded ${
            activeTab === item.id ? 'bg-gray-700' : ''
          }`}
          onClick={() => item.type === 'folder' ? toggleFolder(item.id) : openFile(item.id)}
        >
          {item.type === 'folder' ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(233,99,119,1)" className="w-5 h-5 mr-2">
                <path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V8ZM10 4V9H5V20H19V4H10Z"></path>
              </svg>
              <span 
                className={`${
                  item.name === '_experiência' 
                    ? 'font-semibold' 
                    : 'text-light-gray'
                }`}
                style={item.name === '_experiência' ? { color: '#F4B460' } : {}}
              >
                {item.name}
              </span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" className="w-4 h-4 mr-2">
                <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
              </svg>
              <span className="text-aqua-green">{item.name}</span>
            </>
          )}
        </div>
        {item.type === 'folder' && expandedFolders.has(item.id) && item.children && (
          renderFileTree(item.children, level + 1)
        )}
      </div>
    ));
  };

  const getCurrentContent = () => {
    const findItemById = (items: FileItem[], id: string): FileItem | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItemById(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    if (!activeTab) return null;
    const activeItem = findItemById(fileStructure, activeTab);
    return activeItem?.content || null;
  };

  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />
      
      {/* Tab bar - alinhada com o conteúdo principal, sem invasão da sidebar esquerda */}
      <div className="w-full border-b border-gray-600 bg-gradient-main flex" style={{ height: '60px' }}>
        <div className="border-r border-gray-600 flex items-center justify-center" style={{ minWidth: '250px' }}>
          <span className="text-light-gray text-sm">Info - Pessoal</span>
        </div>
        <div className="flex-1 flex items-center h-full">
          <div className="bg-dark-gray border-r border-gray-600 px-4 py-2 text-white cursor-pointer hover:bg-gray-700 flex items-center" style={{ minWidth: '120px' }}>
            Bio
            <span className="ml-auto text-light-gray hover:text-white cursor-pointer text-lg">×</span>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full h-full">
        <div className="flex h-full min-h-screen">
          {/* Sidebar - Explorador de arquivos */}
          <div className="border-r border-gray-600 p-4" style={{ minWidth: '250px' }}>
            <div className="mb-4">
              <h3 className="text-light-gray text-sm mb-3">info - pessoal</h3>
              {/* File Tree */}
              <div className="space-y-2">
                {renderFileTree(fileStructure)}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-6 border-r border-gray-600 relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Content area */}
          <div className="flex-[3] px-6 py-4 overflow-auto">
            <div className="animate-fade-in-up">
              {getCurrentContent()}
            </div>
          </div>

          {/* Divider após conteúdo central */}
          <div className="w-6 border-r border-gray-600 relative border-l border-gray-600 relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Right sidebar */}
          <div className="flex-[2] px-6 py-4 overflow-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Linguagens`}</h3>
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <div className="text-purple">idiomas: <span className="text-light-gray">{'{'}</span></div>
                    <div className="ml-4">
                      <span className="text-aqua-green">&quot;português&quot;</span><span className="text-light-gray">:</span> <span className="text-yellow">&quot;nativo&quot;</span><span className="text-light-gray">,</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-aqua-green">&quot;inglês&quot;</span><span className="text-light-gray">:</span> <span className="text-yellow">&quot;intermediário&quot;</span>
                    </div>
                    <div className="text-light-gray">{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Ferramentas e Tecnologias`}</h3>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {/* HTML5 */}
                  <div className="w-8 h-8 bg-orange rounded flex items-center justify-center" title="HTML5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(227,79,38,1)">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                    </svg>
                  </div>
                  
                  {/* CSS3 */}
                  <div className="w-8 h-8 bg-blue rounded flex items-center justify-center" title="CSS3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(21,114,182,1)">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                    </svg>
                  </div>
                  
                  {/* JavaScript */}
                  <div className="w-8 h-8 bg-yellow rounded flex items-center justify-center" title="JavaScript">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(240,219,79,1)">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                    </svg>
                  </div>
                  
                  {/* TypeScript */}
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center" title="TypeScript">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(59,130,246,1)">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                    </svg>
                  </div>
                  
                  {/* React */}
                  <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center" title="React">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(6,182,212,1)">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.471 0-.92.015-1.36.034a14.88 14.88 0 0 1 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.186-1.86c-.38-.66-.773-1.286-1.018-1.95.309-.657.646-1.312 1.013-1.952.38-.66.773-1.286 1.18-1.87A25.02 25.02 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034a14.716 14.716 0 0 1-1.36 1.564c-.44-.572-.895-1.096-1.36-1.565z"></path>
                    </svg>
                  </div>
                  
                  {/* Next.js */}
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center" title="Next.js">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(255,255,255,1)">
                      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7449s.012 1.0859.108 1.7449c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.108-.0616c-.0659-.0357-.1184-.0976-.1552-.1618l-.0329-.0835.0094-4.4972.0096-4.4958.0509-.0646c.0162-.0222.0649-.0771.1089-.1233.0789-.0785.1982-.1093.6487-.1093.4747 0 .5914.0501.8208.3146.0508.0593.184.2681.295.4637.1049.1956.3490.6502.5413 1.0069.1924.3567.6565 1.2237.9664 1.7991.7294 1.3521 2.1223 3.9284 2.5816 4.7794.7636 1.4142 1.5279 2.8284 1.6995 3.1446l.309.5736.1603-.1069c.8827-.5892 1.8174-1.3872 2.4986-2.1344 1.0444-.1145 2.0775-.3285 3.0729-.6364 2.5337-.7839 4.6344-2.1608 6.1094-4.0075 1.0444-1.3082 1.7525-2.8284 2.0928-4.4948.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.108-.0616c-.0659-.0357-.1184-.0976-.1552-.1618l-.0329-.0835.0094-4.4972.0096-4.4958.0509-.0646c.0162-.0222.0649-.0771.1089-.1233.0789-.0785.1982-.1093.6487-.1093.4747 0 .5914.0501.8208.3146.0508.0593.184.2681.295.4637.1049.1956.3490.6502.5413 1.0069.1924.3567.6565 1.2237.9664 1.7991.7294 1.3521 2.1223 3.9284 2.5816 4.7794.7636 1.4142 1.5279 2.8284 1.6995 3.1446l.309.5736.1603-.1069c.8827-.5892 1.8174-1.3872 2.4986-2.1344 1.3515-1.4496 2.0982-3.2751 2.0982-5.1317 0-1.8566-.7467-3.6821-2.0982-5.1317C19.1709 2.1608 17.0702.7837 14.5365 0c-.7789-.2511-1.6-.4223-2.5337-.5255C11.6663.0188 11.6408.0121 11.5725 0z"></path>
                    </svg>
                  </div>
                  
                  {/* Node.js */}
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center" title="Node.js">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(22,163,74,1)">
                      <path d="m12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2zM12 3.99l5.93 3.42v6.18L12 17.01 6.07 13.59V7.41L12 3.99z"></path>
                    </svg>
                  </div>
                  
                  {/* Python */}
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center" title="Python">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(59,130,246,1)">
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                    </svg>
                  </div>
                  
                  {/* MySQL */}
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center" title="MySQL">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(234,88,12,1)">
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.084c.118-2.195.212-3.93.284-5.79h.94c.492 1.595.873 2.865 1.14 3.81.281-.959.661-2.215 1.14-3.81h.927c.07 1.861.164 3.596.284 5.79h.012zM8.165 12.483c.399 0 .718.179.718.179V14.8s-.296-.77-.718-.77c-.626 0-1.197.436-1.197 1.771 0 1.688.646 1.737 1.197 1.737.422 0 .718-.77.718-.77v2.139s-.319.179-.718.179c-1.299 0-2.07-1.025-2.07-3.285 0-2.279.771-3.318 2.07-3.318zM12.19 10.639c-1.6 0-2.515 1.099-2.515 3.199 0 2.906 1.537 3.777 2.515 3.777 1.102 0 2.594-.906 2.594-3.777 0-2.043-.858-3.199-2.594-3.199zM12.19 16.668c-.67 0-1.215-.718-1.215-2.832 0-1.517.545-2.285 1.215-2.285.67 0 1.296.768 1.296 2.285 0 2.114-.626 2.832-1.296 2.832zM17.08 5.17c-.218-.873-.455-1.859-.455-1.859s-1.671.218-2.358.873c-.669.637-.802 1.188-.802 1.188s.033-.016.08-.045c-.316.131-.694.33-.888.676-.24.433-.246.911-.467 1.848-.058.248-.145.497-.203.497-.052 0-.02-.378-.02-.378-.012.329-.09.705-.234.985-.133.254-.34.6-.34.6s-.238.341-.238.696c0 .169.089.353.211.529.479.691 1.266 1.009 1.86 1.009.3 0 .617-.06.617-.06-.01-.02-.026-.04-.026-.061 0-.057.044-.114.044-.171s-.044-.114-.044-.171c0-.04.03-.08.061-.08.099 0 .298.171.298.171.158-.298.298-.835.298-1.259 0-.891-.144-1.378-.298-1.699-.042-.087-.098-.197-.098-.285 0-.04.02-.089.061-.113.172-.107.576-.034.576-.034.224-.287.224-.691.224-.691.056-.398.336-.796.336-.796s-.224.056-.28.112c-.056-.056-.224-.112-.448-.112s-.336-.112-.504-.169c-.168-.056-.504-.056-.672-.056-.161 0-.291.09-.375.221-.084.13-.084.299-.084.299s-.089-.013-.2.08c-.096.08-.18.214-.18.374 0 .08.034.167.08.247.046.08.11.16.11.24 0 .087-.064.173-.129.26-.065.087-.129.173-.129.26 0 .087.064.173.129.26.065.087.129.173.129.26 0 .12-.088.24-.176.36z"></path>
                    </svg>
                  </div>
                  
                  {/* PostgreSQL */}
                  <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center" title="PostgreSQL">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(29,78,216,1)">
                      <path d="M17.128 0C15.73-.007 14.548.206 13.97.705c-.578.499-.855 1.195-.855 1.946 0 .498.123.952.336 1.333-.13.023-.251.052-.367.09-1.303.425-2.382 1.23-3.144 2.304-.36.507-.661 1.055-.87 1.643a5.804 5.804 0 00-.214 1.74 4.21 4.21 0 00.168 1.265 9.982 9.982 0 002.182 3.542c1.065 1.065 2.397 1.797 3.83 2.094a8.31 8.31 0 001.81.191c1.265 0 2.475-.215 3.542-.633a9.982 9.982 0 003.542-2.182 9.982 9.982 0 002.094-3.83c.13-.443.191-.896.191-1.357 0-1.035-.222-2.017-.642-2.902a9.982 9.982 0 00-1.681-2.544 9.982 9.982 0 00-2.544-1.681A9.707 9.707 0 0017.128 0zm0 1.265c.696 0 1.36.13 1.978.376a8.717 8.717 0 012.217 1.464 8.717 8.717 0 011.464 2.217c.37.654.561 1.375.561 2.094 0 .406-.053.803-.168 1.18a8.546 8.546 0 01-1.78 3.26 8.546 8.546 0 01-3.26 1.78 7.64 7.64 0 01-3.083.191 7.023 7.023 0 01-3.26-1.78 8.546 8.546 0 01-1.85-3.075 3.145 3.145 0 01-.145-1.042c0-.498.076-.996.214-1.48.269-.934.733-1.765 1.357-2.42.625-.656 1.395-1.12 2.26-1.357.438-.122.886-.183 1.334-.183.215 0 .433.022.65.068l.031-.007zm-4.424 6.332c-.36 0-.703.123-.996.336a2.52 2.52 0 00-.748 1.265 2.52 2.52 0 00.168 1.541c.176.506.474.962.855 1.334.382.375.84.673 1.35.848a2.52 2.52 0 001.541-.168 2.52 2.52 0 001.265-.748c.337-.337.58-.748.705-1.196a2.52 2.52 0 00-.168-1.541 2.52 2.52 0 00-.848-1.35 2.52 2.52 0 00-1.334-.855 2.52 2.52 0 00-1.196-.007c-.214.046-.422.123-.594.245z"></path>
                    </svg>
                  </div>
                  
                  {/* Git */}
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center" title="Git">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(220,38,38,1)">
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
                    </svg>
                  </div>
                  
                  {/* VS Code */}
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center" title="VS Code">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(37,99,235,1)">
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
                    </svg>
                  </div>
                  
                  {/* Tailwind CSS */}
                  <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center" title="Tailwind CSS">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(8,145,178,1)">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                    </svg>
                  </div>
                  
                  {/* Express.js - usando ícone genérico de servidor */}
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center" title="Express.js">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(156,163,175,1)">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
                <h3 className="text-light-gray text-sm mb-3">{`//Redes Sociais`}</h3>
                <div className="flex space-x-2 mb-4">
                  <a href="https://github.com/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 3.00993C5.97895 3.03591 6.94048 3.75993 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com/matteusfernandes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-r rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2386 17.001 12C17.001 14.7614 14.7624 17 12.001 17C9.24058 17 7.00098 14.7614 7.00098 12C7.00098 9.2386 9.23958 7 12.001 7ZM18.501 6.75C18.501 7.44036 17.9414 8 17.251 8C16.5606 8 16.001 7.44036 16.001 6.75C16.001 6.05964 16.5606 5.5 17.251 5.5C17.9414 5.5 18.501 6.05964 18.501 6.75ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9198 20.001 14.5355 20.001 12C20.001 9.52552 19.9944 9.12217 19.9432 7.97117C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19814 16.8124 4.09263 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.27773 18.5511 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.0875 21.8918 6.8125 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1875 21.7226 17.9125 21.476 18.55C21.221 19.2075 20.8776 19.7658 20.3226 20.3217C19.7668 20.8775 19.2101 21.221 18.5511 21.475C17.9135 21.7217 17.1876 21.8908 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81348 21.8908 6.08848 21.7217 5.45098 21.475C4.79348 21.221 4.23514 20.8775 3.67931 20.3217C3.12348 19.7658 2.78014 19.2075 2.52598 18.55C2.27931 17.9125 2.11014 17.1875 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27931 6.0875 2.52598 5.45C2.78014 4.7925 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.77917 5.45098 2.525C6.08848 2.27773 6.81348 2.10917 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  <a href="mailto:matteus_gbi@hotmail.com" className="w-8 h-8 bg-red rounded flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="rgba(156,163,175,1)">
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-600 my-4"></div>

              <div className="mb-6">
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
                      <path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001Z"></path>
                    </svg>
                  </div>
                </div>
              </div>

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
            </div>
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
