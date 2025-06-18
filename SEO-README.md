# SEO Implementation for LizWise Website

## Overview

This document provides an overview of the SEO implementation for the LizWise website, a React application built with Vite, TypeScript, and TailwindCSS.

## Implementation Details

### Core SEO Components

1. **Seo.tsx Component**
   - Located at: `src/components/Seo.tsx`
   - Uses `react-helmet-async` to manage document head metadata
   - Provides props for title, description, canonical URL, image, and structured data
   - Automatically formats titles with site name
   - Implements Open Graph and Twitter Card tags

2. **SEO Metadata Configuration**
   - Located at: `src/lib/seo-metadata.ts`
   - Centralizes all SEO-related metadata
   - Contains default site information
   - Provides structured data templates for organization and products
   - Includes helper function for generating page metadata

3. **HelmetProvider Setup**
   - Located at: `src/main.tsx`
   - Wraps the entire application to enable React Helmet functionality

### SEO Files

1. **sitemap.xml**
   - Located at: `public/sitemap.xml`
   - Lists all main pages with priority and change frequency
   - Helps search engines discover and index pages

2. **robots.txt**
   - Located at: `public/robots.txt`
   - Provides directives for search engine crawlers
   - References the sitemap.xml file

3. **SEO Strategy Document**
   - Located at: `SEO-STRATEGY.md`
   - Outlines current implementation and future SEO tasks
   - Includes keyword strategy and monitoring plan

## Page-Specific SEO

Each page has been configured with specific SEO metadata:

1. **Home Page (Index.tsx)**
   - Title: "LizWise - Taste Namibia with Locally Made Food Products"
   - Includes Organization schema markup

2. **About Page (About.tsx)**
   - Title: "About LizWise - Our Story & Mission | Proudly Namibian Food Products"
   - Includes AboutPage schema markup

3. **Products Page (Products.tsx)**
   - Title: "LizWise Products - Mahangu Pasta, Sauces & Mozzarella | Namibian Food"
   - Includes ItemList schema markup for products

4. **Contact Page (Contact.tsx)**
   - Title: "Contact LizWise - Get in Touch | Order Our Namibian Food Products"
   - Includes ContactPage schema markup with business details

5. **NotFound Page (NotFound.tsx)**
   - Title: "Page Not Found | LizWise"
   - Basic WebPage schema markup

## Usage

To add SEO to a new page:

```tsx
import Seo from '../components/Seo';

const YourPage = () => {
  // Optional: Define structured data
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Your Page Name"
    // Additional properties...
  };

  return (
    <Layout>
      <Seo 
        title="Your Page Title"
        description="Your page description with keywords"
        canonical="https://lizwise.online/your-page"
        image="/your-page-image.jpg"
        schemaMarkup={schemaMarkup}
      />
      {/* Page content */}
    </Layout>
  );
};
```

## Testing SEO Implementation

To test the SEO implementation:

1. **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. **Facebook Sharing Debugger**: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
3. **Twitter Card Validator**: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
4. **Google PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)

## Future Improvements

See the `SEO-STRATEGY.md` file for a comprehensive list of future SEO improvements and tasks.

## Resources

- [React Helmet Async Documentation](https://github.com/staylor/react-helmet-async)
- [Schema.org Documentation](https://schema.org/docs/gs.html)
- [Google Search Central](https://developers.google.com/search)
