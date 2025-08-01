import { AnimatedElement } from '@/components/AnimatedElement';
import { TypewriterText } from '@/components/TypewriterText';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: React.ReactNode;
  children?: FileItem[];
}

export const VoluntariadoSection: FileItem[] = [
  {
    id: 'voluntario',
    name: '_voluntário',
    type: 'folder',
    children: [
      {
        id: 'atividades',
        name: 'atividades.txt',
        type: 'file',
        content: (
          <AnimatedElement delay={0.1} animation="fade-in-up">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  <TypewriterText text="Trabalho Voluntário" speed={100} />
                </h1>
                <div className="text-light-gray">
                  <TypewriterText 
                    text="// Contribuições para a comunidade e desenvolvimento social" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>

              {/* Liderança em Organizações */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>👥</span>
                  {`//Liderança em Organizações`}
                </h3>
                <div className="space-y-6">
                  
                  {/* Rotaract Club */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6 rounded-lg border border-blue-500/40 hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🌟</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Presidente do Rotaract Club de Guanambi</h4>
                        <p className="text-blue-300 text-sm font-medium">Rotary International</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-sm mb-3">2016 - 2017 • Mandato de 1 ano</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Liderança de clube de jovens profissionais focado em desenvolvimento pessoal, 
                      profissional e projetos de impacto social na comunidade local.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-white text-sm font-semibold mb-2">Principais Realizações:</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Organização de campanhas de arrecadação para instituições carentes</li>
                        <li>• Coordenação de projetos educacionais em escolas públicas</li>
                        <li>• Desenvolvimento de programas de capacitação profissional para jovens</li>
                        <li>• Fortalecimento das parcerias com Rotary Club e outras organizações</li>
                        <li>• Gestão de equipe com mais de 20 membros ativos</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Liderança</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Gestão de Projetos</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Responsabilidade Social</span>
                      <span className="bg-blue-600 text-xs px-2 py-1 rounded">Trabalho em Equipe</span>
                    </div>
                  </div>

                  {/* OAB Jovem */}
                  <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 p-6 rounded-lg border border-amber-500/40 hover:border-amber-400 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">⚖️</span>
                      <div>
                        <h4 className="text-white font-bold text-xl">Presidente da OAB Jovem</h4>
                        <p className="text-amber-300 text-sm font-medium">OAB - Subseção Guanambi</p>
                      </div>
                    </div>
                    <p className="text-light-gray text-sm mb-3">2015 - 2016 • Mandato de 1 ano</p>
                    <p className="text-gray-300 text-sm mb-4">
                      Representação dos jovens advogados da região, promovendo integração profissional, 
                      capacitação jurídica e acesso à justiça para a comunidade.
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-white text-sm font-semibold mb-2">Principais Atividades:</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Organização de palestras e seminários jurídicos</li>
                        <li>• Coordenação de mutirões de orientação jurídica gratuita</li>
                        <li>• Desenvolvimento de programas de educação em direitos</li>
                        <li>• Articulação entre jovens advogados e OAB institucional</li>
                        <li>• Promoção de eventos de networking profissional</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      <span className="bg-amber-600 text-xs px-2 py-1 rounded">Advocacia</span>
                      <span className="bg-amber-600 text-xs px-2 py-1 rounded">Educação Jurídica</span>
                      <span className="bg-amber-600 text-xs px-2 py-1 rounded">Acesso à Justiça</span>
                      <span className="bg-amber-600 text-xs px-2 py-1 rounded">Networking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projetos Sociais */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🤝</span>
                  {`//Projetos Sociais & Comunitários`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">📚</span>
                      <h4 className="text-white font-semibold">Educação e Capacitação</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Palestras em escolas sobre direitos e cidadania</li>
                      <li>• Cursos de capacitação profissional para jovens</li>
                      <li>• Orientação jurídica gratuita à comunidade</li>
                      <li>• Workshops sobre empreendedorismo</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">❤️</span>
                      <h4 className="text-white font-semibold">Ações Solidárias</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Campanhas de arrecadação para instituições</li>
                      <li>• Organização de eventos beneficentes</li>
                      <li>• Distribuição de cestas básicas</li>
                      <li>• Ações de conscientização social</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🌱</span>
                      <h4 className="text-white font-semibold">Desenvolvimento Comunitário</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Projetos de melhoria urbana</li>
                      <li>• Iniciativas de sustentabilidade</li>
                      <li>• Fortalecimento do associativismo local</li>
                      <li>• Articulação com poder público</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎯</span>
                      <h4 className="text-white font-semibold">Liderança Jovem</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Mentoria para novos líderes</li>
                      <li>• Desenvolvimento de habilidades de gestão</li>
                      <li>• Formação de novas lideranças</li>
                      <li>• Intercâmbio entre organizações</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Competências Desenvolvidas */}
              <div className="mb-8">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>💪</span>
                  {`//Competências Desenvolvidas no Voluntariado`}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🎯</span>
                      Liderança & Gestão
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Gestão de equipes multidisciplinares</li>
                      <li>• Planejamento estratégico de projetos</li>
                      <li>• Tomada de decisões sob pressão</li>
                      <li>• Resolução de conflitos internos</li>
                      <li>• Delegação eficiente de tarefas</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span>🗣️</span>
                      Comunicação & Relacionamento
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Oratória e apresentações públicas</li>
                      <li>• Negociação e articulação política</li>
                      <li>• Relacionamento interpessoal</li>
                      <li>• Comunicação institucional</li>
                      <li>• Mobilização social</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Impacto e Reconhecimento */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h3 className="text-light-gray text-sm mb-4 flex items-center gap-2">
                  <span>🏆</span>
                  {`//Impacto e Legado`}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Durante os anos de voluntariado, pude contribuir significativamente para o desenvolvimento 
                  da comunidade local e formar uma base sólida de competências de liderança que aplico 
                  tanto na vida profissional quanto pessoal.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-blue-400">2</p>
                    <p className="text-xs text-gray-400">Presidências</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-green-400">50+</p>
                    <p className="text-xs text-gray-400">Projetos</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-purple-400">3</p>
                    <p className="text-xs text-gray-400">Anos Liderança</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-yellow-400">∞</p>
                    <p className="text-xs text-gray-400">Impacto Social</p>
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