import { ContactFormData } from '@/types/contact';

interface VSCodePreviewProps {
  formData: ContactFormData;
}

export function VSCodePreview({ formData }: VSCodePreviewProps) {
  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-600">
        {/* VS Code Title Bar */}
        <div className="bg-[#2d2d30] px-4 py-2 flex items-center gap-2 border-b border-gray-600">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-[#ff5f57] rounded-full"></span>
            <span className="w-3 h-3 bg-[#ffbd2e] rounded-full"></span>
            <span className="w-3 h-3 bg-[#28ca42] rounded-full"></span>
          </div>
          <span className="ml-2 text-xs text-gray-300 font-mono">contact-form.js</span>
        </div>
        
        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed bg-[#1e1e1e] overflow-auto">
          <div className="space-y-0">
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">1</span>
              <div>
                <span className="text-[#569cd6]">const</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#4fc1ff]">message</span>
                <span className="text-gray-100"> = </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">2</span>
              <div className="ml-4">
                <span className="text-[#9cdcfe]">nome</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&quot;{formData.nome || 'Seu Nome'}&quot;</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">3</span>
              <div className="ml-4">
                <span className="text-[#9cdcfe]">email</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&quot;{formData.email || 'seu@email.com'}&quot;</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">4</span>
              <div className="ml-4">
                <span className="text-[#9cdcfe]">assunto</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&quot;{formData.assunto || 'Assunto'}&quot;</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">5</span>
              <div className="ml-4">
                <span className="text-[#9cdcfe]">mensagem</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&quot;{formData.mensagem || 'Sua mensagem aqui...'}&quot;</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">6</span>
              <div className="ml-4">
                <span className="text-[#9cdcfe]">timestamp</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&quot;{new Date().toLocaleString('pt-BR')}&quot;</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">7</span>
              <div>
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">;</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">8</span>
              <div></div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">9</span>
              <div>
                <span className="text-[#569cd6]">const</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#dcdcaa]">sendMessage</span>
                <span className="text-gray-100"> = </span>
                <span className="text-[#569cd6]">async</span>
                <span className="text-gray-100"> () </span>
                <span className="text-[#569cd6]">=&gt;</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">10</span>
              <div className="ml-4">
                <span className="text-[#c586c0]">try</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">11</span>
              <div className="ml-8">
                <span className="text-[#569cd6]">const</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#9cdcfe]">response</span>
                <span className="text-gray-100"> = </span>
                <span className="text-[#569cd6]">await</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#dcdcaa]">fetch</span>
                <span className="text-gray-100">(</span>
                <span className="text-[#ce9178]">&apos;/api/contact&apos;</span>
                <span className="text-gray-100">, </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">12</span>
              <div className="ml-12">
                <span className="text-[#9cdcfe]">method</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&apos;POST&apos;</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">13</span>
              <div className="ml-12">
                <span className="text-[#9cdcfe]">headers</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ffd700]">{'{'}</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ce9178]">&apos;Content-Type&apos;</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#ce9178]">&apos;application/json&apos;</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">,</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">14</span>
              <div className="ml-12">
                <span className="text-[#9cdcfe]">body</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#4fc1ff]">JSON</span>
                <span className="text-gray-100">.</span>
                <span className="text-[#dcdcaa]">stringify</span>
                <span className="text-gray-100">(</span>
                <span className="text-[#9cdcfe]">message</span>
                <span className="text-gray-100">)</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">15</span>
              <div className="ml-8">
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">);</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">16</span>
              <div></div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">17</span>
              <div className="ml-8">
                <span className="text-[#c586c0]">if</span>
                <span className="text-gray-100"> (</span>
                <span className="text-[#9cdcfe]">response</span>
                <span className="text-gray-100">.</span>
                <span className="text-[#9cdcfe]">ok</span>
                <span className="text-gray-100">) </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">18</span>
              <div className="ml-12">
                <span className="text-[#9cdcfe]">console</span>
                <span className="text-gray-100">.</span>
                <span className="text-[#dcdcaa]">log</span>
                <span className="text-gray-100">(</span>
                <span className="text-[#ce9178]">&apos;✅ Enviado!&apos;</span>
                <span className="text-gray-100">);</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">19</span>
              <div className="ml-12">
                <span className="text-[#c586c0]">return</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'{'}</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#9cdcfe]">success</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#569cd6]">true</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">;</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">20</span>
              <div className="ml-8">
                <span className="text-[#ffd700]">{'}'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">21</span>
              <div className="ml-4">
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#c586c0]">catch</span>
                <span className="text-gray-100"> (</span>
                <span className="text-[#9cdcfe]">error</span>
                <span className="text-gray-100">) </span>
                <span className="text-[#ffd700]">{'{'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">22</span>
              <div className="ml-8">
                <span className="text-[#9cdcfe]">console</span>
                <span className="text-gray-100">.</span>
                <span className="text-[#dcdcaa]">error</span>
                <span className="text-gray-100">(</span>
                <span className="text-[#ce9178]">&apos;❌ Erro:&apos;</span>
                <span className="text-gray-100">, </span>
                <span className="text-[#9cdcfe]">error</span>
                <span className="text-gray-100">);</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">23</span>
              <div className="ml-8">
                <span className="text-[#c586c0]">return</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'{'}</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#9cdcfe]">success</span>
                <span className="text-gray-100">: </span>
                <span className="text-[#569cd6]">false</span>
                <span className="text-gray-100"> </span>
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">;</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">24</span>
              <div className="ml-4">
                <span className="text-[#ffd700]">{'}'}</span>
              </div>
            </div>
            
            <div className="flex">
              <span className="text-gray-500 select-none w-6 text-right mr-4">25</span>
              <div>
                <span className="text-[#ffd700]">{'}'}</span>
                <span className="text-gray-100">;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
