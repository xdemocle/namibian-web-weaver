import { Head } from 'vite-react-ssg';
import { siteMetadata, getPageMetadata } from '../lib/seo-metadata';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  schemaMarkup?: Record<string, unknown>;
}

const Seo = ({
  title = siteMetadata.defaultTitle,
  description = siteMetadata.defaultDescription,
  canonical = siteMetadata.siteUrl,
  image = siteMetadata.defaultImage,
  schemaMarkup,
}: SeoProps) => {
  const metadata = getPageMetadata({
    title,
    description,
    image,
    url: canonical,
  });

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <link rel='canonical' href={metadata.canonical} />
      <meta name='author' content='rocco.me' />

      {/* Standard meta tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content={siteMetadata.themeColor} />
      <meta name='language' content='en' />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='content-language' content='en' />
      <meta name='lang' content='en' />

      {/* Open Graph for Facebook, LinkedIn */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={siteMetadata.siteName} />
      <meta property='og:title' content={metadata.title} />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:image' content={metadata.image} />
      <meta property='og:url' content={metadata.canonical} />
      <meta property='og:locale' content={siteMetadata.locale} />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metadata.title} />
      <meta name='twitter:description' content={metadata.description} />
      <meta name='twitter:image' content={metadata.image} />

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Head>
  );
};

export default Seo;
