import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { companyInfo, contactInfo } from '../config/links';
import { useT } from '../i18n';
import { Card, CardContent } from './ui/card';

interface ContactInfoProps {
  className?: string;
  showWhatsApp?: boolean;
  layout?: 'grid' | 'list';
}

const ContactInfo = ({ className = '', showWhatsApp = true, layout = 'grid' }: ContactInfoProps) => {
  const t = useT();

  if (layout === 'list') {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className='flex items-center space-x-3'>
          <Phone size={18} className='text-red-400' />
          <a href={contactInfo.phone.url} className='hover:underline'>
            {contactInfo.phone.value}
          </a>
        </div>
        <div className='flex items-center space-x-3'>
          <Mail size={18} className='text-red-400' />
          <a href={contactInfo.email.url} className='hover:underline'>
            {contactInfo.email.value}
          </a>
        </div>
        <div className='flex items-center space-x-3'>
          <MapPin size={18} className='text-red-400' />
          <span>{contactInfo.address.value}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
        <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center'>
          <Phone className='text-red-600' size={24} />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>{t('contactInfo.phoneTitle')}</h3>
          <p className='text-gray-600 mb-2'>{t('contactInfo.phoneDescription')}</p>
          <div className='space-y-2'>
            <a href={contactInfo.phone.url} className='block text-red-600 font-semibold hover:text-red-700'>
              {contactInfo.phone.value}
            </a>
            {showWhatsApp && (
              <a
                href={contactInfo.whatsapp.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-green-600 hover:text-green-700 text-sm font-medium'
              >
                <MessageCircle className='w-4 h-4 mr-1' />
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
        <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
          <Mail className='text-green-600' size={24} />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>{t('contactInfo.emailTitle')}</h3>
          <p className='text-gray-600 mb-2'>{t('contactInfo.emailDescription')}</p>
          <a href={contactInfo.email.url} className='text-green-600 font-semibold hover:text-green-700'>
            {contactInfo.email.value}
          </a>
        </div>
      </div>

      <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
        <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
          <MapPin className='text-yellow-600' size={24} />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>{t('contactInfo.locationTitle')}</h3>
          <p className='text-gray-600 mb-2'>{t('contactInfo.locationDescription')}</p>
          <address className='text-yellow-600 font-semibold not-italic'>
            {contactInfo.address.lines.map(line => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
        <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
          <Clock className='text-blue-600' size={24} />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>{t('contactInfo.hoursTitle')}</h3>
          <p className='text-gray-600 mb-2'>
            {t('contactInfo.hoursWeekday', { hours: companyInfo.businessHours.weekdays })}
          </p>
          <p className='text-gray-600'>{t('contactInfo.hoursWeekend')}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
