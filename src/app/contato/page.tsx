'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TypewriterText } from '@/components/TypewriterText';
import { AnimatedElement } from '@/components/AnimatedElement';
import { ContactForm, SuccessMessage, VSCodePreview } from '@/components/contact';
import { useContactPage } from '@/hooks/contact';
import { CONTACT_INFO } from '@/constants/contact';
import { ContactInfo } from '@/types/contact';

export default function ContatoPage() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    isFormValid,
    handleInputChange,
    handleSubmit,
    resetStatus
  } = useContactPage();

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
                {CONTACT_INFO.slice(0, 2).map((info: ContactInfo, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{info.icon}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" className="text-light-gray hover:text-accent transition-colors text-xs">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-light-gray text-xs">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="border-b border-gray-600 p-4">
              <div className="space-y-3">
                {CONTACT_INFO.slice(2).map((info: ContactInfo, index: number) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span>{info.icon}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" className="text-light-gray hover:text-accent transition-colors text-xs">
                        {info.label.replace('_', '')}
                      </a>
                    ) : (
                      <span className="text-light-gray text-xs">{info.value}</span>
                    )}
                  </div>
                ))}
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
                  {submitStatus === 'success' ? (
                    <SuccessMessage onReset={resetStatus} />
                  ) : (
                    <>
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
                      
                      <ContactForm
                        formData={formData}
                        onInputChange={handleInputChange}
                        onSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        isFormValid={isFormValid}
                        submitStatus={submitStatus}
                      />
                    </>
                  )}
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
                <VSCodePreview formData={formData} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col min-h-screen">
          {/* Header */}
          <div className="px-4 py-6 bg-gradient-to-b from-transparent to-dark-blue/10">
            <AnimatedElement delay={0.1} animation="fade-in-up">
              <div className="text-center mb-6">
                <h1 className="text-white text-2xl mb-4 font-fira-code">
                  <TypewriterText text="Entre em contato" speed={100} />
                </h1>
                <div className="text-light-gray text-sm">
                  <TypewriterText 
                    text="// Vamos conversar sobre seu próximo projeto" 
                    speed={50} 
                    delay={1000}
                  />
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Content */}
          <div className="flex-1 px-4 pb-6 space-y-6">
            {/* Contact Info */}
            <AnimatedElement delay={0.2} animation="fade-in-up">
              <div className="space-y-4">
                <h3 className="text-white font-fira-code text-lg mb-4">_informações</h3>
                <div className="grid grid-cols-1 gap-3">
                  {CONTACT_INFO.map((info: ContactInfo, index: number) => (
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
                {submitStatus === 'success' ? (
                  <SuccessMessage onReset={resetStatus} isMobile={true} />
                ) : (
                  <>
                    <h3 className="text-white font-fira-code text-lg mb-4">_formulário</h3>
                    <ContactForm
                      formData={formData}
                      onInputChange={handleInputChange}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                      isFormValid={isFormValid}
                      submitStatus={submitStatus}
                      isMobile={true}
                    />
                  </>
                )}
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
