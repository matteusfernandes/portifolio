'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Sobre mim</h1>
                <div className="text-light-gray">
                  <p>{`// Desenvolvedor Full Stack apaixonado por tecnologia`}</p>
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
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Experiência Profissional</h1>
                <div className="text-light-gray">
                  <p>{`// Minha jornada profissional e projetos desenvolvidos`}</p>
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
            </div>
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
      
      {/* Tab bar */}
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
              <h3 className="text-light-gray text-sm mb-3">explorador de arquivos</h3>
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

          {/* Right divider */}
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
                <h3 className="text-light-gray text-sm mb-3">{`//Linguagens de Programação`}</h3>
                <div className="space-y-2">
                  <div className="font-mono text-sm">
                    <div className="text-purple">stacks: <span className="text-light-gray">[</span></div>
                    <div className="ml-4 space-y-1">
                      {['Javascript', 'Typescript', 'React', 'Node.js', 'Next.js', 'Python', 'MySQL', 'HTML', 'CSS'].map((tech, index, array) => (
                        <div key={tech}>
                          <span className="text-aqua-green">&quot;{tech}&quot;</span>
                          <span className="text-light-gray">{index === array.length - 1 ? '' : ','}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-light-gray">]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final divider */}
          <div className="w-6 border border-gray-600 relative">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
