import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  whatsappUrl: string;
  showTooltip?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  whatsappUrl,
  showTooltip = true,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {showTooltip && isTooltipVisible && (
        <div className='absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md mb-2 text-sm whitespace-nowrap'>
          Chat with us on WhatsApp
          <div className='absolute -bottom-2 right-4 w-3 h-3 bg-white transform rotate-45'></div>
        </div>
      )}
      <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl'
        aria-label='Contact us on WhatsApp'
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
