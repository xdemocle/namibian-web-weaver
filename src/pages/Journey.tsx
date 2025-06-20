import { useState } from 'react';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { companyInfo } from '../config/links';
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
  const journeyImages = [
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-43.jpg',
      alt: 'LizWise stand at innovation market sponsored by USA/UN',
      caption: 'LizWise showcase at innovation market event sponsored by USA/UN - presenting our products to a global audience',
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-44.jpg',
      alt: 'LizWise stand at small local market',
      caption: 'Our stand at a small local market - connecting with the community and sharing Namibian culinary traditions',
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-49.jpg',
      alt: 'LizWise stand at local market display',
      caption: 'LizWise products displayed at a local market - bringing authentic Namibian flavors to everyday shoppers',
    },
    {
      src: '/galleries/lizwise_journey/photo_2025-06-20_00-03-57.jpg',
      alt: 'LizWise team pitch at FNB Namibia emerging startups event',
      caption: 'Our entrepreneurial pitch at FNB Namibia emerging startups event - a milestone in our business growth journey',
    },
  ];

  // Making process images with captions
  const makingImages = [
    {
      src: '/galleries/the_makling_of/image0.jpg',
      alt: 'Raw mahangu (pearl millet) grains',
      caption: 'Premium mahangu (pearl millet) grains - the foundation of our nutritious pasta',
    },
    {
      src: '/galleries/the_makling_of/image2.jpg',
      alt: 'Milling process of mahangu grains',
      caption: 'Traditional milling process to create fine mahangu flour while preserving nutrients',
    },
    {
      src: '/galleries/the_makling_of/image3.jpg',
      alt: 'Pasta dough preparation',
      caption: 'Carefully mixing mahangu flour to create the perfect pasta dough consistency',
    },
    {
      src: '/galleries/the_makling_of/image4.jpg',
      alt: 'Pasta shaping and forming',
      caption: 'Shaping our pasta into various forms - fusilli, radiatori, and shells',
    },
    {
      src: '/galleries/the_makling_of/image5.jpg',
      alt: 'Fresh tomatoes for sauce making',
      caption: 'Fresh, locally-sourced tomatoes ready for our artisanal sauce production',
    },
    {
      src: '/galleries/the_makling_of/image6.jpg',
      alt: 'Sauce cooking and preparation',
      caption: 'Slow-cooking our sauces to develop rich, authentic flavors',
    },
    {
      src: '/galleries/the_makling_of/image7.jpg',
      alt: 'Mozzarella cheese making process',
      caption: 'Handcrafting fresh mozzarella cheese with traditional techniques',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-45.jpg',
      alt: 'Quality inspection of finished products',
      caption: 'Every product undergoes rigorous quality inspection before packaging',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-46.jpg',
      alt: 'Packaging and labeling process',
      caption: 'Careful packaging to preserve freshness and quality',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-47.jpg',
      alt: 'Team collaboration in production',
      caption: 'Our skilled team working together to maintain consistent quality',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-50 (2).jpg',
      alt: 'Final product quality check',
      caption: 'Final quality assurance before products reach our customers',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-51.jpg',
      alt: 'Storage and inventory management',
      caption: 'Proper storage ensuring products maintain their quality and freshness',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-52.jpg',
      alt: 'Distribution preparation',
      caption: 'Preparing orders for distribution to bring our products to your table',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-53.jpg',
      alt: 'Team meeting and planning',
      caption: 'Regular team meetings to ensure continuous improvement and innovation',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-54.jpg',
      alt: 'Equipment maintenance and care',
      caption: 'Maintaining our equipment to ensure consistent product quality',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-55.jpg',
      alt: 'Ingredient sourcing and selection',
      caption: 'Carefully sourcing the finest local ingredients for our products',
    },
    {
      src: '/galleries/the_makling_of/photo_2025-06-20_00-03-56.jpg',
      alt: 'Production line in action',
      caption: 'Our efficient production line combining traditional methods with modern efficiency',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every product is crafted with love and attention to detail',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Supporting local farmers and bringing families together through food',
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Using only the finest natural, locally-sourced ingredients',
    },
    {
      icon: Award,
      title: 'Traditional Excellence',
      description: 'Honoring Namibian culinary traditions with modern innovation',
    },
  ];

  return (
    <>
      <Seo
        title='LizWise Journey - The Making of Authentic Namibian Food | Our Story'
        description='Discover the story behind LizWise - from traditional Namibian recipes to modern food production. See how we craft mahangu pasta, artisanal sauces, and fresh mozzarella with care and tradition.'
        canonical={`${companyInfo.website}/journey`}
        image={`${companyInfo.website}/galleries/lizwise_journey/photo_2025-06-20_00-03-49.jpg`}
        schemaMarkup={schemaMarkup}
      />

      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>The LizWise Journey</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              From traditional Namibian recipes passed down through generations to modern food production - discover the
              story behind every LizWise product.
            </p>
          </div>

          {/* Our Values */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Our Values</h2>
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
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>Our Journey</h2>
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
            <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>The Making Of</h2>
            <p className='text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
              Take a behind-the-scenes look at how we transform traditional Namibian ingredients into the products you
              love. From farm to table, every step is guided by our commitment to quality and authenticity.
            </p>
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
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Experience Our Journey</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>
              Every LizWise product carries the story of our journey - from traditional Namibian heritage to your
              family's table. Taste the difference that passion and tradition make.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='/products'
                className='bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200'
              >
                Explore Our Products
              </a>
              <a
                href='/contact'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200'
              >
                Get in Touch
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
