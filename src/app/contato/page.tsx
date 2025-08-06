'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedElement } from '@/components/AnimatedElement';

interface FormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface ContactInfo {
  label: string;
  value: string;
  link?: string;
  icon: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo: ContactInfo[] = [
    {
      label: '_email',
      value: 'matteus_gbi@hotmail.com',
      link: 'mailto:matteus_gbi@hotmail.com',
      icon: '📧'
    },
    {
      label: '_linkedin',
      value: 'linkedin.com/in/matteusfernandes',
      link: 'https://linkedin.com/in/matteusfernandes',
      icon: '💼'
    },
    {
      label: '_github',
      value: 'github.com/matteusfernandes',
      link: 'https://github.com/matteusfernandes',
      icon: '🔗'
    },
    {
      label: '_telefone',
      value: '+55 (77) 99109-9699',
      icon: '📱'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nome.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.assunto.trim() !== '' && 
                     formData.mensagem.trim() !== '';

  return (
    <div className="page-layout bg-gradient-main text-white font-mono relative overflow-hidden">
      <Navigation />

      {/* Tab bar - esconder em mobile */}
      <div className="hidden md:flex w-full border-b border-gray-600 bg-gradient-main" style={{ height: '60px' }}>
        <div className="border-r border-gray-600 flex items-center justify-center" style={{ width: '280px' }}>
          <span className="text-light-gray text-sm" style={{ fontSize: '15px' }}>contato-info</span>
        </div>
        <div className="flex-1 flex items-center h-full">
          <div
            className="border-r border-gray-600 px-4 py-2 cursor-pointer bg-dark-gray text-white flex items-center text-sm"
            style={{ minWidth: '120px' }}
          >
            contato
            <span className="ml-auto text-light-gray text-lg">×</span>
          </div>
        </div>
      </div>

      <main className="flex-1 flex h-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full min-h-screen gap-4">
          {/* Left Sidebar - Contact Info */}
          <div className="border-r border-gray-600 flex flex-col min-h-screen" style={{ width: '280px' }}>
            {/* Contact Info Section */}
            <div className="border-b border-gray-600 p-4">
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

            {/* Social Links Section */}
            <div className="border-b border-gray-600">
              <div className="flex items-center justify-center py-4">
                <span className="text-light-gray text-sm" style={{ fontSize: '15px' }}>_redes-sociais</span>
              </div>
            </div>
            <div className="border-b border-gray-600 p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span>🔗</span>
                  <a href="https://github.com/matteusfernandes" target="_blank" className="text-light-gray hover:text-accent transition-colors text-xs">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span>🔗</span>
                  <a href="https://linkedin.com/in/matteusfernandes" target="_blank" className="text-light-gray hover:text-accent transition-colors text-xs">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span>🔗</span>
                  <a href="https://instagram.com/matteusfernandes" target="_blank" className="text-light-gray hover:text-accent transition-colors text-xs">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="p-4 space-y-3">
              <div className="p-3 bg-green-400/10 border border-green-400/20 rounded text-center">
                <div className="flex items-center justify-center gap-2 text-green-400 text-xs">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  Disponível para projetos
                </div>
              </div>
              
              <div className="p-3 bg-accent/10 border border-accent/20 rounded text-center">
                <div className="flex items-center justify-center gap-2 text-accent text-xs">
                  <span>⏱️</span>
                  Resposta em até 24h
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Contact Form */}
          <div className="flex-1 flex flex-col mr-4" style={{ width: '60%' }}>
            <div className="flex-1 p-8 overflow-auto">
              <AnimatedElement delay={0.1} animation="fade-in-up">
                <div className="max-w-2xl">
                  <div className="mb-8">
                    <h2 className="text-white text-2xl mb-6 font-fira-code">
                      <TypewriterText text="Entre em contato" speed={100} />
                    </h2>
                    <div className="text-light-gray">
                      <TypewriterText 
                        text="// Preencha o formulário abaixo para entrar em contato comigo" 
                        speed={50} 
                        delay={1000}
                      />
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm text-light-gray mb-2 font-fira-code">
                        _nome:
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-white/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-light-gray mb-2 font-fira-code">
                        _email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-white/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="assunto" className="block text-sm text-light-gray mb-2 font-fira-code">
                        _assunto:
                      </label>
                      <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-white/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-sm text-light-gray mb-2 font-fira-code">
                        _mensagem:
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-white/60 transition-colors resize-vertical"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="w-full p-3 bg-white/10 border border-white/20 text-white font-fira-code font-bold rounded-md hover:bg-white/20 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-400/10 border border-green-400/20 rounded-md">
                        <p className="text-green-400 font-fira-code text-sm">
                          ✓ Mensagem enviada com sucesso!
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-md">
                        <p className="text-red-400 font-fira-code text-sm">
                          ✗ Erro ao enviar mensagem. Tente novamente.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </AnimatedElement>
            </div>
          </div>

          <div className="w-6 border-r border-gray-600 relative border-l border-gray-600">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>

          {/* Right Sidebar - Live Code Snippet */}
          <div className="flex flex-col min-h-screen" style={{ width: '40%' }}>
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
          </div>
            <div className="w-6 border border-gray-600 relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col min-h-screen">
          {/* Mobile Header */}
          <div className="px-4 py-6 bg-gradient-to-b from-transparent to-dark-blue/10">
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="text-center mb-6">
                <h1 className="text-3xl text-white font-fira-code mb-3">
                  <TypewriterText text="_contato" speed={120} />
                </h1>
                <div className="text-light-gray text-sm">
                  <TypewriterText 
                    text="// Entre em contato comigo" 
                    speed={60} 
                    delay={800}
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="flex-1 px-4 pb-6 space-y-8">
            {/* Contact Info Cards */}
            <AnimatedElement delay={0.2} animation="fade-in-up">
              <div className="space-y-4">
                <h3 className="text-white font-fira-code text-lg mb-4">_informações</h3>
                <div className="grid grid-cols-1 gap-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-dark-blue/30 border border-gray-600/50 rounded-lg p-4 hover:bg-dark-blue/40 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{info.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-light-gray font-fira-code text-xs mb-1">
                            {info.label}
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : '_self'}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-white hover:text-accent transition-colors font-fira-code text-xs break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-white font-fira-code text-xs">
                              {info.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            {/* Contact Form */}
            <AnimatedElement delay={0.3} animation="fade-in-up">
              <div>
                <h3 className="text-white font-fira-code text-lg mb-4">_formulário</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm text-light-gray mb-2 font-fira-code">
                        _nome:
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-dark-blue/50 border border-light-gray/30 rounded-lg text-white font-fira-code text-sm focus:outline-none focus:border-white/60 focus:bg-dark-blue/70 transition-all placeholder-light-gray/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-light-gray mb-2 font-fira-code">
                        _email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-dark-blue/50 border border-light-gray/30 rounded-lg text-white font-fira-code text-sm focus:outline-none focus:border-white/60 focus:bg-dark-blue/70 transition-all placeholder-light-gray/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-light-gray mb-2 font-fira-code">
                        _assunto:
                      </label>
                      <input
                        type="text"
                        name="assunto"
                        placeholder="Sobre o que você quer falar?"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-dark-blue/50 border border-light-gray/30 rounded-lg text-white font-fira-code text-sm focus:outline-none focus:border-white/60 focus:bg-dark-blue/70 transition-all placeholder-light-gray/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-light-gray mb-2 font-fira-code">
                        _mensagem:
                      </label>
                      <textarea
                        name="mensagem"
                        placeholder="Conte-me mais sobre seu projeto ou ideia..."
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full p-4 bg-dark-blue/50 border border-light-gray/30 rounded-lg text-white font-fira-code text-sm focus:outline-none focus:border-white/60 focus:bg-dark-blue/70 transition-all placeholder-light-gray/50 resize-vertical"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full p-4 bg-white/10 border border-white/20 text-white font-fira-code font-bold rounded-lg hover:bg-white/20 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-base"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-400/10 border border-green-400/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 text-sm">✓</span>
                        </div>
                        <p className="text-green-400 font-fira-code text-sm">
                          Mensagem enviada com sucesso!
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-400/10 border border-red-400/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-400/20 rounded-full flex items-center justify-center">
                          <span className="text-red-400 text-sm">✗</span>
                        </div>
                        <p className="text-red-400 font-fira-code text-sm">
                          Erro ao enviar. Tente novamente.
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </AnimatedElement>

            {/* Status Cards */}
            <AnimatedElement delay={0.4} animation="fade-in-up">
              <div className="space-y-3">
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-fira-code text-sm font-medium">
                      Disponível para novos projetos
                    </span>
                  </div>
                </div>
                
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-accent text-lg">⏱️</span>
                    <span className="text-accent font-fira-code text-sm font-medium">
                      Resposta em até 24 horas
                    </span>
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
