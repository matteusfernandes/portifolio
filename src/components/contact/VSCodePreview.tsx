import { ContactFormData } from '@/types/contact';

interface VSCodePreviewProps {
  formData: ContactFormData;
}

export function VSCodePreview({ formData }: VSCodePreviewProps) {
  return (
    <div className="h-full flex flex-col">
      {/* File Tab */}
      <div className="flex bg-dark-gray border-b border-gray-600">
        <div className="px-4 py-2 bg-gray-700 text-white text-sm font-fira-code border-r border-gray-600 flex items-center">
          contact.js
          <span className="ml-2 text-light-gray">×</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="flex-1 bg-dark-gray p-4 font-fira-code text-sm overflow-auto">
        <div className="space-y-1">
          {/* Line 1 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">1</span>
            <div className="ml-4">
              <span className="text-[#c586c0]">const</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#9cdcfe]">contactData</span>
              <span className="text-gray-100"> = </span>
              <span className="text-[#ffd700]">{'{'}</span>
            </div>
          </div>

          {/* Line 2 - Nome */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">2</span>
            <div className="ml-8">
              <span className="text-[#9cdcfe]">nome</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#ce9178]">&apos;{formData.nome || 'Seu nome'}&apos;</span>
              <span className="text-gray-100">,</span>
            </div>
          </div>

          {/* Line 3 - Email */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">3</span>
            <div className="ml-8">
              <span className="text-[#9cdcfe]">email</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#ce9178]">&apos;{formData.email || 'seu@email.com'}&apos;</span>
              <span className="text-gray-100">,</span>
            </div>
          </div>

          {/* Line 4 - Assunto */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">4</span>
            <div className="ml-8">
              <span className="text-[#9cdcfe]">assunto</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#ce9178]">&apos;{formData.assunto || 'Assunto da mensagem'}&apos;</span>
              <span className="text-gray-100">,</span>
            </div>
          </div>

          {/* Line 5 - Mensagem */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">5</span>
            <div className="ml-8">
              <span className="text-[#9cdcfe]">mensagem</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#ce9178]">&apos;{formData.mensagem || 'Sua mensagem aqui...'}&apos;</span>
            </div>
          </div>

          {/* Line 6 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">6</span>
            <div className="ml-4">
              <span className="text-[#ffd700]">{'}'}</span>
              <span className="text-gray-100">;</span>
            </div>
          </div>

          {/* Empty line */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">7</span>
            <div></div>
          </div>

          {/* Line 8 - Comment */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">8</span>
            <div className="ml-4">
              <span className="text-[#608b4e]">{`// Função para enviar formulário`}</span>
            </div>
          </div>

          {/* Line 9 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">9</span>
            <div className="ml-4">
              <span className="text-[#569cd6]">async</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#569cd6]">function</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#dcdcaa]">enviarContato</span>
              <span className="text-gray-100">(</span>
              <span className="text-[#9cdcfe]">dados</span>
              <span className="text-gray-100">) </span>
              <span className="text-[#ffd700]">{'{'}</span>
            </div>
          </div>

          {/* Line 10 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">10</span>
            <div className="ml-4">
              <span className="text-[#c586c0]">try</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#ffd700]">{'{'}</span>
            </div>
          </div>

          {/* Line 11 */}
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

          {/* Line 12 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">12</span>
            <div className="ml-12">
              <span className="text-[#9cdcfe]">method</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#ce9178]">&apos;POST&apos;</span>
              <span className="text-gray-100">,</span>
            </div>
          </div>

          {/* Line 13 */}
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

          {/* Line 14 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">14</span>
            <div className="ml-12">
              <span className="text-[#9cdcfe]">body</span>
              <span className="text-gray-100">: </span>
              <span className="text-[#9cdcfe]">JSON</span>
              <span className="text-gray-100">.</span>
              <span className="text-[#dcdcaa]">stringify</span>
              <span className="text-gray-100">(</span>
              <span className="text-[#9cdcfe]">dados</span>
              <span className="text-gray-100">)</span>
            </div>
          </div>

          {/* Line 15 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">15</span>
            <div className="ml-8">
              <span className="text-[#ffd700]">{'}'}</span>
              <span className="text-gray-100">);</span>
            </div>
          </div>

          {/* Line 16 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">16</span>
            <div className="ml-8">
              <span className="text-[#c586c0]">return</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#569cd6]">await</span>
              <span className="text-gray-100"> </span>
              <span className="text-[#9cdcfe]">response</span>
              <span className="text-gray-100">.</span>
              <span className="text-[#dcdcaa]">json</span>
              <span className="text-gray-100">();</span>
            </div>
          </div>

          {/* Line 17 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">17</span>
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

          {/* Line 18 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">18</span>
            <div className="ml-8">
              <span className="text-[#9cdcfe]">console</span>
              <span className="text-gray-100">.</span>
              <span className="text-[#dcdcaa]">error</span>
              <span className="text-gray-100">(</span>
              <span className="text-[#ce9178]">&apos;Erro ao enviar:&apos;</span>
              <span className="text-gray-100">, </span>
              <span className="text-[#9cdcfe]">error</span>
              <span className="text-gray-100">);</span>
            </div>
          </div>

          {/* Line 19 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">19</span>
            <div className="ml-4">
              <span className="text-[#ffd700]">{'}'}</span>
            </div>
          </div>

          {/* Line 20 */}
          <div className="flex">
            <span className="text-gray-500 select-none w-6 text-right mr-4">20</span>
            <div className="ml-4">
              <span className="text-[#ffd700]">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
