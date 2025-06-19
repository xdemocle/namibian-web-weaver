import { FaHeart } from 'react-icons/fa';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import { companyInfo, productCategories } from '../config/links';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>{companyInfo.name}</h3>
            <p className='text-gray-300 mb-4'>
              {companyInfo.slogan}
            </p>
            <p className='text-gray-300'>
              {companyInfo.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact Information</h3>
            <ContactInfo layout='list' showWhatsApp={false} className='text-gray-300' />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Our Products</h3>
            <ul className='space-y-2 text-gray-300'>
              {productCategories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='mt-8 pt-4 border-t border-gray-600'>
          <h3 className='text-center text-lg font-semibold mb-3'>
            Connect With Us
          </h3>
          <SocialLinks layout='inline' showDescription={false} className='mb-4' />
          <p className='text-gray-300 text-center'>
            © {new Date().getFullYear()} LizWise Investment CC. All rights
            reserved.
          </p>
          <p className='text-gray-300 text-center mt-2'>
            Made with <FaHeart className='inline text-red-500 mx-1' /> by{' '}
            <a
              href='https://rocco.me'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors duration-200'
            >
              rocco.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
