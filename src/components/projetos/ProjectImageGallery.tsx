import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectImageGalleryProps {
  project: Project;
  className?: string;
}

export const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ 
  project, 
  className = '' 
}) => {
  const [selectedImage, setSelectedImage] = useState(project.images?.main || project.image);
  const [imageError, setImageError] = useState(false);

  const images = [
    { key: 'main', src: project.images?.main || project.image, label: 'Principal' },
    { key: 'mobile', src: project.images?.mobile, label: 'Mobile' },
    { key: 'features', src: project.images?.features, label: 'Features' },
    { key: 'dashboard', src: project.images?.dashboard, label: 'Dashboard' }
  ].filter(img => img.src);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Imagem Principal */}
      <div className="relative group overflow-hidden rounded-lg border border-gray-700">
        {!imageError && selectedImage ? (
          <Image 
            src={selectedImage}
            alt={`${project.name} - Screenshot`}
            width={800}
            height={450}
            className="w-full h-48 sm:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-48 sm:h-64 lg:h-72 bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center border border-gray-700">
            <div className="text-gray-500 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M4.99255 12.9841C4.44027 12.9841 3.99255 13.4318 3.99255 13.9841C3.99255 14.5364 4.44027 14.9841 4.99255 14.9841H18.9926C19.5448 14.9841 19.9926 14.5364 19.9926 13.9841C19.9926 13.4318 19.5448 12.9841 18.9926 12.9841H4.99255Z"></path>
                </svg>
              </div>
              <span className="text-sm">Screenshot em desenvolvimento</span>
            </div>
          </div>
        )}
        
        {/* Overlay com info */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">{project.name}</p>
            <p className="text-xs text-gray-300">Clique nas miniaturas para navegar</p>
          </div>
        </div>
      </div>

      {/* Miniaturas (se existirem múltiplas imagens) */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image) => (
            <button
              key={image.key}
              onClick={() => {
                if (image.src) {
                  setSelectedImage(image.src);
                  setImageError(false);
                }
              }}
              className={`flex-shrink-0 relative overflow-hidden rounded border-2 transition-all duration-200 ${
                selectedImage === image.src 
                  ? 'border-aqua-green shadow-lg shadow-aqua-green/20' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              {image.src && (
                <Image 
                  src={image.src}
                  alt={`${project.name} - ${image.label}`}
                  width={64}
                  height={48}
                  className="w-16 h-12 object-cover"
                  onError={(e) => {
                    // Se a miniatura falhar, esconde ela
                    (e.target as HTMLElement).parentElement?.style.setProperty('display', 'none');
                  }}
                />
              )}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-200"></div>
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                {image.label}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Indicadores de imagem */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-1">
          {images.map((image) => (
            <div
              key={image.key}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                selectedImage === image.src ? 'bg-aqua-green' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
