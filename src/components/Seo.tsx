import { Head } from 'vite-react-ssg';
import { siteMetadata, getPageMetadata } from '../lib/seo-metadata';
import { LOCALE_OG, LOCALE_TAGS, LOCALES, localePath, useLocale } from '../i18n';

interface SeoProps {
  title?: string;
  description?: string;
  /** Path of this page, without locale prefix, e.g. '/products'. */
  path?: string;
  image?: string;
  schemaMarkup?: Record<string, unknown>;
}

const Seo = ({
  title = siteMetadata.defaultTitle,
  description = siteMetadata.defaultDescription,
  path = '/',
  image = siteMetadata.defaultImage,
  schemaMarkup,
}: SeoProps) => {
  const locale = useLocale();

  // Canonical follows the locale of the current route.
  const canonical = `${siteMetadata.siteUrl}${localePath(path, locale)}`;

  const metadata = getPageMetadata({
    title,
    description,
    image,
    url: canonical,
  });

  // Alternate links: the same page in every language, plus x-default.
  // Based on the page identity (`path`), not the raw URL, so the 404 page
  // still points at /not-found rather than whatever the visitor typed.
  const base = path;
  const alternates = LOCALES.map(code => ({
    hreflang: LOCALE_TAGS[code],
    href: `${siteMetadata.siteUrl}${localePath(base, code)}`,
  }));
  const xDefault = `${siteMetadata.siteUrl}${localePath(base, 'en')}`;

  return (
    <Head htmlAttributes={{ lang: LOCALE_TAGS[locale] }}>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <link rel='canonical' href={metadata.canonical} />
      <meta name='author' content='rocco.me' />

      {/* Language alternates */}
      {alternates.map(alternate => (
        <link key={alternate.hreflang} rel='alternate' hrefLang={alternate.hreflang} href={alternate.href} />
      ))}
      <link rel='alternate' hrefLang='x-default' href={xDefault} />

      {/* Standard meta tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content={siteMetadata.themeColor} />
      <meta name='language' content={LOCALE_TAGS[locale]} />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='content-language' content={LOCALE_TAGS[locale]} />
      <meta name='lang' content={LOCALE_TAGS[locale]} />

      {/* Open Graph for Facebook, LinkedIn */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={siteMetadata.siteName} />
      <meta property='og:title' content={metadata.title} />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:image' content={metadata.image} />
      <meta property='og:url' content={metadata.canonical} />
      <meta property='og:locale' content={LOCALE_OG[locale]} />
      <meta property='og:locale:alternate' content={LOCALE_OG[locale === 'af' ? 'en' : 'af']} />

      {/* Twitter Card */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={metadata.title} />
      <meta name='twitter:description' content={metadata.description} />
      <meta name='twitter:image' content={metadata.image} />

      {/* Structured Data (Schema Markup) */}
      {schemaMarkup && <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>}
    </Head>
  );
};

export default Seo;
