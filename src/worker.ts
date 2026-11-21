/**
 * Cloudflare Worker script for serving a static site
 */

export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  // Environment variables for cache purging
  CF_ACCOUNT_ID?: string;
  CF_API_TOKEN?: string;
  ZONE_ID?: string;
}

/** Locales served by this site. English is the default and has no prefix. */
const LOCALES = ['en', 'af'] as const;
type Locale = (typeof LOCALES)[number];

const LOCALE_PREFIX: Record<Locale, string> = {
  en: '',
  af: '/af',
};

/** BCP-47 tags we match on the Accept-Language header. */
const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  af: 'af',
};

/**
 * Read the preferred language from an Accept-Language header.
 * Returns the locale with the highest q-value, or null when the header does
 * not express a preference we know.
 */
export const preferredLocale = (acceptLanguage: string | null): Locale | null => {
  if (!acceptLanguage) return null;

  const entries = acceptLanguage
    .split(',')
    .map(part => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find(p => p.trim().startsWith('q='));
      const q = qParam ? parseFloat(qParam.trim().slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), q: Number.isNaN(q) ? 0 : q };
    })
    .filter(entry => entry.tag.length > 0 && entry.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const entry of entries) {
    for (const locale of LOCALES) {
      const code = LOCALE_TAGS[locale];
      // Matches 'af', 'af-NA', 'af-ZA' but not unrelated tags.
      if (entry.tag === code || entry.tag.startsWith(`${code}-`)) {
        return locale;
      }
    }
  }
  return null;
};

/**
 * An explicit language choice made with the switcher. It wins over the
 * browser's Accept-Language, so a visitor who picks English is never bounced
 * back to Afrikaans by their device settings.
 */
const COOKIE_NAME = 'lizwise_locale';

export const localeFromCookie = (cookieHeader: string | null): Locale | null => {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const [name, ...rest] = part.trim().split('=');
    if (name !== COOKIE_NAME) continue;
    const value = decodeURIComponent(rest.join('=').trim()).toLowerCase();
    if (value === 'af' || value === 'en') return value;
  }
  return null;
};

/**
 * Should this request be redirected to a localized page?
 * Only for the default (unprefixed) URLs, so an explicit /af link is never
 * bounced away, and never for assets or file-like paths.
 */
export const localizedRedirect = (url: URL, acceptLanguage: string | null, cookieHeader: string | null): URL | null => {
  const chosen = localeFromCookie(cookieHeader);
  // An explicit choice wins: 'en' means stay on the unprefixed URLs.
  if (chosen === 'en') return null;

  const locale = chosen ?? preferredLocale(acceptLanguage);
  if (!locale || locale === 'en') return null;

  const path = url.pathname;

  // Already inside the localized tree: never redirect away from it.
  if (path === LOCALE_PREFIX[locale] || path.startsWith(`${LOCALE_PREFIX[locale]}/`)) return null;

  // Leave file-like paths alone (they are assets, not pages).
  if (/\.[a-z0-9]{2,5}$/i.test(path)) return null;

  // Leave the admin endpoints alone.
  if (path.startsWith('/admin/')) return null;

  const target = new URL(url.toString());
  target.pathname = `${LOCALE_PREFIX[locale]}${path === '/' ? '' : path}`;
  return target;
};

// Function to purge cache
async function purgeCache(env: Env): Promise<Response> {
  if (!env.CF_ACCOUNT_ID || !env.CF_API_TOKEN || !env.ZONE_ID) {
    return new Response('Missing required environment variables for cache purge', { status: 500 });
  }

  try {
    const purgeUrl = `https://api.cloudflare.com/client/v4/zones/${env.ZONE_ID}/purge_cache`;
    const response = await fetch(purgeUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.CF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        purge_everything: true,
      }),
    });

    const result = await response.json();
    if (result.success) {
      return new Response('Cache purged successfully', { status: 200 });
    } else {
      return new Response(`Failed to purge cache: ${JSON.stringify(result.errors)}`, { status: 500 });
    }
  } catch (error) {
    return new Response(`Error purging cache: ${error instanceof Error ? error.message : String(error)}`, {
      status: 500,
    });
  }
}

// Flag to track if this is the first execution after deployment
let isFirstExecution = true;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Automatically purge cache on first execution after deployment
    if (isFirstExecution) {
      isFirstExecution = false;
      // Don't await this to avoid blocking the response
      purgeCache(env).catch(error => {
        console.error('Auto cache purge failed:', error);
      });
      console.log('Automatic cache purge triggered on first execution');
    }

    // Send Afrikaans visitors to the Afrikaans version of the same page.
    if (request.method === 'GET') {
      const target = localizedRedirect(url, request.headers.get('Accept-Language'), request.headers.get('Cookie'));
      if (target) {
        // Keep the choice on the redirected request so the next hop is stable.
        const headers = new Headers({ Location: target.toString() });
        headers.append('Set-Cookie', `${COOKIE_NAME}=af; Path=/; Max-Age=31536000; SameSite=Lax`);
        return new Response(null, { status: 302, headers });
      }
    }

    // Special endpoint to manually purge cache
    if (url.pathname === '/admin/purge-cache') {
      return purgeCache(env);
    }

    // Serve the static file when there is one, otherwise fall back to
    // index.html so client-side routing works.
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }

      // Since Transform Rules will handle cache headers, just return the response
      // The Transform Rules will add proper cache-control headers
      return await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
    } catch (e) {
      console.error('Worker error:', e);
      return new Response('Server Error', { status: 500 });
    }
  },
};
