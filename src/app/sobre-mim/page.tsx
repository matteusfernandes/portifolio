'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedElement } from '@/components/AnimatedElement';

export default function SobreMim() {
  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      <main className="flex-1 w-full h-full">
        <div className="flex h-full min-h-screen">
          {/* Sidebar - Explorador de arquivos */}
          <div className="border-r border-gray-600 p-4" style={{ minWidth: '250px' }}>
            <div className="mb-4">
              <h3 className="text-light-gray text-sm mb-3">info - pessoal</h3>
              
              {/* Estrutura de pastas */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-purple mr-2">📁</span>
                  <span className="text-aqua-green">.bio</span>
                </div>
                
                <div className="flex items-center ml-4">
                  <span className="text-purple mr-2">📂</span>
                  <span className="text-aqua-green">.experiência</span>
                </div>
                
                <div className="flex items-center ml-4">
                  <span className="text-purple mr-2">📂</span>
                  <span className="text-aqua-green">.educação</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-red mr-2">📁</span>
                  <span className="text-aqua-green">.voluntário</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-green mr-2">📁</span>
                  <span className="text-aqua-green">.interesses</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <h3 className="text-light-gray text-sm mb-3">_contato</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-light-gray mr-2">📧</span>
                  <span className="text-light-gray text-sm">user@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-light-gray mr-2">📞</span>
                  <span className="text-light-gray text-sm">(11) 95123-1234</span>
                </div>
              </div>
            </div>
          </div>

          {/* Área principal - Editor de código */}
          <div className="flex-1 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-600">
              <div className="px-4 py-2 text-light-gray cursor-pointer hover:text-white">
                Bio
              </div>
              <div className="ml-auto p-2 text-light-gray hover:text-white cursor-pointer">
                ×
              </div>
            </div>

            {/* Conteúdo do código */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="space-y-4">
                {/* Linha 1 */}
                <div className="flex">
                  <span className="text-light-gray w-8 text-right mr-4">1</span>
                  <div>
                    <span className="text-light-gray">{`/**`}</span>
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="flex">
                  <span className="text-light-gray w-8 text-right mr-4">2</span>
                  <div>
                    <span className="text-light-gray">/</span>
                    <TypewriterText 
                      text="Sobre mim"
                      speed={60}
                      delay={500}
                      showCursor={false}
                      className="text-light-gray"
                    />
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="flex">
                  <span className="text-light-gray w-8 text-right mr-4">3</span>
                  <div>
                    <span className="text-light-gray">/</span>
                    <TypewriterText 
                      text="Eu tenho 5 anos de experiência com web Design"
                      speed={40}
                      delay={1500}
                      showCursor={false}
                      className="text-light-gray"
                    />
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="flex">
                  <span className="text-light-gray w-8 text-right mr-4">4</span>
                  <div>
                    <span className="text-light-gray">/</span>
                    <TypewriterText 
                      text="Desenvolver FullStack das principais linguagens"
                      speed={40}
                      delay={3000}
                      showCursor={false}
                      className="text-light-gray"
                    />
                  </div>
                </div>

                {/* Linha 5 */}
                <div className="flex">
                  <span className="text-light-gray w-8 text-right mr-4">5</span>
                  <div>
                    <span className="text-light-gray">*/</span>
                  </div>
                </div>

                {/* Espaço */}
                <div className="py-4"></div>

                {/* Seção de informações pessoais */}
                <AnimatedElement animation="fade-in-up" delay={4000}>
                  <div className="space-y-6">
                    <div>
                      <div className="text-purple text-lg mb-4">
                        <span className="text-purple">const</span>
                        <span className="text-aqua-green"> experiencia</span>
                        <span className="text-light-gray"> = </span>
                        <span className="text-purple">{`{`}</span>
                      </div>
                      <div className="ml-4 space-y-2">
                        <div>
                          <span className="text-aqua-green">  frontend</span>
                          <span className="text-light-gray">: [</span>
                          <span className="text-soft-pink">&quot;React&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;Next.js&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;TypeScript&quot;</span>
                          <span className="text-light-gray">],</span>
                        </div>
                        <div>
                          <span className="text-aqua-green">  backend</span>
                          <span className="text-light-gray">: [</span>
                          <span className="text-soft-pink">&quot;Node.js&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;Express&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;MongoDB&quot;</span>
                          <span className="text-light-gray">],</span>
                        </div>
                        <div>
                          <span className="text-aqua-green">  ferramentas</span>
                          <span className="text-light-gray">: [</span>
                          <span className="text-soft-pink">&quot;Git&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;Docker&quot;</span>
                          <span className="text-light-gray">, </span>
                          <span className="text-soft-pink">&quot;AWS&quot;</span>
                          <span className="text-light-gray">]</span>
                        </div>
                      </div>
                      <div className="text-purple">{`};`}</div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>

          {/* Sidebar direita - Informações */}
          <div className="w-80 border-l border-gray-600 p-4">
            <AnimatedElement animation="slide-in-left" delay={5000}>
              <div className="space-y-6">
                {/* Linguagens */}
                <div>
                  <h3 className="text-light-gray text-sm mb-3">{`//Linguagens`}</h3>
                  <div>
                    <span className="text-blue">Idiomas</span>
                    <span className="text-light-gray">: [</span>
                    <span className="text-soft-pink">&quot;Português&quot;</span>
                    <span className="text-light-gray">, </span>
                    <span className="text-soft-pink">&quot;Inglês&quot;</span>
                    <span className="text-light-gray">]</span>
                  </div>
                </div>

                {/* Linguagens de programação */}
                <div>
                  <h3 className="text-light-gray text-sm mb-3">{`//Linguagens de programação`}</h3>
                  <div>
                    <span className="text-blue">programas de Linguagens</span>
                    <span className="text-light-gray">: [</span>
                    <span className="text-soft-pink">&quot;JavaScript&quot;</span>
                    <span className="text-light-gray">, </span>
                    <span className="text-soft-pink">&quot;Python&quot;</span>
                    <span className="text-light-gray">]</span>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h3 className="text-light-gray text-sm mb-3">{`//Redes Sociais`}</h3>
                  <div className="flex space-x-2 mb-4">
                    <div className="w-8 h-8 bg-blue rounded flex items-center justify-center cursor-pointer hover:opacity-80">
                      <span className="text-white text-xs">in</span>
                    </div>
                    <div className="w-8 h-8 bg-orange rounded flex items-center justify-center cursor-pointer hover:opacity-80">
                      <span className="text-white text-xs">📷</span>
                    </div>
                    <div className="w-8 h-8 bg-purple rounded flex items-center justify-center cursor-pointer hover:opacity-80">
                      <span className="text-white text-xs">💬</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:opacity-80">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <div className="w-8 h-8 bg-red rounded flex items-center justify-center cursor-pointer hover:opacity-80">
                      <span className="text-white text-xs">M</span>
                    </div>
                  </div>
                </div>

                {/* Ferramentas e Tecnologias */}
                <div>
                  <h3 className="text-light-gray text-sm mb-3">{`//Ferramentas e Tecnologias`}</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="w-10 h-10 bg-orange rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">H5</span>
                    </div>
                    <div className="w-10 h-10 bg-blue rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C3</span>
                    </div>
                    <div className="w-10 h-10 bg-yellow rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">JS</span>
                    </div>
                    <div className="w-10 h-10 bg-cyan rounded flex items-center justify-center">
                      <span className="text-white text-xs">⚛</span>
                    </div>
                    <div className="w-10 h-10 bg-purple rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                    <div className="w-10 h-10 bg-blue rounded flex items-center justify-center">
                      <span className="text-white text-xs">⚛</span>
                    </div>
                    <div className="w-10 h-10 bg-gray rounded flex items-center justify-center">
                      <span className="text-white text-xs">⚙</span>
                    </div>
                    <div className="w-10 h-10 bg-blue rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
