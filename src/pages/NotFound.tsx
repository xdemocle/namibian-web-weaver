import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Seo from '../components/Seo';
import { companyInfo } from '../config/links';
import { localePath, useLocale, useT } from '../i18n';

const NotFound = () => {
  const location = useLocation();
  const t = useT();
  const locale = useLocale();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Seo
        title={t('notFound.seoTitle')}
        description={t('notFound.seoDescription')}
        path='/not-found'
        image={`${companyInfo.website}/og-image.jpg`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: t('notFound.seoTitle'),
        }}
      />
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>404</h1>
          <p className='text-xl text-gray-600 mb-4'>{t('notFound.text')}</p>
          <a href={localePath('/', locale)} className='text-blue-500 hover:text-blue-700 underline'>
            {t('notFound.returnHome')}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
