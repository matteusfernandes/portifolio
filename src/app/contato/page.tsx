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
      value: 'matteus.fernandes@exemplo.com',
      link: 'mailto:matteus.fernandes@exemplo.com',
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
      value: '+55 (11) 99999-9999',
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
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-accent transition-colors"
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
                        className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-accent transition-colors resize-vertical"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full p-3 bg-accent text-white font-fira-code font-bold rounded-md hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                <div className="p-4 font-mono text-xs leading-relaxed bg-[#1e1e1e] text-gray-100">
                  <pre className="whitespace-pre-wrap">
                    {`1  const message = {
                    2    nome: "${formData.nome || 'Seu Nome'}",
                    3    email: "${formData.email || 'seu@email.com'}",
                    4    assunto: "${formData.assunto || 'Assunto'}",
                    5    mensagem: "${formData.mensagem || 'Sua mensagem aqui...'}",
                    6    timestamp: "${new Date().toLocaleString('pt-BR')}"
                    7  };
                    8
                    9  const sendMessage = async () => {
                    10   try {
                    11     const response = await fetch('/api/contact', {
                    12       method: 'POST',
                    13       headers: { 'Content-Type': 'application/json' },
                    14       body: JSON.stringify(message)
                    15     });
                    16     
                    17     if (response.ok) {
                    18       console.log('✅ Enviado com sucesso!');
                    19       return { success: true };
                    20     }
                    21   } catch (error) {
                    22     console.error('❌ Erro:', error);
                    23     return { success: false };
                    24   }
                    25 };`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
            <div className="w-6 border border-gray-600 relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-400"></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl text-white font-fira-code mb-2">_contato</h1>
            <p className="text-light-gray text-sm">
              Entre em contato comigo
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-4 bg-dark-blue/30 rounded-md">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <div className="text-light-gray font-fira-code text-xs">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-sandy-brown transition-colors font-fira-code text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white font-fira-code text-sm">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="_nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-sandy-brown transition-colors placeholder-light-gray/50"
            />

            <input
              type="email"
              name="email"
              placeholder="_email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-sandy-brown transition-colors placeholder-light-gray/50"
            />

            <input
              type="text"
              name="assunto"
              placeholder="_assunto"
              value={formData.assunto}
              onChange={handleInputChange}
              required
              className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-sandy-brown transition-colors placeholder-light-gray/50"
            />

            <textarea
              name="mensagem"
              placeholder="_mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-sandy-brown transition-colors placeholder-light-gray/50 resize-vertical"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-accent text-white font-fira-code font-bold rounded-md hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

          <div className="space-y-3">
            <div className="p-3 bg-green-400/10 border border-green-400/20 rounded text-center">
              <div className="flex items-center justify-center gap-2 text-green-400 font-fira-code text-xs">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                Disponível para projetos
              </div>
            </div>
            
            <div className="p-3 bg-sandy-brown/10 border border-sandy-brown/20 rounded text-center">
              <div className="flex items-center justify-center gap-2 text-sandy-brown font-fira-code text-xs">
                <span>⏱️</span>
                Resposta em até 24h
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
