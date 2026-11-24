/**
 * Global SEO metadata for LizWise website
 */
import { companyInfo, contactInfo, socialLinks } from '../config/links';
import { en } from '../i18n/dictionaries/en';

export const siteMetadata = {
  siteUrl: companyInfo.website,
  siteName: companyInfo.name,
  defaultTitle: en['home.seoTitle'],
  defaultDescription: en['home.seoDescription'],
  defaultImage: '/og-image.jpg',
  locale: 'en-US',
  language: 'en',
  themeColor: '#E53E3E', // Red from your color scheme
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyInfo.name,
  description: companyInfo.description,
  url: companyInfo.website,
  logo: `${companyInfo.website}/logo.png`,
  sameAs: Object.values(socialLinks).map(social => social.url),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: contactInfo.phone.value,
    contactType: 'customer service',
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
  // Titles are kept self-contained (each already includes the brand) and capped well under
  // ~60 chars; we no longer append the site name, which previously pushed titles over the limit.
  return {
    title,
    description,
    canonical: url,
    image: image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`,
  };
};
