import Seo from '../components/Seo';
import SocialLinks from '../components/SocialLinks';
import { companyInfo } from '../config/links';

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

const About = () => {
  return (
    <>
      <Seo
        title='About LizWise - Proudly Namibian Food Products'
        description='Learn about LizWise Investment CC, a proudly Namibian company crafting high-quality, locally-sourced food products that celebrate our heritage.'
        canonical={`${companyInfo.website}/about`}
        image={`${companyInfo.website}/about-og-image.png`}
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>About LizWise Investment CC</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Locally made. Naturally nourishing. Proudly Namibian.
            </p>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Story</h2>
              <p className='text-lg text-gray-700 mb-6'>
                At {companyInfo.name}, we believe in {companyInfo.description} We specialize in mahangu (pearl millet)
                pasta, rich pasta sauces, and creamy mozzarella crafted with care, tradition, and innovation.
              </p>
              <p className='text-lg text-gray-700'>
                Our commitment to quality and authenticity drives everything we do. From sourcing the finest local
                ingredients to maintaining traditional preparation methods, we ensure every product reflects the rich
                heritage of Namibian cuisine.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-red-600 mb-4'>Our Values</h3>
              <ul className='space-y-4'>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Local Sourcing</h4>
                    <p className='text-gray-600'>Supporting Namibian farmers and communities</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Quality Excellence</h4>
                    <p className='text-gray-600'>Maintaining the highest standards in every product</p>
                  </div>
                </li>
                <li className='flex items-start space-x-3'>
                  <div className='w-2 h-2 bg-red-600 rounded-full mt-3'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800'>Cultural Heritage</h4>
                    <p className='text-gray-600'>Celebrating traditional Namibian flavors</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className='bg-yellow-400 rounded-2xl p-8 md:p-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Our Vision</h2>
            <p className='text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed'>
              To empower healthy living across Africa with locally sourced, proudly Namibian food products that
              celebrate our roots and nourish our communities.
            </p>
          </div>

          {/* Social Media Section */}
          <div className='mt-16 text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Connect With Us</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
              Follow our journey and stay updated with our latest products and stories
            </p>

            <SocialLinks className='max-w-5xl mx-auto' centered={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
