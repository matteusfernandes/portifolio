import { AnimatedElement } from '@/components/AnimatedElement';
import { TypewriterText } from '@/components/TypewriterText';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

export const EducacaoSection: FileItem[] = [
  {
    id: 'educação',
    name: '_educação',
    type: 'folder',
    children: [
      {
        id: 'graduacao',
        name: 'graduacao.txt',
        type: 'file',
        content: (
          <AnimatedElement delay={0.1} animation="fade-in-up">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <TypewriterText text="Formação Acadêmica" speed={100} />
                </h1>
                <div className="text-light-gray">
                  <TypewriterText 
                    text="// Minha jornada educacional e formação acadêmica" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>

              {/* Formação Superior */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  {`//Formação Superior`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Bacharelado em Direito */}
                  <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 p-6 rounded-lg border border-amber-500/40 hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">⚖️</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Bacharelado em Direito</h4>
                        <p className="text-amber-300 text-sm font-medium">Faculdade UniFG</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-sm mb-3">2011 - 2015 • Concluído</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Formação jurídica completa com foco em direito civil, penal, trabalhista e empresarial. 
                      Desenvolveu base sólida em análise crítica, argumentação jurídica e resolução de problemas complexos.
                    </p>
                    
                    <div className="mb-3">
                      <h5 className="text-white text-sm font-semibold mb-2">Principais Áreas de Estudo:</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Direito Civil</span>
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Direito Penal</span>
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Direito Trabalhista</span>
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Direito Empresarial</span>
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Direito Constitucional</span>
                        <span className="bg-amber-600 text-xs px-2 py-1 rounded">Processo Civil</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                      <div className="bg-amber-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Formação concluída com sucesso</p>
                  </div>

                  {/* Desenvolvimento Web Full Stack */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/40 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">💻</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Desenvolvimento Web Full Stack</h4>
                        <p className="text-blue-300 text-sm font-medium">Trybe</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-sm mb-3">2021 - 2022 • Concluído</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Formação intensiva com +1500 horas de conteúdo prático, cobrindo desenvolvimento front-end, 
                      back-end, ciência da computação e metodologias ágeis de desenvolvimento.
                    </p>
                    
                    <div className="mb-3">
                      <h5 className="text-white text-sm font-semibold mb-2">Stack Tecnológico:</h5>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded">JavaScript</span>
                        <span className="bg-blue-600 text-xs px-2 py-1 rounded">React</span>
                        <span className="bg-green-600 text-xs px-2 py-1 rounded">Node.js</span>
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded">Python</span>
                        <span className="bg-orange-600 text-xs px-2 py-1 rounded">MySQL</span>
                        <span className="bg-green-700 text-xs px-2 py-1 rounded">MongoDB</span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Certificação completa em desenvolvimento</p>
                  </div>
                </div>
              </div>

              {/* Competências Desenvolvidas */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🧠</span>
                  {`//Competências Desenvolvidas`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🏛️</span>
                      Formação Jurídica
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Análise crítica e interpretação jurídica</li>
                      <li>• Argumentação estruturada e persuasiva</li>
                      <li>• Resolução de conflitos complexos</li>
                      <li>• Ética profissional e responsabilidade social</li>
                      <li>• Pesquisa e análise documental</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>⚙️</span>
                      Formação Técnica
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Desenvolvimento full stack completo</li>
                      <li>• Metodologias ágeis e boas práticas</li>
                      <li>• Resolução de problemas algorítmicos</li>
                      <li>• Arquitetura de software e sistemas</li>
                      <li>• Trabalho em equipe e código colaborativo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Transição de Carreira */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🔄</span>
                  {`//Transição de Carreira`}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  A transição do Direito para a Tecnologia trouxe uma perspectiva única, combinando:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-amber-400">8+</p>
                    <p className="text-xs text-gray-400">Anos Direito</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-blue-400">3+</p>
                    <p className="text-xs text-gray-400">Anos Tech</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-400">1500+</p>
                    <p className="text-xs text-gray-400">Horas Estudo</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-400">∞</p>
                    <p className="text-xs text-gray-400">Aprendizado</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        )
      }
    ]
  },
]