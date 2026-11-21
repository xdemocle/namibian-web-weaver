import Seo from '../components/Seo';
import SocialLinks from '../components/SocialLinks';
import { companyInfo } from '../config/links';
import { useT } from '../i18n';

const About = () => {
  const t = useT();

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: companyInfo.name,
      description:
        'Locally made. Naturally nourishing. Proudly Namibian. We specialize in mahangu (pearl millet) pasta, rich pasta sauces, and creamy mozzarella.',
      foundingDate: '2018',
      foundingLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Windhoek',
          addressRegion: 'Khomas',
          addressCountry: 'Namibia',
        },
      },
    },
  };

  return (
    <>
      <Seo
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
        path='/about'
        image={`${companyInfo.website}/about-og-image.png`}
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>{t('about.title')}</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t('about.tagline')}</p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>{t('about.storyTitle')}</h2>
              <p className='text-lg text-gray-700 mb-6'>
                {t('about.storyText', { name: companyInfo.name, description: t('brand.description') })}
              </p>
              <p className='text-lg text-gray-700'>{t('about.storyText2')}</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-red-600 mb-4'>{t('about.valuesTitle')}</h3>
              <ul className='space-y-4'>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>{t('about.valueLocalSourcing')}</h4>
                    <p className='text-gray-600'>{t('about.valueLocalSourcingText')}</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>{t('about.valueQuality')}</h4>
                    <p className='text-gray-600'>{t('about.valueQualityText')}</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>{t('about.valueHeritage')}</h4>
                    <p className='text-gray-600'>{t('about.valueHeritageText')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className='bg-yellow-400 rounded-2xl p-8 md:p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>{t('about.visionTitle')}</h2>
            <p className='text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed'>{t('about.visionText')}</p>
          </div>

          {/* Social Media Section */}
          <div className='mt-16 text-center'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>{t('about.connectTitle')}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>{t('about.connectText')}</p>

            <SocialLinks className='max-w-5xl mx-auto' centered={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
