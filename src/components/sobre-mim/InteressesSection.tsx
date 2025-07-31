import { AnimatedElement } from '@/components/AnimatedElement';
import { TypewriterText } from '@/components/TypewriterText';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

export const InteressesSection: FileItem[] = [
  {
    id: 'interesses',
    name: '_interesses',
    type: 'folder',
    children: [
      {
        id: 'hobbies',
        name: 'hobbies.txt',
        type: 'file',
        content: (
          <AnimatedElement delay={0.1} animation="fade-in-up">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <TypewriterText text="Interesses & Hobbies" speed={100} />
                </h1>
                <div className="text-light-gray">
                  <TypewriterText 
                    text="// Atividades que me inspiram e mantêm o equilíbrio vida-trabalho" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>

              {/* Tecnologia & Inovação */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>💻</span>
                  {`//Tecnologia & Inovação`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-lg border border-blue-500/40 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🚀</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Novas Tecnologias</h4>
                        <p className="text-blue-300 text-sm font-medium">Sempre explorando o futuro</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Mantenho-me constantemente atualizado com as últimas tendências em desenvolvimento, 
                      desde frameworks emergentes até ferramentas de IA e automação.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Next.js</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">AI Tools</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Web3</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">DevOps</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/40 hover:border-purple-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🎮</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Gaming & Design</h4>
                        <p className="text-purple-300 text-sm font-medium">Criatividade digital e entretenimento</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Interesse em desenvolvimento de jogos, design de interfaces e experiência do usuário. 
                      Também jogo nas horas livres, pois acredito que o gaming influencia positivamente o design de aplicações.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded">UI/UX</span>
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded">Game Design</span>
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded">Gaming</span>
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded">Figma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Atividades Físicas & Bem-estar */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🏃</span>
                  {`//Atividades Físicas & Bem-estar`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🏋️</span>
                      <h4 className="text-white font-semibold">Academia & Fitness</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Pratico musculação regularmente para manter o equilíbrio mental e físico, 
                      essencial para a produtividade no trabalho.
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Consistência: 3-4x por semana</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🧘</span>
                      <h4 className="text-white font-semibold">Mindfulness</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Pratico meditação e técnicas de respiração para manter o foco 
                      e gerenciar o estresse do dia a dia.
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Prática diária: 10-15 min</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-white font-semibold">Atividades Outdoor & Airsoft</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Aproveito o tempo livre para caminhadas, atividades ao ar livre e práticas de airsoft, 
                      conectando-me com a natureza e desenvolvendo estratégia e trabalho em equipe.
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Fins de semana ativos</p>
                  </div>
                </div>
              </div>

              {/* Aprendizado & Cultura */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>📚</span>
                  {`//Aprendizado & Cultura`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-4 rounded-lg border border-amber-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>📖</span>
                      Leitura & Conhecimento
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1 mb-3">
                      <li>• Livros de tecnologia e inovação</li>
                      <li>• Biografias de empreendedores</li>
                      <li>• Desenvolvimento pessoal e liderança</li>
                      <li>• Livros de ficção</li>
                      <li>• Artigos científicos e pesquisas</li>
                    </ul>
                    <p className="text-xs text-gray-400">Meta: 1 livro por mês</p>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-900/20 to-green-900/20 p-4 rounded-lg border border-emerald-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🎵</span>
                      Música & Arte
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1 mb-3">
                      <li>• Música eletrônica e ambiente</li>
                      <li>• Rock clássico (Metallica, Led Zeppelin, AC/DC)</li>
                      <li>• Metal nacional (Angra) e internacional</li>
                      <li>• Podcasts sobre tecnologia e automóveis</li>
                      <li>• Design gráfico e arte digital</li>
                    </ul>
                    <p className="text-xs text-gray-400">Inspiração para criatividade</p>
                  </div>
                </div>
              </div>

              {/* Networking & Comunidade */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🌐</span>
                  {`//Networking & Comunidade Tech`}
                </h3>
                <div className="space-y-4">
                  
                  <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 p-6 rounded-lg border border-indigo-500/40">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">👥</span>
                      <div>
                        <h4 className="text-white font-bold text-lg">Comunidades de Desenvolvedores</h4>
                        <p className="text-indigo-300 text-sm">Participação ativa em grupos e eventos</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-white text-sm font-semibold mb-2">Participações:</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Meetups locais de desenvolvimento</li>
                          <li>• Grupos online de React/Next.js</li>
                          <li>• Fóruns técnicos e discussions</li>
                          <li>• Eventos de networking regional</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-white text-sm font-semibold mb-2">Contribuições:</h5>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Compartilhamento de conhecimento</li>
                          <li>• Mentoria informal para iniciantes</li>
                          <li>• Discussões sobre boas práticas</li>
                          <li>• Suporte à comunidade local</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projetos Pessoais */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🛠️</span>
                  {`//Projetos Pessoais & Side Projects`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h4 className="text-white font-semibold">Experimentos com IA</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Desenvolvimento de pequenas aplicações integrando APIs de IA 
                      para automatizar tarefas e explorar possibilidades.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-cyan-600 text-xs px-2 py-1 rounded">OpenAI API</span>
                      <span className="bg-cyan-600 text-xs px-2 py-1 rounded">Automation</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎨</span>
                      <h4 className="text-white font-semibold">Design Systems</h4>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Criação de componentes reutilizáveis e sistemas de design 
                      para acelerar o desenvolvimento de projetos futuros.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-yellow-600 text-xs px-2 py-1 rounded">Storybook</span>
                      <span className="bg-yellow-600 text-xs px-2 py-1 rounded">Components</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filosofia & Valores */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>💭</span>
                  {`//Filosofia Pessoal`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Princípios que me guiam:</h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>• <strong>Aprendizado contínuo:</strong> A tecnologia evolui rapidamente, e eu evoluo junto</li>
                      <li>• <strong>Equilíbrio:</strong> Saúde mental e física são fundamentais para a criatividade</li>
                      <li>• <strong>Colaboração:</strong> Os melhores resultados vêm do trabalho em equipe</li>
                      <li>• <strong>Impacto positivo:</strong> Usar a tecnologia para melhorar a vida das pessoas</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-4">Estatísticas Pessoais</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xl font-bold text-blue-400">∞</p>
                        <p className="text-xs text-gray-400">Curiosidade</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-green-400">24/7</p>
                        <p className="text-xs text-gray-400">Aprendendo</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-purple-400">100%</p>
                        <p className="text-xs text-gray-400">Dedicação</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-yellow-400">+</p>
                        <p className="text-xs text-gray-400">Energia</p>
                      </div>
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
]