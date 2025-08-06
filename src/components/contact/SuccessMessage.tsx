interface SuccessMessageProps {
  onReset: () => void;
  isMobile?: boolean;
}

export function SuccessMessage({ onReset, isMobile = false }: SuccessMessageProps) {
  const iconSize = isMobile ? 'w-16 h-16' : 'w-20 h-20';
  const iconInnerSize = isMobile ? 'w-8 h-8' : 'w-10 h-10';
  const titleSize = isMobile ? 'text-2xl' : 'text-3xl';
  const textSize = isMobile ? 'text-base' : 'text-lg';
  const padding = isMobile ? 'py-12' : 'py-16';
  const buttonClass = isMobile ? 'rounded-lg' : 'rounded-md';

  return (
    <div className={`text-center ${padding}`}>
      <div className="mb-8">
        <div className={`${iconSize} bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6`}>
          <svg className={`${iconInnerSize} text-green-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className={`text-white ${titleSize} mb-4 font-fira-code`}>
          Obrigado!
        </h2>
        <p className={`text-light-gray ${textSize} mb-6`}>
          Sua mensagem foi enviada com sucesso.
        </p>
        <p className={`text-light-gray text-sm mb-8`}>
          Entrarei em contato em breve!
        </p>
      </div>
      
      <button
        onClick={onReset}
        className={`px-6 py-3 bg-white/10 border border-white/20 text-white font-fira-code ${buttonClass} hover:bg-white/20 hover:border-white/30 transition-colors`}
      >
        Enviar Nova Mensagem
      </button>
    </div>
  );
}
