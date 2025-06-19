import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import Seo from '../components/Seo';

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'LizWise Investment CC',
    telephone: '+264 81 124 4150',
    email: 'ekambode@lizwise.online',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Erf 1, Lafrenz Industrial Area',
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
        canonical='https://lizwise.online/contact'
        image='https://lizwise.online/contact-og-image.png'
        schemaMarkup={schemaMarkup}
      />
      <div className='py-16 bg-gradient-to-br from-red-50 to-yellow-50'>
        <div className='container mx-auto px-4'>
          {/* Hero Section */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
              Contact Us
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Get in touch with us to learn more about our products or place an
              order
            </p>
          </div>

          <div className='grid grid-cols-1 gap-12'>
            {/* Contact Information */}
            <div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
                  <div className='w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center'>
                    <Phone className='text-red-600' size={24} />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Phone
                    </h3>
                    <p className='text-gray-600 mb-2'>
                      Call us directly for immediate assistance
                    </p>
                    <div className='space-y-2'>
                      <a
                        href='tel:+26481394675'
                        className='block text-red-600 font-semibold hover:text-red-700'
                      >
                        +264 81 394 6757
                      </a>
                      <a
                        href='https://wa.me/264812345678?text=Hello%20LizWise!%20I%27m%20interested%20in%20your%20products%20and%20would%20like%20more%20information.'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-green-600 hover:text-green-700 text-sm font-medium'
                      >
                        <MessageCircle className='w-4 h-4 mr-1' />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <Mail className='text-green-600' size={24} />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Email
                    </h3>
                    <p className='text-gray-600 mb-2'>
                      Send us an email for detailed inquiries
                    </p>
                    <a
                      href='mailto:ekambode@lizwise.online'
                      className='text-green-600 font-semibold hover:text-green-700'
                    >
                      ekambode@lizwise.online
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
                  <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
                    <MapPin className='text-yellow-600' size={24} />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Location
                    </h3>
                    <p className='text-gray-600 mb-2'>
                      Visit us in Namibia's capital city
                    </p>
                    <p className='text-yellow-600 font-semibold'>
                      Windhoek, NAMIBIA
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Clock className='text-blue-600' size={24} />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                      Business Hours
                    </h3>
                    <p className='text-gray-600 mb-2'>
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className='text-gray-600'>Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                  Connect With Us
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                  <Card className='hover:shadow-lg transition-shadow'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-blue-600'>
                        <FaFacebookF className='w-6 h-6 mr-2' />
                        Facebook
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-4'>
                        Follow us for updates and promotions
                      </p>
                      <Button asChild variant='outline' className='w-full'>
                        <a
                          href='https://www.facebook.com/elisabethtuindie.calabrese'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Follow Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className='hover:shadow-lg transition-shadow'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-blue-400'>
                        <FaLinkedin className='w-6 h-6 mr-2' />
                        LinkedIn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-4'>
                        Connect with us professionally
                      </p>
                      <Button asChild variant='outline' className='w-full'>
                        <a
                          href='https://na.linkedin.com/in/elisabeth-t-kambode-1015a721b'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Connect
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className='hover:shadow-lg transition-shadow'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-pink-600'>
                        <FaInstagram className='w-6 h-6 mr-2' />
                        Instagram
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-4'>
                        See our latest products and stories
                      </p>
                      <Button asChild variant='outline' className='w-full'>
                        <a
                          href='https://www.instagram.com/lizwise_investment'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Follow Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className='hover:shadow-lg transition-shadow'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-black'>
                        <FaTiktok className='w-6 h-6 mr-2' />
                        TikTok
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-gray-600 mb-4'>
                        Watch our latest videos
                      </p>
                      <Button asChild variant='outline' className='w-full'>
                        <a
                          href='https://www.tiktok.com/@lizwiseinvestmentcc'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Follow Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
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
