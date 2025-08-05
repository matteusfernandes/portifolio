import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ImageModal } from './ImageModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset state when project changes
  useEffect(() => {
    setSelectedImage(project.images?.main || project.image);
    setImageError(false);
  }, [project.id, project.images?.main, project.image]);

  const images = [
    { key: 'main', src: project.images?.main || project.image, label: 'Principal' },
    { key: 'mobile', src: project.images?.mobile, label: 'Mobile' },
    { key: 'features', src: project.images?.features, label: 'Features' },
    { key: 'dashboard', src: project.images?.dashboard, label: 'Dashboard' }
  ].filter(img => img.src);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageClick = () => {
    if (!imageError && selectedImage) {
      setIsModalOpen(true);
    }
  };

  const getImageLabel = () => {
    const currentImage = images.find(img => img.src === selectedImage);
    return currentImage ? currentImage.label : 'Screenshot';
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Imagem Principal */}
      <div 
        className="relative group overflow-hidden rounded-lg border border-gray-700 cursor-pointer"
        onClick={handleImageClick}
      >
        {!imageError && selectedImage ? (
          <Image 
            src={selectedImage}
            alt={`${project.name} - ${getImageLabel()}`}
            width={800}
            height={450}
            className="w-full h-48 sm:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-48 sm:h-64 lg:h-72 xl:h-80 bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center border border-gray-700">
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
        
        {/* Overlay com info melhorado */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M11 2V4H13V2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2H11ZM4 4V20H20V4H15V8H9V4H4ZM11 4V6H13V4H11Z"></path>
              </svg>
            </div>
            <p className="text-sm font-medium">Clique para ampliar</p>
            <p className="text-xs text-gray-300">{getImageLabel()}</p>
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

      {/* Modal para ampliar imagem */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage || ''}
        imageAlt={`${project.name} - ${getImageLabel()}`}
        projectName={project.name}
      />
    </div>
  );
};
