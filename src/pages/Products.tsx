import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { companyInfo, contactInfo } from '../config/links';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useT } from '../i18n';

import Thumbnail from '@/components/Thumbnail';
const Products = () => {
  const t = useT();

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: t('products.schema.pasta.name'),
          description: t('products.schema.pasta.description'),
          image: `${companyInfo.website}/uploads/products/cat-pasta.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: t('products.schema.sauces.name'),
          description: t('products.schema.sauces.description'),
          image: `${companyInfo.website}/uploads/products/card-sauces.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: t('products.schema.cheese.name'),
          description: t('products.schema.cheese.description'),
          image: `${companyInfo.website}/uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          name: t('products.schema.crackers.name'),
          description: t('products.schema.crackers.description'),
          image: `${companyInfo.website}/uploads/products/crackers.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Product',
          name: t('products.schema.porridge.name'),
          description: t('products.schema.porridge.description'),
          image: `${companyInfo.website}/uploads/products/porridge.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Product',
          name: t('products.schema.rusks.name'),
          description: t('products.schema.rusks.description'),
          image: `${companyInfo.website}/uploads/products/rusks.jpg`,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      },
    ],
  };

  const products = [
    {
      title: t('products.card.pasta.title'),
      description: t('products.card.pasta.text'),
      features: [
        t('products.card.pasta.f1'),
        t('products.card.pasta.f2'),
        t('products.card.pasta.f3'),
        t('products.card.pasta.f4'),
      ],
      color: 'bg-red-600',
      image: '/uploads/products/cat-pasta.jpg',
    },
    {
      title: t('products.card.sauces.title'),
      description: t('products.card.sauces.text'),
      features: [
        t('products.card.sauces.f1'),
        t('products.card.sauces.f2'),
        t('products.card.sauces.f3'),
        t('products.card.sauces.f4'),
      ],
      color: 'bg-green-600',
      image: '/uploads/products/card-sauces.jpg',
    },
    {
      title: t('products.card.cheese.title'),
      description: t('products.card.cheese.text'),
      features: [
        t('products.card.cheese.f1'),
        t('products.card.cheese.f2'),
        t('products.card.cheese.f3'),
        t('products.card.cheese.f4'),
      ],
      color: 'bg-yellow-500',
      image: '/uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.jpg',
    },
    {
      title: t('products.card.breakfast.title'),
      description: t('products.card.breakfast.text'),
      features: [
        t('products.card.breakfast.f1'),
        t('products.card.breakfast.f2'),
        t('products.card.breakfast.f3'),
        t('products.card.breakfast.f4'),
      ],
      color: 'bg-amber-600',
      image: '/uploads/products/cat-breakfast.jpg',
    },
  ];

  return (
    <>
      <Seo
        title={t('products.seoTitle')}
        description={t('products.seoDescription')}
        path='/products'
        image={`${companyInfo.website}/products-og-image.jpg`}
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>{t('products.title')}</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>{t('products.subtitle')}</p>
          </div>

          {/* Featured Product Image */}
          <div className='mb-16'>
            <Card className='overflow-hidden'>
              <AspectRatio ratio={16 / 9}>
                <Thumbnail
                  src='/uploads/products/range-banner.jpg'
                  alt='The LizWise product range - mahangu pasta, porridge, rusks and crackers'
                  priority
                  className='object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300'
                  onClick={() =>
                    handleImageClick(
                      '/uploads/products/range-banner.jpg',
                      'The LizWise product range - mahangu pasta, porridge, rusks and crackers'
                    )
                  }
                />
              </AspectRatio>
              <CardContent className='p-6 bg-white'>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>{t('products.featuredTitle')}</h3>
                <p className='text-gray-600'>{t('products.featuredText')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {products.map((product, index) => (
              <Card key={index} className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className={`${product.color} h-2`}></div>
                <AspectRatio ratio={4 / 3} className='bg-gray-100'>
                  <Thumbnail
                    src={product.image}
                    alt={product.title}
                    className='object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => handleImageClick(product.image, product.title)}
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle className='text-xl text-gray-800'>{product.title}</CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <p className='text-gray-600 mb-4 leading-relaxed'>{product.description}</p>
                  <ul className='space-y-2'>
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center space-x-3'>
                        <div className={`w-2 h-2 ${product.color} rounded-full`}></div>
                        <span className='text-gray-700 text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Product Details Section */}
          <div id='mahangu-pasta' className='mb-16 scroll-mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>{t('products.section.pasta')}</h2>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
                <div>
                  <Thumbnail
                    src='/uploads/products/pasta-fusilli.jpg'
                    alt='Fusilli Mahangu Pasta - Pearl Millet 500g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/products/pasta-fusilli.jpg',
                        'Fusilli Mahangu Pasta - Pearl Millet 500g'
                      )
                    }
                  />
                  <h4 className='font-semibold text-lg text-red-600'>{t('products.pasta.fusilli.title')}</h4>
                  <p className='text-gray-600'>{t('products.pasta.fusilli.text')}</p>
                </div>
                <div>
                  <Thumbnail
                    src='/uploads/products/pasta-radiatori.jpg'
                    alt='Radiatori Mahangu Pasta - Pearl Millet 500g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/products/pasta-radiatori.jpg',
                        'Radiatori Mahangu Pasta - Pearl Millet 500g'
                      )
                    }
                  />
                  <h4 className='font-semibold text-lg text-red-600'>{t('products.pasta.radiatori.title')}</h4>
                  <p className='text-gray-600'>{t('products.pasta.radiatori.text')}</p>
                </div>
                <div>
                  <Thumbnail
                    src='/uploads/products/pasta-maccheroni.jpg'
                    alt='Maccheroni Mahangu Pasta - Pearl Millet 500g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/products/pasta-maccheroni.jpg',
                        'Maccheroni Mahangu Pasta - Pearl Millet 500g'
                      )
                    }
                  />
                  <h4 className='font-semibold text-lg text-red-600'>{t('products.pasta.maccheroni.title')}</h4>
                  <p className='text-gray-600'>{t('products.pasta.maccheroni.text')}</p>
                </div>
                <div>
                  <Thumbnail
                    src='/uploads/products/pasta-shell.jpg'
                    alt='Shell Mahangu Pasta - Pearl Millet 500g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick('/uploads/products/pasta-shell.jpg', 'Shell Mahangu Pasta - Pearl Millet 500g')
                    }
                  />
                  <h4 className='font-semibold text-lg text-red-600'>{t('products.pasta.shells.title')}</h4>
                  <p className='text-gray-600'>{t('products.pasta.shells.text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Varieties Section */}
          <div id='pasta-sauces' className='mb-16 scroll-mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>{t('products.section.sauces')}</h2>
            <div className='bg-green-50 rounded-2xl p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <Thumbnail
                    src='/uploads/products/sauce-bolognese.jpg'
                    alt='Bolognaise Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => handleImageClick('/uploads/products/sauce-bolognese.jpg', 'Bolognaise Sauce 250ml')}
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>{t('products.sauce.bolognaise.title')}</h4>
                  <p className='text-gray-600'>{t('products.sauce.bolognaise.text')}</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <Thumbnail
                    src='/uploads/products/sauce-tomato.jpg'
                    alt='Tomato Purée Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => handleImageClick('/uploads/products/sauce-tomato.jpg', 'Tomato Purée Sauce 250ml')}
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>{t('products.sauce.tomato.title')}</h4>
                  <p className='text-gray-600'>{t('products.sauce.tomato.text')}</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <Thumbnail
                    src='/uploads/products/sauce-chilli.jpg'
                    alt='Tomato Purée Chilli Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick('/uploads/products/sauce-chilli.jpg', 'Tomato Purée Chilli Sauce 250ml')
                    }
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>{t('products.sauce.chilli.title')}</h4>
                  <p className='text-gray-600'>{t('products.sauce.chilli.text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional African Foods Section */}
          <div id='traditional-african-foods' className='mb-16 scroll-mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>{t('products.section.breakfast')}</h2>
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-8'>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
                  <div className='md:flex'>
                    <div className='md:w-2/5'>
                      <Thumbnail
                        src='/uploads/products/porridge.jpg'
                        alt='LizWise Mahangu Instant Porridge - Pearl Millet 500g'
                        className='w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-300'
                        onClick={() =>
                          handleImageClick(
                            '/uploads/products/porridge.jpg',
                            'LizWise Mahangu Instant Porridge - Pearl Millet 500g'
                          )
                        }
                      />
                    </div>
                    <div className='md:w-3/5 p-6 md:p-8'>
                      <h4 className='font-semibold text-lg text-amber-700 mb-3'>
                        {t('products.breakfast.porridge.title')}
                      </h4>
                      <p className='text-gray-600 mb-4'>{t('products.breakfast.porridge.text')}</p>
                      <ul className='space-y-2'>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.porridge.f1')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.porridge.f2')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.porridge.f3')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.porridge.f4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
                  <div className='md:flex'>
                    <div className='md:w-2/5'>
                      <Thumbnail
                        src='/uploads/products/rusks.jpg'
                        alt='LizWise Mahangu Rusks - Pearl Millet 500g'
                        className='w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-300'
                        onClick={() =>
                          handleImageClick('/uploads/products/rusks.jpg', 'LizWise Mahangu Rusks - Pearl Millet 500g')
                        }
                      />
                    </div>
                    <div className='md:w-3/5 p-6 md:p-8'>
                      <h4 className='font-semibold text-lg text-amber-700 mb-3'>
                        {t('products.breakfast.rusks.title')}
                      </h4>
                      <p className='text-gray-600 mb-4'>{t('products.breakfast.rusks.text')}</p>
                      <ul className='space-y-2'>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.rusks.f1')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.rusks.f2')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.rusks.f3')}</li>
                        <li className='text-gray-700 text-sm'>• {t('products.breakfast.rusks.f4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cheese Varieties Section */}
          <div id='mozzarella-cheese' className='mb-16 scroll-mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>{t('products.section.cheese')}</h2>
            <div className='bg-yellow-50 rounded-2xl p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                <div>
                  <Thumbnail
                    src='/uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.jpg'
                    alt='LizWise Dairy Crafters Mozzarella Cheese - Product of Namibia'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.jpg',
                        'LizWise Dairy Crafters Mozzarella Cheese - Product of Namibia'
                      )
                    }
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>{t('products.cheese.classic.title')}</h4>
                  <p className='text-gray-600'>{t('products.cheese.classic.text')}</p>
                </div>
                <div>
                  <Thumbnail
                    src='/uploads/334bac1f-2873-4490-bad4-d86057baaf2e.jpg'
                    alt='Smoked Mozzarella Cheese - Dairy Crafters 250g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/334bac1f-2873-4490-bad4-d86057baaf2e.jpg',
                        'Smoked Mozzarella Cheese - Dairy Crafters 250g'
                      )
                    }
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>{t('products.cheese.smoked.title')}</h4>
                  <p className='text-gray-600'>{t('products.cheese.smoked.text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mr Millet Crackers Section */}
          <div id='mr-millet-crackers' className='mb-16 scroll-mt-24'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>{t('products.section.crackers')}</h2>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='md:flex'>
                <div className='md:w-1/2'>
                  <Thumbnail
                    src='/uploads/products/crackers.jpg'
                    alt='Mr Millet Crackers - Original Flavoured Snack'
                    className='w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick(
                        '/uploads/products/crackers.jpg',
                        'Mr Millet Crackers - Original Flavoured Snack'
                      )
                    }
                  />
                </div>
                <div className='md:w-1/2 p-8 md:p-12'>
                  <h3 className='text-2xl font-bold text-gray-800 mb-6'>{t('products.crackers.flavour')}</h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>{t('products.crackers.text')}</p>
                  <p className='text-gray-600 mb-8 leading-relaxed'>{t('products.crackers.text2')}</p>

                  <h4 className='text-xl font-semibold text-gray-800 mb-4'>{t('products.crackers.featuresTitle')}</h4>
                  <ul className='list-disc pl-5 mb-8 space-y-2'>
                    <li className='text-gray-600'>{t('products.crackers.f1')}</li>
                    <li className='text-gray-600'>{t('products.crackers.f2')}</li>
                    <li className='text-gray-600'>{t('products.crackers.f3')}</li>
                    <li className='text-gray-600'>{t('products.crackers.f4')}</li>
                    <li className='text-gray-600'>{t('products.crackers.f5')}</li>
                    <li className='text-gray-600'>{t('products.crackers.f6')}</li>
                  </ul>

                  <div className='flex flex-col sm:flex-row gap-4'>
                    <a
                      href='#'
                      className='bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold inline-block text-center'
                      onClick={e => {
                        e.preventDefault();
                        handleImageClick(
                          '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-2.jpg',
                          'Mr Millet Crackers packaging and nutritional information'
                        );
                      }}
                    >
                      {t('cta.viewNutritionalInfo')}
                    </a>
                    <a
                      href='/contact'
                      className='border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 inline-block text-center'
                    >
                      {t('cta.contactForOrders')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t('products.ctaTitle')}</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>{t('products.ctaText')}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={contactInfo.phone.url}
                className='bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200'
              >
                {t('cta.callNow')} {contactInfo.phone.value}
              </a>
              <a
                href={contactInfo.email.url}
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200'
              >
                {t('cta.emailUs')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        src={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Products;
