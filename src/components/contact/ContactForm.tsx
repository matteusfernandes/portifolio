import { ContactFormData } from '@/types/contact';

interface ContactFormProps {
  formData: ContactFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  isFormValid: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  isMobile?: boolean;
}

export function ContactForm({ 
  formData, 
  onInputChange, 
  onSubmit, 
  isSubmitting, 
  isFormValid, 
  submitStatus,
  isMobile = false 
}: ContactFormProps) {
  const inputClass = isMobile 
    ? "w-full p-4 bg-dark-blue/50 border border-light-gray/30 rounded-lg text-white font-fira-code text-sm focus:outline-none focus:border-white/60 focus:bg-dark-blue/70 transition-all placeholder-light-gray/50"
    : "w-full p-3 bg-dark-blue/50 border border-light-gray/30 rounded-md text-white font-fira-code text-sm focus:outline-none focus:border-white/60 transition-colors";
    
  const buttonClass = isMobile
    ? "w-full p-4 bg-white/10 border border-white/20 text-white font-fira-code font-bold rounded-lg hover:bg-white/20 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-base"
    : "w-full p-3 bg-white/10 border border-white/20 text-white font-fira-code font-bold rounded-md hover:bg-white/20 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
    
  const spaceY = isMobile ? "space-y-5" : "space-y-6";
  const textareaRows = isMobile ? 5 : 6;

  return (
    <form onSubmit={onSubmit} className={spaceY}>
      <div className={isMobile ? "grid grid-cols-1 gap-4" : ""}>
        <div>
          <label htmlFor="nome" className="block text-sm text-light-gray mb-2 font-fira-code">
            _nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={onInputChange}
            placeholder={isMobile ? "Seu nome completo" : undefined}
            required
            className={inputClass}
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
            onChange={onInputChange}
            placeholder={isMobile ? "seu@email.com" : undefined}
            required
            className={inputClass}
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
            onChange={onInputChange}
            placeholder={isMobile ? "Sobre o que você quer falar?" : undefined}
            required
            className={inputClass}
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
            onChange={onInputChange}
            placeholder={isMobile ? "Conte-me mais sobre seu projeto ou ideia..." : undefined}
            required
            rows={textareaRows}
            className={`${inputClass} resize-vertical`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isFormValid}
        className={buttonClass}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {submitStatus === 'error' && (
        <div className={`p-4 bg-red-400/10 border border-red-400/20 ${isMobile ? 'rounded-lg border-red-400/30' : 'rounded-md'}`}>
          {isMobile ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-400/20 rounded-full flex items-center justify-center">
                <span className="text-red-400 text-sm">✗</span>
              </div>
              <p className="text-red-400 font-fira-code text-sm">
                Erro ao enviar. Tente novamente.
              </p>
            </div>
          ) : (
            <p className="text-red-400 font-fira-code text-sm">
              ✗ Erro ao enviar mensagem. Tente novamente.
            </p>
          )}
        </div>
      )}
    </form>
  );
}
