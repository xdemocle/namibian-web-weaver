/**
 * Global SEO metadata for LizWise website
 */
import { companyInfo, contactInfo, socialLinks } from '../config/links';

export const siteMetadata = {
  siteUrl: companyInfo.website,
  siteName: companyInfo.name,
  defaultTitle: 'LizWise - Taste Namibia with Locally Made Food Products',
  defaultDescription:
    'Proudly Namibian food products. We craft mahangu pasta, artisanal sauces, and fresh mozzarella using local ingredients with traditional methods.',
  defaultImage: '/og-image.png',
  locale: 'en-US',
  themeColor: '#E53E3E', // Red from your color scheme
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  description: companyInfo.description,
  url: companyInfo.website,
  logo: `${companyInfo.website}/logo.png`,
  sameAs: Object.values(socialLinks).map((social) => social.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.value,
    contactType: 'customer service',
  },
};

export const productSchemas = {
  mahangu: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mahangu Pasta',
    description:
      'Wholesome, gluten-friendly, and high in fiber. Available in Fusilli, Radiatori, shells, Maccheroni and other various shapes. 100% Namibian millet.',
    image: `${companyInfo.website}/uploads/baf2893a-444d-4321-8434-f5e0f36f1c21.jpg`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  sauces: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Ready-Made Pasta Sauces',
    description:
      'Bursting with local flavor, made from real tomatoes. Available in Bolognaise, Tomato Purée and Chilli.',
    image: `${companyInfo.website}/uploads/ecd4af59-d45b-48c9-aa90-c525f895753f.jpg`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  mozzarella: {
    '@context': 'https://schema.org',
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
};

/**
 * Helper function to generate page metadata
 */
export const getPageMetadata = ({
  title = siteMetadata.defaultTitle,
  description = siteMetadata.defaultDescription,
  image = siteMetadata.defaultImage,
  url = siteMetadata.siteUrl,
}) => {
  const pageTitle =
    title === siteMetadata.defaultTitle
      ? title
      : `${title} | ${siteMetadata.siteName}`;

  return {
    title: pageTitle,
    description,
    canonical: url,
    image: image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`,
  };
};
