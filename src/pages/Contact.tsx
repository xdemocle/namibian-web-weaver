import ContactInfo from '../components/ContactInfo';
import Seo from '../components/Seo';
import SocialLinks from '../components/SocialLinks';
import { companyInfo, contactInfo } from '../config/links';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: companyInfo.name,
    telephone: contactInfo.phone.value,
    email: contactInfo.email.value,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.address.full,
      addressLocality: 'Windhoek',
      addressRegion: 'Khomas',
      postalCode: '9000',
      addressCountry: 'Namibia',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  },
};

const Contact = () => {
  return (
    <>
      <Seo
        title='Contact LizWise - Get in Touch | Order Our Namibian Food Products'
        description="Contact LizWise Investment CC for inquiries about our Namibian food products. Place orders, ask questions, or provide feedback - we're here to help you enjoy our locally made products."
        canonical={`${companyInfo.website}/contact`}
        image={`${companyInfo.website}/contact-og-image.png`}
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>Contact Us</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Get in touch with us to learn more about our products or place an order
            </p>
          </div>

          <div className='grid grid-cols-1 gap-12'>
            {/* Contact Information */}
            <div>
              <ContactInfo className='mb-8' />

              {/* Social Media Section */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Connect With Us</h2>
                <SocialLinks className='max-w-5xl mx-auto' />
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
