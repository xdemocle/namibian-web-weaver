import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import Seo from '../components/Seo';
import { companyInfo, contactInfo } from '../config/links';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Mahangu Pasta',
        description:
          'Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, Maccheroni and Shell shapes. 100% Namibian pearl millet, 500g.',
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
        name: 'Ready-Made Pasta Sauces',
        description:
          'Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Puree and Tomato Puree Chilli, 250ml.',
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
        name: 'Mozzarella Cheese',
        description:
          'Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.',
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
        name: 'Mr Millet Crackers',
        description:
          'Original flavoured millet crackers. Crisp, made from locally sourced millet and a tasty everyday snack, 300g.',
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
        name: 'Mahangu Instant Porridge',
        description: 'Nutritious, wholesome and ready in seconds. Made with 100% mahangu (pearl millet), 500g.',
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
        name: 'Mahangu Rusks',
        description:
          'Crisp mahangu rusks made with 100% mahangu (pearl millet). Naturally gluten-free and perfect for coffee, tea and snacking, 500g.',
        image: `${companyInfo.website}/uploads/products/rusks.jpg`,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
        },
      },
    },
  ],
};

const Products = () => {
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

  const products = [
    {
      title: 'Mahangu Pasta',
      description:
        'Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, Maccheroni and Shell shapes. 100% Namibian pearl millet.',
      features: ['Gluten-friendly', 'High in fiber', '100% Namibian millet', 'Various shapes available'],
      color: 'bg-red-600',
      image: '/uploads/products/cat-pasta.jpg',
    },
    {
      title: 'Ready-Made Pasta Sauces',
      description:
        'Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.',
      features: ['Made from real tomatoes', 'Local flavors', 'Bolognaise variety', 'Tomato Purée & Chilli'],
      color: 'bg-green-600',
      image: '/uploads/products/card-sauces.jpg',
    },
    {
      title: 'Mozzarella Cheese',
      description:
        'Soft, stretchy, and perfect for home cooking. Ideal for pizzas, pasta bakes, sandwiches, fresh salads or anything you would like to pair it with.',
      features: ['Soft and stretchy', 'Perfect for cooking', 'Ideal for pizzas', 'Great for salads'],
      color: 'bg-yellow-500',
      image: '/uploads/0c10c80d-b1c6-4cc9-bfe3-a3549278aed9.jpg',
    },
    {
      title: 'Traditional African Foods',
      description:
        'Mahangu Instant Porridge and Mahangu Rusks - naturally gluten-free breakfast and snack staples crafted from 100% Namibian pearl millet.',
      features: [
        'Made with 100% mahangu',
        'Naturally gluten-free',
        'Ready in seconds',
        'Great for coffee, tea & snacking',
      ],
      color: 'bg-amber-600',
      image: '/uploads/products/cat-breakfast.jpg',
    },
  ];

  return (
    <>
      <Seo
        title='LizWise Products - Mahangu Pasta, Sauces, Porridge & Rusks'
        description='Proudly Namibian products: gluten-friendly mahangu pasta from pearl millet, flavorful pasta sauces, mahangu instant porridge and rusks, and creamy mozzarella - all locally made.'
        canonical={`${companyInfo.website}/products`}
        image={`${companyInfo.website}/products-og-image.jpg`}
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>Our Products</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Discover our range of locally sourced, traditionally crafted Namibian food products
            </p>
          </div>

          {/* Featured Product Image */}
          <div className='mb-16'>
            <Card className='overflow-hidden'>
              <AspectRatio ratio={16 / 9}>
                <img
                  src='/uploads/products/range-banner.jpg'
                  alt='The LizWise product range - mahangu pasta, porridge, rusks and crackers'
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
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>Taste Namibia with LizWise</h3>
                <p className='text-gray-600'>
                  From our family to yours - traditional recipes crafted with locally sourced ingredients, bringing the
                  authentic taste of Namibia to your table. Locally made. Naturally nourishing. Proudly Namibian.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
            {products.map((product, index) => (
              <Card key={index} className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <div className={`${product.color} h-2`}></div>
                <AspectRatio ratio={4 / 3} className='bg-gray-100'>
                  <img
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
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Pasta Varieties</h2>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
                <div>
                  <img
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
                  <h4 className='font-semibold text-lg text-red-600'>Fusilli</h4>
                  <p className='text-gray-600'>Spiral-shaped pasta perfect for holding sauces</p>
                </div>
                <div>
                  <img
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
                  <h4 className='font-semibold text-lg text-red-600'>Radiatori</h4>
                  <p className='text-gray-600'>Unique radiator-shaped pasta with excellent texture</p>
                </div>
                <div>
                  <img
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
                  <h4 className='font-semibold text-lg text-red-600'>Maccheroni</h4>
                  <p className='text-gray-600'>Classic tube-shaped pasta for every sauce</p>
                </div>
                <div>
                  <img
                    src='/uploads/products/pasta-shell.jpg'
                    alt='Shell Mahangu Pasta - Pearl Millet 500g'
                    className='w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick('/uploads/products/pasta-shell.jpg', 'Shell Mahangu Pasta - Pearl Millet 500g')
                    }
                  />
                  <h4 className='font-semibold text-lg text-red-600'>Shells</h4>
                  <p className='text-gray-600'>Classic shell shapes for versatile cooking applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sauce Varieties Section */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Sauce Collection</h2>
            <div className='bg-green-50 rounded-2xl p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <img
                    src='/uploads/products/sauce-bolognese.jpg'
                    alt='Bolognaise Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => handleImageClick('/uploads/products/sauce-bolognese.jpg', 'Bolognaise Sauce 250ml')}
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>Bolognaise</h4>
                  <p className='text-gray-600'>Rich, hearty meat sauce with authentic flavors</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <img
                    src='/uploads/products/sauce-tomato.jpg'
                    alt='Tomato Purée Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() => handleImageClick('/uploads/products/sauce-tomato.jpg', 'Tomato Purée Sauce 250ml')}
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>Tomato Purée</h4>
                  <p className='text-gray-600'>Pure tomato goodness for versatile cooking</p>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-sm'>
                  <img
                    src='/uploads/products/sauce-chilli.jpg'
                    alt='Tomato Purée Chilli Sauce 250ml'
                    className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform duration-300'
                    onClick={() =>
                      handleImageClick('/uploads/products/sauce-chilli.jpg', 'Tomato Purée Chilli Sauce 250ml')
                    }
                  />
                  <h4 className='font-semibold text-lg text-gray-800'>Chilli</h4>
                  <p className='text-gray-600'>Spicy tomato sauce with a kick of local flavor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional African Foods Section */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Traditional African Foods</h2>
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-8'>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
                  <div className='md:flex'>
                    <div className='md:w-2/5'>
                      <img
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
                      <h4 className='font-semibold text-lg text-amber-700 mb-3'>Mahangu Instant Porridge</h4>
                      <p className='text-gray-600 mb-4'>
                        Good nutrition for a brighter day. Made with 100% mahangu, ready in seconds and naturally gluten
                        free. Enjoy it plain, or add your favourite fruits, nuts or honey.
                      </p>
                      <ul className='space-y-2'>
                        <li className='text-gray-700 text-sm'>• Made with 100% mahangu (pearl millet)</li>
                        <li className='text-gray-700 text-sm'>• Ready in seconds - no cooking needed</li>
                        <li className='text-gray-700 text-sm'>• Naturally gluten free and no milk allergens</li>
                        <li className='text-gray-700 text-sm'>• 500g pouch</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
                  <div className='md:flex'>
                    <div className='md:w-2/5'>
                      <img
                        src='/uploads/products/rusks.jpg'
                        alt='LizWise Mahangu Rusks - Pearl Millet 500g'
                        className='w-full h-full object-contain bg-gray-50 cursor-pointer hover:scale-105 transition-transform duration-300'
                        onClick={() =>
                          handleImageClick('/uploads/products/rusks.jpg', 'LizWise Mahangu Rusks - Pearl Millet 500g')
                        }
                      />
                    </div>
                    <div className='md:w-3/5 p-6 md:p-8'>
                      <h4 className='font-semibold text-lg text-amber-700 mb-3'>Mahangu Rusks</h4>
                      <p className='text-gray-600 mb-4'>
                        Good for coffee, tea and snacking. Crisp traditional rusks made with 100% mahangu, naturally
                        gluten-free and made for the whole family.
                      </p>
                      <ul className='space-y-2'>
                        <li className='text-gray-700 text-sm'>• Made with 100% mahangu (pearl millet)</li>
                        <li className='text-gray-700 text-sm'>• Naturally gluten free</li>
                        <li className='text-gray-700 text-sm'>• Great for breakfast &amp; snacking</li>
                        <li className='text-gray-700 text-sm'>• 500g pack</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cheese Varieties Section */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Dairy Crafters Cheese</h2>
            <div className='bg-yellow-50 rounded-2xl p-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                <div>
                  <img
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
                  <h4 className='font-semibold text-lg text-gray-800'>Classic Mozzarella</h4>
                  <p className='text-gray-600'>Soft, stretchy cheese perfect for pizzas and pasta dishes</p>
                </div>
                <div>
                  <img
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
                  <h4 className='font-semibold text-lg text-gray-800'>Smoked Mozzarella</h4>
                  <p className='text-gray-600'>Rich, smoky flavor perfect for gourmet dishes and salads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mr Millet Crackers Section */}
          <div className='mb-16'>
            <h2 className='text-3xl font-bold text-center mb-8 text-gray-800'>Mr Millet Crackers</h2>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <div className='md:flex'>
                <div className='md:w-1/2'>
                  <img
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
                  <h3 className='text-2xl font-bold text-gray-800 mb-6'>Original Flavour</h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    Mr Millet Crackers brings you the authentic taste of Namibia. Made from locally sourced millet,
                    these crackers offer a unique flavour profile and nutritional benefits that set them apart from
                    ordinary crackers.
                  </p>
                  <p className='text-gray-600 mb-8 leading-relaxed'>
                    Perfect for snacking, entertaining, or pairing with your favourite dips and toppings, Mr Millet
                    Crackers brings the rich culinary heritage of Namibia to your table.
                  </p>

                  <h4 className='text-xl font-semibold text-gray-800 mb-4'>Key Features:</h4>
                  <ul className='list-disc pl-5 mb-8 space-y-2'>
                    <li className='text-gray-600'>Made with authentic Namibian millet</li>
                    <li className='text-gray-600'>High in fiber and essential nutrients</li>
                    <li className='text-gray-600'>No artificial preservatives or additives</li>
                    <li className='text-gray-600'>Crispy texture perfect for dips and toppings</li>
                    <li className='text-gray-600'>Locally produced with traditional recipes</li>
                    <li className='text-gray-600'>Sustainable packaging and production methods</li>
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
                      View Nutritional Info
                    </a>
                    <a
                      href='/contact'
                      className='border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 inline-block text-center'
                    >
                      Contact for Orders
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className='bg-red-600 rounded-2xl p-8 md:p-12 text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Taste the Difference</h2>
            <p className='text-xl mb-8 max-w-3xl mx-auto'>
              Experience the authentic flavors of Namibia with our locally sourced, traditionally crafted products.
              Perfect for families who value quality and nutrition.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={contactInfo.phone.url}
                className='bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200'
              >
                Call {contactInfo.phone.value}
              </a>
              <a
                href={contactInfo.email.url}
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200'
              >
                Email Us
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
