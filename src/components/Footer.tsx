
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebookF, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LizWise Investment CC</h3>
            <p className="text-gray-300 mb-4">
              Locally made. Naturally nourishing. Proudly Namibian.
            </p>
            <p className="text-gray-300">
              Turning local ingredients into nutritious, delicious products that feed families and fuel futures.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-400" />
                <span>+264 81 394 6757</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-red-400" />
                <span>ekambode@lizwise.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-red-400" />
                <span>Windhoek, NAMIBIA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mahangu Pasta</li>
              <li>Ready-Made Pasta Sauces</li>
              <li>Mozzarella Cheese</li>
              <li>Traditional African Foods</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-4 border-t border-gray-600">
          <h3 className="text-center text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex justify-center space-x-8 mb-4">
            <a 
              href="https://www.facebook.com/elisabethtuindie.calabrese" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/elisabeth-t-kambode-1015a721b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/lizwise_investment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@lizwiseinvestmentcc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
          </div>
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} LizWise Investment CC. All rights reserved.
          </p>
          <p className="text-gray-300 text-center mt-2">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by <a 
              href="https://rocco.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
