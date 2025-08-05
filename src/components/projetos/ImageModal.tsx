import React, { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  projectName
}) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
      onClick={onClose}
    >
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[10000] bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Fechar modal"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
        >
          <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
        </svg>
      </button>

      {/* Container fullscreen da imagem */}
      <div 
        className="relative w-full h-full flex items-center justify-center p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-[calc(100vw-4rem)] max-h-[calc(100vh-4rem)] w-auto h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="max-w-full max-h-full w-auto h-auto object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            priority
            quality={100}
          />
        </div>

        {/* Info da imagem - positioned below the image */}
        <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-1">{projectName}</h3>
          <p className="text-sm text-gray-300">{imageAlt}</p>
        </div>

        {/* Instruções */}
        <div className="absolute top-8 left-8 text-white/70 text-sm bg-black/50 px-3 py-2 rounded">
          <p>Pressione ESC ou clique fora da imagem para fechar</p>
        </div>
      </div>
    </div>
  );
};
