import { Link } from 'react-router-dom';
import { Phone, Mail, Star, Award, Heart } from 'lucide-react';
import Seo from '../components/Seo';
import { companyInfo, contactInfo, socialLinks } from '../config/links';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  description: companyInfo.description,
  url: 'https://lizwise.online',
  logo: 'https://lizwise.online/logo.png',
  sameAs: Object.values(socialLinks).map((social) => social.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.value,
    contactType: 'customer service',
  },
};

const Index = () => {
  return (
    <>
      <Seo
        title='LizWise - Taste Namibia with Locally Made Food Products'
        description='Locally made. Naturally nourishing. Proudly Namibian. We specialize in mahangu (pearl millet) pasta, rich pasta sauces, and creamy mozzarella—crafted with care, tradition, and innovation.'
        canonical='https://lizwise.online'
        image='https://lizwise.online/og-image.png'
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                Taste Namibia with
                <span className='block text-yellow-300'>LizWise</span>
              </h1>
              <p className='text-xl mb-8 leading-relaxed'>
                Locally made. Naturally nourishing. Proudly Namibian.
              </p>
              <p className='text-lg mb-8 opacity-90'>
                {companyInfo.description}
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  to='/products'
                  className='bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center'
                >
                  Explore Our Products
                </Link>
                <a
                  href={contactInfo.phone.url}
                  className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 text-center'
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className='relative flex items-center justify-center'>
              <img
                src='/uploads/baf2893a-444d-4321-8434-f5e0f36f1c21.jpg'
                alt='LizWise Mahangu Pasta - Shell variety made from pearl millet'
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
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              Our Products
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Discover our range of authentic Namibian food products, made with
              love and local ingredients
            </p>
          </div>

          {/* Featured Product Showcase */}
          <div className='mb-16'>
            <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='p-8 lg:p-12 flex flex-col justify-center'>
                  <h3 className='text-3xl font-bold text-gray-800 mb-6'>
                    Authentic Namibian Products
                  </h3>
                  <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                    From our family to yours - traditional recipes crafted with
                    locally sourced ingredients, bringing the authentic taste of
                    Namibia to your table.
                  </p>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <Heart className='text-red-600' size={20} />
                      <span className='text-gray-700'>
                        100% Local Ingredients
                      </span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Award className='text-yellow-500' size={20} />
                      <span className='text-gray-700'>Traditional Recipes</span>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <Star className='text-green-600' size={20} />
                      <span className='text-gray-700'>Premium Quality</span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <img
                    src='/uploads/14b94d5d-aeea-46b2-9ff9-2114543b9962.jpg'
                    alt='LizWise Product Collection - Authentic Namibian Food Products'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <img
                  src='/uploads/9c051a7f-709a-429c-b78b-765f2d109ced.jpg'
                  alt='Fusilli Mahangu Pasta - Pearl Millet 500g'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Mahangu Pasta
              </h3>
              <p className='text-gray-600 mb-6'>
                Wholesome, gluten-friendly, and high in fiber. Made from 100%
                Namibian millet in various shapes including Fusilli and
                Radiatori.
              </p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ Gluten-friendly</li>
                <li>✓ High in fiber</li>
                <li>✓ Various shapes</li>
              </ul>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <img
                  src='/uploads/dc259359-ec0d-4d8b-b506-1aa354fc95dc.jpg'
                  alt='Bolognaise Sauce - The Sauce Harvest 250ml'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Pasta Sauces
              </h3>
              <p className='text-gray-600 mb-6'>
                Ready-made sauces bursting with local flavor, made from real
                tomatoes. Available in Bolognaise, Tomato Purée and Chilli
                varieties.
              </p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ Real tomatoes</li>
                <li>✓ Local flavors</li>
                <li>✓ Multiple varieties</li>
              </ul>
            </div>

            <div className='bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-6'>
                <img
                  src='/uploads/334bac1f-2873-4490-bad4-d86057baaf2e.jpg'
                  alt='Smoked Mozzarella Cheese - Dairy Crafters 250g'
                  className='w-full h-48 object-cover rounded-lg mx-auto'
                />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                Mozzarella Cheese
              </h3>
              <p className='text-gray-600 mb-6'>
                Soft, stretchy, and perfect for home cooking. Ideal for pizzas,
                pasta bakes, sandwiches, and fresh salads.
              </p>
              <ul className='text-sm text-gray-500 space-y-1'>
                <li>✓ Soft & stretchy</li>
                <li>✓ Perfect for cooking</li>
                <li>✓ Versatile use</li>
              </ul>
            </div>
          </div>

          <div className='text-center'>
            <Link
              to='/products'
              className='bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-block'
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Our Mission
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                At {companyInfo.name}, we believe in {companyInfo.description}{' '}
                We specialize in traditional Namibian foods crafted with care,
                tradition, and innovation.
              </p>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Our commitment to supporting local farmers and celebrating
                Namibian culture drives everything we do. From farm to table, we
                ensure quality and authenticity in every product.
              </p>
              <Link
                to='/about'
                className='bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 inline-block'
              >
                Learn More About Us
              </Link>
            </div>
            <div className='bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl p-8 text-white'>
              <h3 className='text-2xl font-bold mb-6'>Our Vision</h3>
              <p className='text-lg leading-relaxed mb-6'>
                "To empower healthy living across Africa with locally sourced,
                proudly Namibian food products that celebrate our roots and
                nourish our communities."
              </p>
              <div className='grid grid-cols-2 gap-4 text-center'>
                <div>
                  <div className='text-3xl font-bold'>100%</div>
                  <div className='text-sm opacity-90'>Local Sourced</div>
                </div>
                <div>
                  <div className='text-3xl font-bold'>15+</div>
                  <div className='text-sm opacity-90'>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className='py-20 bg-gray-800 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Ready to Taste Namibia?</h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto text-gray-300'>
            Contact us today to learn more about our products or place an order.
            We're here to bring authentic Namibian flavors to your table.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8'>
            <a
              href={`tel:${contactInfo.phone.value}`}
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
              <span>Email Us</span>
            </a>
          </div>

          <Link
            to='/contact'
            className='bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 inline-block'
          >
            Visit Our Contact Page
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
