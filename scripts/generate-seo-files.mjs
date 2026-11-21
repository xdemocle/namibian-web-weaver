/**
 * Generates public/sitemap.xml and public/robots.txt.
 *
 * Both files are derived from companyInfo.website and the locale list so the
 * canonical domain can never drift between the code and the sitemap. Run by
 * `bun run build` before the SSG build.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// The canonical site URL, read from the single source of truth.
const linksSource = readFileSync(resolve(root, 'src/config/links.ts'), 'utf8');
const websiteMatch = linksSource.match(/website:\s*'([^']+)'/);
if (!websiteMatch) throw new Error('Could not find companyInfo.website in src/config/links.ts');
const siteUrl = websiteMatch[1].replace(/\/+$/, '');

// The locale list and their URL prefixes, read from src/i18n/index.ts.
const i18nSource = readFileSync(resolve(root, 'src/i18n/index.ts'), 'utf8');
const localeBlock = i18nSource.match(/LOCALE_PREFIX[^=]*=\s*\{([^}]*)\}/);
if (!localeBlock) throw new Error('Could not find LOCALE_PREFIX in src/i18n/index.ts');

const prefixes = {};
for (const line of localeBlock[1].split('\n')) {
  const match = line.match(/(\w+):\s*'([^']*)'/);
  if (match) prefixes[match[1]] = match[2];
}
const locales = Object.keys(prefixes);
if (locales.length === 0) throw new Error('No locales found in LOCALE_PREFIX');

/** The localized path for a page, e.g. '/about' + 'af' -> '/af/about'. */
const localized = (path, locale) => {
  const prefix = prefixes[locale];
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
};

// The pages that exist, with their sitemap priority.
const pages = [
  ['/', 1.0],
  ['/about', 0.8],
  ['/journey', 0.8],
  ['/products', 0.9],
  ['/contact', 0.7],
];

const today = new Date().toISOString().slice(0, 10);

const urls = pages.flatMap(([path, priority]) =>
  locales.map(locale => {
    const loc = `${siteUrl}${localized(path, locale)}`;
    const alternates = locales
      .map(code => `    <xhtml:link rel="alternate" hreflang="${code}" href="${siteUrl}${localized(path, code)}"/>`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${localized(path, 'en')}"/>`;
    return `  <url>
    <loc>${loc}</loc>
${alternates}
${xDefault}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(root, 'public/robots.txt'), robots);

console.log(`[seo] sitemap: ${urls.length} URLs for ${locales.join(', ')} at ${siteUrl}`);
console.log('[seo] robots.txt written');
