import { AnimatedElement } from '@/components/AnimatedElement';
import { TypewriterText } from '@/components/TypewriterText';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

export const ExperienciaSection: FileItem[] = [
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Front End</h4>
                        <p className="text-blue-400 text-sm font-medium">Bemtevi</p>
                      </div>
                      <a 
                        href="https://bemtevi.is" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                      >
                        Ver Site
                      </a>
                    </div>
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
                <div className="text-gray-300 text-sm space-y-2 mt-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Full Stack</h4>
                        <p className="text-green-400 text-sm font-medium">Bionana</p>
                      </div>
                        <a 
                          href="https://bionana.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
                    <p className="text-light-gray text-xs mb-1">Freelancer • 03/2025</p>
                    <p className="text-gray-300">Desenvolvi uma solução simples de página web para a apresentação do projeto Bionana, de um grupo de alunos da colégio Albert Sabin que aborda a criação de um bioplástico a partir de resíduos da bananeira. O projeto foi qualificado para participar da FEBRACE em 2025. </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="bg-purple text-xs px-2 py-1 rounded">NextJS</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">Styled Components</span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 text-sm space-y-2 mt-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Full Stack</h4>
                        <p className="text-green-400 text-sm font-medium">Shaping Sabin</p>
                      </div>
                        <a 
                          href="https://www.sabinshaping.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Front End</h4>
                        <p className="text-green-400 text-sm font-medium">Black Skulls</p>
                      </div>
                        <a 
                          href="https://black-skulls.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
                    <p className="text-light-gray text-xs mb-1">Freelancer • 05/2024</p>
                    <p className="text-gray-300">Desenvolvi e implementei um website dinâmico para uma equipe de airsoft, focado na apresentação do time, histórico, eventos e informações para novos membros.</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="bg-purple text-xs px-2 py-1 rounded">NextJS</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">Styled Components</span>
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 text-sm space-y-2 mt-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Front End</h4>
                        <p className="text-green-400 text-sm font-medium">FHS Advogados Associados</p>
                      </div>
                        <a 
                          href="https://fhsadvogados.com.br" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
                    <p className="text-light-gray text-xs mb-1">Freelancer • 03/2024</p>
                    <p className="text-gray-300">Desenvolvi e implementei um website completo e responsivo para um escritório de advocacia, incluindo um blog dinâmico para publicação de artigos e notícias. A solução foi construída utilizando WordPress como CMS e desenvolvida em PHP para customizações e funcionalidades específicas, visando otimizar a presença online e a interação com o público.</p>
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Front End</h4>
                        <p className="text-green-400 text-sm font-medium">Vitor Araújo Advocacia Criminal</p>
                      </div>
                        <a 
                          href="https://vitor-araujo-psi.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
                    <p className="text-light-gray text-xs mb-1">Freelancer • 02/2024</p>
                    <p className="text-gray-300">Desenvolvi e implementei uma Landing Page otimizada para um escritório de advocacia, com foco na captação de leads e apresentação concisa dos serviços.</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="bg-purple text-xs px-2 py-1 rounded">NextJS</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-purple text-xs px-2 py-1 rounded">Styled Components</span>
                    </div>
                  </div>
                </div>
                                            
                <div className="text-gray-300 text-sm space-y-2 mt-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Full Stack</h4>
                        <p className="text-green-400 text-sm font-medium">Shaping Sabin</p>
                      </div>
                        <a 
                          href="https://www.sabinshaping.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-semibold">Desenvolvedor Full Stack</h4>
                        <p className="text-green-400 text-sm font-medium">Shaping Sabin</p>
                      </div>
                        <a 
                          href="https://www.sabinshaping.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                        >
                          Ver Site
                        </a>
                    </div>
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
                  <TypewriterText text="Habilidades & Competências" speed={100} />
                </h1>
                <div className="text-light-gray">
                  <TypewriterText 
                    text="// Stack tecnológico e habilidades desenvolvidas ao longo da carreira" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>

              {/* Frontend Development */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>⚛️</span>
                  {`//Frontend Development`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">⚛️</span>
                      <h4 className="text-white font-semibold">React.js</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Hooks, Context API, Component Design</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🔷</span>
                      <h4 className="text-white font-semibold">Next.js</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">SSR, SSG, API Routes, Performance</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💛</span>
                      <h4 className="text-white font-semibold">JavaScript</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">ES6+, Async/Await, DOM Manipulation</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🔷</span>
                      <h4 className="text-white font-semibold">TypeScript</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Type Safety, Interfaces, Generics</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💅</span>
                      <h4 className="text-white font-semibold">Styled Components</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">CSS-in-JS, Theming, Responsive Design</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎨</span>
                      <h4 className="text-white font-semibold">HTML/CSS</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Semantic HTML, Flexbox, Grid, Animations</p>
                  </div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🖥️</span>
                  {`//Backend Development`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🟢</span>
                      <h4 className="text-white font-semibold">Node.js</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Express, REST APIs, Middleware</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐘</span>
                      <h4 className="text-white font-semibold">PHP</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">WordPress Development, Custom Themes</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐍</span>
                      <h4 className="text-white font-semibold">Python</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Scripts, Automation, Web Development</p>
                  </div>
                </div>
              </div>

              {/* Database & CMS */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🗄️</span>
                  {`//Database & CMS`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐬</span>
                      <h4 className="text-white font-semibold">MySQL</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Complex Queries, Database Design</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🍃</span>
                      <h4 className="text-white font-semibold">MongoDB</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">NoSQL, Collections, Aggregation</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🔗</span>
                      <h4 className="text-white font-semibold">Sequelize</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">ORM, Migrations, Models</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🔷</span>
                      <h4 className="text-white font-semibold">WordPress</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Custom Themes, Plugins, Admin</p>
                  </div>
                </div>
              </div>

              {/* Tools & DevOps */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🛠️</span>
                  {`//Tools & DevOps`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🌿</span>
                      <h4 className="text-white font-semibold">Git</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Version Control</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-black transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">⚫</span>
                      <h4 className="text-white font-semibold">Vercel</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Deployment</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💜</span>
                      <h4 className="text-white font-semibold">VS Code</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">IDE Principal</p>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎨</span>
                      <h4 className="text-white font-semibold">Figma</h4>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">UI/UX Design</p>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🧠</span>
                  {`//Soft Skills & Liderança`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>👥</span>
                      Liderança & Gestão
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Ex-Presidente Rotaract Club de Guanambi</li>
                      <li>• Ex-Presidente OAB Jovem (OAB-Guanambi)</li>
                      <li>• Gestão de equipes e projetos</li>
                      <li>• Tomada de decisões estratégicas</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🤝</span>
                      Comunicação & Colaboração
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Trabalho em equipe multidisciplinar</li>
                      <li>• Comunicação técnica clara</li>
                      <li>• Relacionamento com clientes</li>
                      <li>• Mentoria e desenvolvimento de outros</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🎯</span>
                      Resolução de Problemas
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Pensamento analítico e lógico</li>
                      <li>• Debugging e troubleshooting</li>
                      <li>• Otimização de performance</li>
                      <li>• Soluções criativas e eficientes</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-4 rounded-lg border border-yellow-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>📚</span>
                      Aprendizado Contínuo
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Adaptação a novas tecnologias</li>
                      <li>• Pesquisa e autodidata</li>
                      <li>• Participação em comunidades</li>
                      <li>• Atualização constante do conhecimento</li>
                    </ul>
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

              {/* Formação Principal */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  {`//Formação Principal`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/40 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎓</span>
                      <div>
                        <h4 className="text-white font-bold text-lg">Desenvolvimento Web Full Stack</h4>
                        <p className="text-blue-300 text-sm font-medium">Trybe</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-xs mb-2">2021 - 2022</p>
                    <p className="text-gray-300 text-sm mb-3">Formação intensiva com +1500 horas de conteúdo prático, cobrindo front-end, back-end, ciência da computação e metodologias ágeis.</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-yellow-600 text-xs px-2 py-1 rounded">JavaScript</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-green-600 text-xs px-2 py-1 rounded">Node.js</span>
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded">Python</span>
                      <span className="bg-orange-600 text-xs px-2 py-1 rounded">MySQL</span>
                      <span className="bg-green-700 text-xs px-2 py-1 rounded">MongoDB</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 p-6 rounded-lg border border-amber-500/40 hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">⚖️</span>
                      <div>
                        <h4 className="text-white font-bold text-lg">Bacharelado em Direito</h4>
                        <p className="text-amber-300 text-sm font-medium">Faculdade UniFG</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-xs mb-2">2011 - 2015 • Concluído</p>
                    <p className="text-gray-300 text-sm mb-3">Formação jurídica completa com foco em direito civil, penal, trabalhista e empresarial. Base sólida em análise, argumentação e resolução de problemas complexos.</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">Formação concluída com sucesso</p>
                  </div>
                </div>
              </div>

              {/* Certificações Técnicas */}
              {/* <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>�</span>
                  {`//Certificações & Cursos Especializados`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                  
                  {/* JavaScript */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">💛</span>
                      <h4 className="text-white font-semibold">JavaScript ES6+</h4>
                    </div>
                    <p className="text-yellow-400 text-xs font-medium mb-2">Udemy</p>
                    <p className="text-gray-300 text-xs mb-3">Programação moderna, async/await, destructuring, modules e features avançadas do ES6+.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-yellow-600 text-xs px-2 py-1 rounded">40h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div> */}

                  {/* React */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">⚛️</span>
                      <h4 className="text-white font-semibold">React.js Avançado</h4>
                    </div>
                    <p className="text-blue-400 text-xs font-medium mb-2">Rocketseat</p>
                    <p className="text-gray-300 text-xs mb-3">Hooks avançados, Context API, performance, testing e arquitetura de componentes.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">60h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div> */}

                  {/* Node.js */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">�</span>
                      <h4 className="text-white font-semibold">Node.js & Express</h4>
                    </div>
                    <p className="text-green-400 text-xs font-medium mb-2">Cod3r</p>
                    <p className="text-gray-300 text-xs mb-3">APIs REST, middleware, autenticação, integração com bancos de dados e deploy.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-green-600 text-xs px-2 py-1 rounded">45h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div> */}

                  {/* MySQL */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐬</span>
                      <h4 className="text-white font-semibold">MySQL Database</h4>
                    </div>
                    <p className="text-blue-400 text-xs font-medium mb-2">Curso em Vídeo</p>
                    <p className="text-gray-300 text-xs mb-3">Modelagem, queries complexas, índices, procedures e otimização de performance.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">30h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div> */}

                  {/* UI/UX Design */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎨</span>
                      <h4 className="text-white font-semibold">UI/UX Design</h4>
                    </div>
                    <p className="text-pink-400 text-xs font-medium mb-2">Figma Academy</p>
                    <p className="text-gray-300 text-xs mb-3">Design de interfaces, prototipagem, design systems e usabilidade.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-pink-600 text-xs px-2 py-1 rounded">25h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div> */}

                  {/* Git & GitHub */}
                  {/* <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🌿</span>
                      <h4 className="text-white font-semibold">Git & GitHub</h4>
                    </div>
                    <p className="text-orange-400 text-xs font-medium mb-2">Digital Innovation One</p>
                    <p className="text-gray-300 text-xs mb-3">Controle de versão, branching, merge, colaboração e CI/CD workflows.</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-600 text-xs px-2 py-1 rounded">20h</span>
                      <span className="text-green-400 text-xs">✓ Concluído</span>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Cursos em Andamento */}
              {/* <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🔄</span>
                  {`//Estudos em Andamento`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                  
                  {/* DevOps */}
                  {/* <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🐳</span>
                      <h4 className="text-white font-semibold">DevOps & Containers</h4>
                    </div>
                    <p className="text-cyan-400 text-xs font-medium mb-2">Docker University</p>
                    <p className="text-gray-300 text-xs mb-3">Docker, Kubernetes, CI/CD pipelines e orquestração de containers.</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">60% completo • 24h restantes</p>
                  </div> */}

                  {/* AWS */}
                  {/* <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 p-4 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">☁️</span>
                      <h4 className="text-white font-semibold">AWS Cloud</h4>
                    </div>
                    <p className="text-orange-400 text-xs font-medium mb-2">AWS Training</p>
                    <p className="text-gray-300 text-xs mb-3">Cloud architecture, EC2, S3, Lambda e serviços fundamentais da AWS.</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">30% completo • Previsão: Março 2025</p>
                  </div> */}

                  {/* TypeScript */}
                  {/* <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">�</span>
                      <h4 className="text-white font-semibold">TypeScript Avançado</h4>
                    </div>
                    <p className="text-blue-400 text-xs font-medium mb-2">Microsoft Learn</p>
                    <p className="text-gray-300 text-xs mb-3">Tipos avançados, generics, decorators e arquitetura enterprise.</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-gray-400">45% completo • 15h restantes</p>
                  </div>
                </div>
              </div> */}

              {/* Estatísticas */}
              {/* <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>📊</span>
                  {`//Estatísticas de Aprendizado`}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-400">220+</p>
                    <p className="text-xs text-gray-400">Horas de Curso</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">12</p>
                    <p className="text-xs text-gray-400">Certificados</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">3</p>
                    <p className="text-xs text-gray-400">Em Andamento</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">2025</p>
                    <p className="text-xs text-gray-400">Meta: AWS</p>
                  </div>
                </div>
              </div> */}
            </div>
          </AnimatedElement>
        )
      }
    ]
  }
]