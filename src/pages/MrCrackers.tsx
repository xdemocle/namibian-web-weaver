import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { companyInfo } from '../config/links';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mr Crackers - Mahangu Delight',
  description:
    'Discover our premium Mr Crackers range made with authentic Namibian mahangu. Crispy, nutritious, and perfect for any occasion.',
  image: `${companyInfo.website}/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-0.jpg`,
  brand: {
    '@type': 'Brand',
    name: 'LizWise',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
  },
};

const MrCrackers = () => {
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

  // Mr Crackers product images
  const crackerImages = [
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-0.jpg',
      alt: 'Mr Crackers Mahangu Delight packaging front view',
    },
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-1.jpg',
      alt: 'Mr Crackers Mahangu Delight packaging side view',
    },
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-2.jpg',
      alt: 'Mr Crackers Mahangu Delight packaging rear view with nutritional information',
    },
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-3.jpg',
      alt: 'Mr Crackers Mahangu Delight product display',
    },
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-4.jpg',
      alt: 'Mr Crackers Mahangu Delight product showcase',
    },
    {
      src: '/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-5.jpg',
      alt: 'Mr Crackers Mahangu Delight product arrangement',
    },
  ];

  // Product features
  const features = [
    'Made with authentic Namibian mahangu (pearl millet)',
    'High in fiber and essential nutrients',
    'No artificial preservatives or additives',
    'Crispy texture perfect for dips and toppings',
    'Locally produced with traditional recipes',
    'Sustainable packaging and production methods',
  ];

  return (
    <>
      <Seo
        title='Mr Crackers - Mahangu Delight | LizWise Premium Crackers'
        description='Discover our premium Mr Crackers range made with authentic Namibian mahangu. Crispy, nutritious, and perfect for any occasion.'
        canonical={`${companyInfo.website}/mr-crackers`}
        image={`${companyInfo.website}/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-0.jpg`}
        schemaMarkup={schemaMarkup}
      />

      <div className='py-16 bg-gradient-to-br from-amber-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>Mr Crackers</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Taste the authentic flavor of Namibia with our premium Mahangu Delight crackers. Crispy, nutritious, and
              perfect for any occasion.
            </p>
          </div>

          {/* Product Showcase */}
          <div className='mb-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {crackerImages.map((image, index) => (
                <Card key={index} className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                  <AspectRatio ratio={1}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className='object-cover w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300'
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </AspectRatio>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div className='mb-16'>
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
              <div className='md:flex'>
                <div className='md:w-1/2'>
                  <img
                    src='/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-0.jpg'
                    alt='Mr Crackers Mahangu Delight packaging'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='md:w-1/2 p-8 md:p-12'>
                  <h2 className='text-3xl font-bold text-gray-800 mb-6'>Mahangu Delight</h2>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Mr Crackers brings you the authentic taste of Namibia with our premium Mahangu Delight crackers.
                    Crafted from locally sourced mahangu (pearl millet), these crackers offer a unique flavor profile and
                    nutritional benefits that set them apart from ordinary crackers.
                  </p>
                  <p className='text-gray-600 mb-8 leading-relaxed'>
                    Perfect for snacking, entertaining, or pairing with your favorite dips and toppings, Mr Crackers
                    Mahangu Delight brings the rich culinary heritage of Namibia to your table.
                  </p>

                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>Key Features:</h3>
                  <ul className='list-disc pl-5 mb-8 space-y-2'>
                    {features.map((feature, index) => (
                      <li key={index} className='text-gray-600'>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Button
                      className='bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold'
                      onClick={() => handleImageClick('/uploads/mr-crackers/Mahangu_Delight_Mr_Crackers_mockups.pdf-images-2.jpg', 'Mr Crackers Nutritional Information')}
                    >
                      View Nutritional Info
                    </Button>
                    <Button
                      variant="outline"
                      className='border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50'
                      asChild
                    >
                      <a href='/contact'>Contact for Orders</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className='bg-amber-600 rounded-2xl p-8 md:p-12 text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Try Mr Crackers Today</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>
              Experience the unique taste and nutritional benefits of our premium Mahangu Delight crackers. Perfect for
              health-conscious snackers and those who appreciate authentic Namibian flavors.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/products'
                className='bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200'
              >
                Explore More Products
              </a>
              <a
                href='/contact'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200'
              >
                Place an Order
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

export default MrCrackers;
