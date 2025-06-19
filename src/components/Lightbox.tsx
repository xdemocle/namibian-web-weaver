import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox = ({ src, alt, isOpen, onClose }: LightboxProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsImageLoaded(false); // Reset loading state when lightbox opens
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4' onClick={onClose}>
      <div className='relative max-w-7xl max-h-full flex flex-col items-center'>
        <button
          onClick={onClose}
          className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10'
          aria-label='Close lightbox'
        >
          <X size={32} />
        </button>

        {!isImageLoaded && (
          <div className='flex items-center justify-center max-w-full max-h-[90vh]'>
            <div className='flex flex-col items-center space-y-4'>
              <Skeleton className='w-96 h-96 bg-gray-700' />
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white'></div>
              <p className='text-white text-sm'>Loading image...</p>
            </div>
          </div>
        )}

        <img
          src={src}
          alt={alt}
          className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}
          onClick={e => e.stopPropagation()}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default Lightbox;
