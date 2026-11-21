import { useState } from 'react';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { companyInfo } from '../config/links';
import { localePath, useLocale, useT } from '../i18n';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'LizWise Journey - The Making of Authentic Namibian Food Products',
  description:
    'Discover the story behind LizWise - from traditional Namibian recipes to modern food production. See how we craft mahangu pasta, artisanal sauces, and fresh mozzarella with care and tradition.',
  author: {
    '@type': 'Organization',
    name: companyInfo.name,
  },
  publisher: {
    '@type': 'Organization',
    name: companyInfo.name,
    logo: {
      '@type': 'ImageObject',
      url: `${companyInfo.website}/android-chrome-192x192.png`,
    },
  },
  image: `${companyInfo.website}/galleries/lizwise_journey/photo_2025-06-20_00-03-49.jpg`,
};

const Journey = () => {
  const t = useT();
  const locale = useLocale();

  // Journey story images with captions
  const journeyImages = [
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-43.jpg',
      alt: t('journey.img.innovationMarket.alt'),
      caption: t('journey.img.innovationMarket.caption'),
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-44.jpg',
      alt: t('journey.img.localMarket.alt'),
      caption: t('journey.img.localMarket.caption'),
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-49.jpg',
      alt: t('journey.img.marketDisplay.alt'),
      caption: t('journey.img.marketDisplay.caption'),
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-57.jpg',
      alt: t('journey.img.fnbPitch.alt'),
      caption: t('journey.img.fnbPitch.caption'),
    },
    {
      src: '/galleries/new/event_launch-0028.jpg',
      alt: t('journey.img.launch.alt'),
      caption: t('journey.img.launch.caption'),
    },
    {
      src: '/galleries/new/event_tradeshow-0029.jpg',
      alt: t('journey.img.tradeShow.alt'),
      caption: t('journey.img.tradeShow.caption'),
    },
    {
      src: '/galleries/new/event_ambassadors-0033.jpg',
      alt: t('journey.img.ambassadors.alt'),
      caption: t('journey.img.ambassadors.caption'),
    },
    {
      src: '/galleries/new/event_branding-0036.jpg',
      alt: t('journey.img.branding.alt'),
      caption: t('journey.img.branding.caption'),
    },
  ];

  // Making process images with captions
  const makingImages = [
    {
      src: '/galleries/the_makling_of/image0.jpg',
      alt: t('journey.img.sourdough.alt'),
      caption: t('journey.img.sourdough.caption'),
    },
    {
      src: '/galleries/the_makling_of/image2.jpg',
      alt: t('journey.img.rawTomatoes.alt'),
      caption: t('journey.img.rawTomatoes.caption'),
    },
    {
      src: '/galleries/the_makling_of/image3.jpg',
      alt: t('journey.img.tomatoSauce.alt'),
      caption: t('journey.img.tomatoSauce.caption'),
    },
    {
      src: '/galleries/the_makling_of/image4.jpg',
      alt: t('journey.img.burrata.alt'),
      caption: t('journey.img.burrata.caption'),
    },
    {
      src: '/galleries/the_makling_of/image5.jpg',
      alt: t('journey.img.ricotta.alt'),
      caption: t('journey.img.ricotta.caption'),
    },
    {
      src: '/galleries/the_makling_of/image6.jpg',
      alt: t('journey.img.burrataPrep.alt'),
      caption: t('journey.img.burrataPrep.caption'),
    },
    {
      src: '/galleries/the_makling_of/image7.jpg',
      alt: t('journey.img.pastaDish.alt'),
      caption: t('journey.img.pastaDish.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-45.jpg',
      alt: t('journey.img.packagedCheese.alt'),
      caption: t('journey.img.packagedCheese.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-46.jpg',
      alt: t('journey.img.jarredSauces.alt'),
      caption: t('journey.img.jarredSauces.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-47.jpg',
      alt: t('journey.img.pastaProduction.alt'),
      caption: t('journey.img.pastaProduction.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-50 (2).jpg',
      alt: t('journey.img.pastaSample.alt'),
      caption: t('journey.img.pastaSample.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-53.jpg',
      alt: t('journey.img.scamorza.alt'),
      caption: t('journey.img.scamorza.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-54.jpg',
      alt: t('journey.img.ricottaFilling.alt'),
      caption: t('journey.img.ricottaFilling.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-55.jpg',
      alt: t('journey.img.qaSamples.alt'),
      caption: t('journey.img.qaSamples.caption'),
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-56.jpg',
      alt: t('journey.img.moreSamples.alt'),
      caption: t('journey.img.moreSamples.caption'),
    },
    {
      src: '/galleries/new/making_kitchen-0030.jpg',
      alt: t('journey.img.kitchen.alt'),
      caption: t('journey.img.kitchen.caption'),
    },
    {
      src: '/galleries/new/making_mahangu-grain-0027.jpg',
      alt: t('journey.img.mahanguGrain.alt'),
      caption: t('journey.img.mahanguGrain.caption'),
    },
  ];

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

  // Journey story images with captions

  // Making process images with captions

  const values = [
    {
      icon: Heart,
      title: t('journey.valueQuality'),
      description: t('journey.valueQualityText'),
    },
    {
      icon: Users,
      title: t('journey.valueCommunity'),
      description: t('journey.valueCommunityText'),
    },
    {
      icon: Leaf,
      title: t('journey.valueNatural'),
      description: t('journey.valueNaturalText'),
    },
    {
      icon: Award,
      title: t('journey.valueExcellence'),
      description: t('journey.valueExcellenceText'),
    },
  ];

  return (
    <>
      <Seo
        title={t('journey.seoTitle')}
        description={t('journey.seoDescription')}
        path='/journey'
        image={`${companyInfo.website}/galleries/lizwise_journey/photo_2025-06-20_00-03-49.jpg`}
        schemaMarkup={schemaMarkup}
      />

      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>{t('journey.title')}</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>{t('journey.subtitle')}</p>
          </div>

          {/* Our Values */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>{t('journey.valuesTitle')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {values.map((value, index) => (
                <Card key={index} className='text-center p-6 hover:shadow-lg transition-shadow duration-300'>
                  <CardContent className='pt-6'>
                    <div className='w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center'>
                      <value.icon className='w-8 h-8 text-red-600' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-3'>{value.title}</h3>
                    <p className='text-gray-600'>{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Journey Story */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>{t('journey.storyTitle')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {journeyImages.map((image, index) => (
                <Card key={index} className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300'
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </AspectRatio>
                  <CardContent className='p-4'>
                    <p className='text-sm text-gray-700'>{image.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Making Process */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>{t('journey.makingTitle')}</h2>
            <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>{t('journey.makingText')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {makingImages.map((image, index) => (
                <Card key={index} className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                  <AspectRatio ratio={1}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300'
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </AspectRatio>
                  <CardContent className='p-3'>
                    <p className='text-gray-700 text-xs leading-relaxed'>{image.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className='bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>{t('journey.ctaTitle')}</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>{t('journey.ctaText')}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={localePath('/products', locale)}
                className='bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200'
              >
                {t('cta.exploreProducts')}
              </a>
              <a
                href={localePath('/contact', locale)}
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200'
              >
                {t('journey.ctaContact')}
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

export default Journey;
