import { Award, Heart, Mail, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { companyInfo, contactInfo, socialLinks } from '../config/links';
import { localePath, useLocale, useT } from '../i18n';

import Thumbnail from '@/components/Thumbnail';
const Index = () => {
  const t = useT();
  const locale = useLocale();

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    description: t('brand.description'),
    url: companyInfo.website,
    logo: `${companyInfo.website}/logo.png`,
    sameAs: Object.values(socialLinks).map(social => social.url),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.phone.value,
      contactType: 'customer service',
    },
  };

  return (
    <>
      <Seo
        title={t('home.seoTitle')}
        description={t('home.seoDescription')}
        path='/'
        image={`${companyInfo.website}/og-image.jpg`}
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>{t('home.heroTitle')}</h1>
              <p className='text-xl mb-8 leading-relaxed'>{t('home.heroTagline')}</p>
              <p className='text-lg mb-8 opacity-90'>{t('brand.description')}</p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  to={localePath('/products', locale)}
                  className='bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center'
                >
                  {t('cta.exploreProducts')}
                </Link>
                <a
                  href={contactInfo.phone.url}
                  className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 text-center'
                >
                  {t('cta.callNow')}
                </a>
              </div>
            </div>
            <div className='relative flex items-center justify-center'>
              <Thumbnail
                src='/uploads/products/hero-pasta.jpg'
                alt='LizWise Mahangu Pasta - Radiatori variety made from pearl millet'
                priority
                className='w-auto h-auto rounded-2xl shadow-2xl max-h-[500px]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>{t('home.featuredTitle')}</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t('home.featuredSubtitle')}</p>
          </div>

          {/* Featured Product Showcase */}
          <div className='mb-16'>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <h3 className='text-3xl font-bold text-gray-800 mb-6'>{t('home.showcaseTitle')}</h3>
                  <p className='text-lg text-gray-600 mb-6 leading-relaxed'>{t('home.showcaseText')}</p>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <Heart className='text-red-600' size={20} />
                      <span className='text-gray-700'>{t('home.localIngredients')}</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Award className='text-yellow-500' size={20} />
                      <span className='text-gray-700'>{t('home.traditionalRecipes')}</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Star className='text-green-600' size={20} />
                      <span className='text-gray-700'>{t('home.premiumQuality')}</span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <Thumbnail
                    src='/uploads/products/range-square.jpg'
                    alt='LizWise Product Collection - Authentic Namibian Food Products'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <Thumbnail
                  src='/uploads/products/cat-pasta.jpg'
                  alt='LizWise Mahangu Pasta - Fusilli, Radiatori, Maccheroni and Shell varieties'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>{t('home.cardPasta.title')}</h3>
              <p className='text-gray-600 mb-6'>{t('home.cardPasta.text')}</p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ {t('home.cardPasta.f1')}</li>
                <li>✓ {t('home.cardPasta.f2')}</li>
                <li>✓ {t('home.cardPasta.f3')}</li>
              </ul>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <Thumbnail
                  src='/uploads/products/sauce-bolognese.jpg'
                  alt='Bolognaise Sauce 250ml'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>{t('home.cardSauces.title')}</h3>
              <p className='text-gray-600 mb-6'>{t('home.cardSauces.text')}</p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ {t('home.cardSauces.f1')}</li>
                <li>✓ {t('home.cardSauces.f2')}</li>
                <li>✓ {t('home.cardSauces.f3')}</li>
              </ul>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <Thumbnail
                  src='/uploads/334bac1f-2873-4490-bad4-d86057baaf2e.jpg'
                  alt='Smoked Mozzarella Cheese - Dairy Crafters 250g'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>{t('home.cardCheese.title')}</h3>
              <p className='text-gray-600 mb-6'>{t('home.cardCheese.text')}</p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ {t('home.cardCheese.f1')}</li>
                <li>✓ {t('home.cardCheese.f2')}</li>
                <li>✓ {t('home.cardCheese.f3')}</li>
              </ul>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <Thumbnail
                  src='/uploads/products/cat-breakfast.jpg'
                  alt='LizWise Mahangu Instant Porridge and Mahangu Rusks - Traditional African Foods'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>{t('home.cardBreakfast.title')}</h3>
              <p className='text-gray-600 mb-6'>{t('home.cardBreakfast.text')}</p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ {t('home.cardBreakfast.f1')}</li>
                <li>✓ {t('home.cardBreakfast.f2')}</li>
                <li>✓ {t('home.cardBreakfast.f3')}</li>
              </ul>
            </div>
          </div>

          <div className='text-center'>
            <Link
              to={localePath('/products', locale)}
              className='bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-block'
            >
              {t('cta.viewAllProducts')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>{t('home.missionTitle')}</h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                {t('home.missionText', { name: companyInfo.name, description: t('brand.description') })}
              </p>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>{t('home.missionText2')}</p>
              <Link
                to={localePath('/about', locale)}
                className='bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 inline-block'
              >
                {t('cta.learnMoreAboutUs')}
              </Link>
            </div>
            <div className='bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl p-8 text-white'>
              <h3 className='text-2xl font-bold mb-6'>{t('home.visionTitle')}</h3>
              <p className='text-lg leading-relaxed mb-6'>{t('home.visionText')}</p>
              <div className='grid grid-cols-2 gap-4 text-center'>
                <div>
                  <div className='text-3xl font-bold'>100%</div>
                  <div className='text-sm opacity-90'>{t('home.localSourced')}</div>
                </div>
                <div>
                  <div className='text-3xl font-bold'>15+</div>
                  <div className='text-sm opacity-90'>{t('home.yearsExperience')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='py-20 bg-gray-800 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>{t('home.readyTitle')}</h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto text-gray-300'>{t('home.readyText')}</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8'>
            <a
              href={contactInfo.phone.url}
              className='flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200'
            >
              <Phone size={20} />
              <span>{contactInfo.phone.value}</span>
            </a>
            <a
              href={contactInfo.email.url}
              className='flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200'
            >
              <Mail size={20} />
              <span>{t('cta.emailUs')}</span>
            </a>
          </div>

          <Link
            to={localePath('/contact', locale)}
            className='bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 inline-block'
          >
            {t('cta.visitContactPage')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
