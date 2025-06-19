export const phoneNumber = '+264 81 394 6757';

// Create the WhatsApp URL
export const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
  "Hello LizWise! I'm interested in your products and would like more information."
)}`;

// Social Media Links
export const socialLinks = {
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/elisabethtuindie.calabrese',
    ariaLabel: 'Facebook',
    description: 'Join our community for updates and promotions',
    color: 'text-blue-600',
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://na.linkedin.com/in/elisabeth-t-kambode-1015a721b',
    ariaLabel: 'LinkedIn',
    description: 'Connect with us professionally',
    color: 'text-blue-400',
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/lizwise_investment',
    ariaLabel: 'Instagram',
    description: 'See our latest products and stories',
    color: 'text-pink-600',
  },
  tiktok: {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@lizwiseinvestmentcc',
    ariaLabel: 'TikTok',
    description: 'Watch our latest videos and behind-the-scenes',
    color: 'text-black',
  },
};

// Contact Information
export const contactInfo = {
  phone: {
    value: phoneNumber,
    url: 'tel:' + phoneNumber.replace(/\s/g, ''),
    description: 'Call us directly for immediate assistance',
  },
  whatsapp: {
    value: phoneNumber,
    url:
      'https://wa.me/' +
      phoneNumber.replace(/\s/g, '').replace('+', '') +
      '?text=Hello%20LizWise!%20I%27m%20interested%20in%20your%20products%20and%20would%20like%20more%20information.',
    description: 'Chat with us on WhatsApp',
  },
  email: {
    value: 'ekambode@lizwise.online',
    url: 'mailto:ekambode@lizwise.online',
    description: 'Send us an email for detailed inquiries',
  },
  address: {
    value: 'Windhoek, NAMIBIA',
    description: 'Visit our location',
    full: 'Erf 1, Lafrenz Industrial Area, Windhoek, Khomas, 9000, Namibia',
  },
};

// Company Information
export const companyInfo = {
  name: 'LizWise Investment CC',
  slogan: 'Locally made. Naturally nourishing. Proudly Namibian.',
  description: 'Turning local ingredients into nutritious, delicious products that feed families and fuel futures.',
  foundingYear: '2018',
  website: 'https://lizwise.online',
  businessHours: {
    weekdays: '08:00 - 17:00',
    weekend: 'Closed',
  },
};

// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Product Categories
export const productCategories = [
  'Mahangu Pasta',
  'Ready-Made Pasta Sauces',
  'Mozzarella Cheese',
  'Traditional African Foods',
];
