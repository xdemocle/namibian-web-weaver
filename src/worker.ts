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
        'Authorization': `Bearer ${env.CF_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        purge_everything: true
      })
    });

    const result = await response.json();
    if (result.success) {
      return new Response('Cache purged successfully', { status: 200 });
    } else {
      return new Response(`Failed to purge cache: ${JSON.stringify(result.errors)}`, { status: 500 });
    }
  } catch (error) {
    return new Response(`Error purging cache: ${error instanceof Error ? error.message : String(error)}`, { status: 500 });
  }
}

// Helper function to add cache headers to a response
async function addCacheHeaders(response: Response, cacheType: 'asset' | 'html'): Promise<Response> {
  // Clone the response body to avoid consuming it
  const responseBody = response.body;
  
  // Create new headers, starting fresh to avoid conflicts
  const newHeaders = new Headers();
  
  // Copy essential headers but skip cache-related ones
  for (const [key, value] of response.headers.entries()) {
    const lowerKey = key.toLowerCase();
    if (!lowerKey.includes('cache') && !lowerKey.includes('etag') && !lowerKey.includes('expires')) {
      newHeaders.set(key, value);
    }
  }
  
  // Set aggressive cache control headers based on content type
  if (cacheType === 'asset') {
    // Static assets (JS, CSS, images) - cache for 1 day with immutable flag
    newHeaders.set('Cache-Control', 'public, max-age=86400, immutable');
    // Add Cloudflare-specific cache header
    newHeaders.set('CDN-Cache-Control', 'public, max-age=86400');
    // Add ETag for better cache validation
    newHeaders.set('ETag', `"${Date.now()}"`);
  } else {
    // HTML files - cache for 1 hour but allow revalidation
    newHeaders.set('Cache-Control', 'public, max-age=3600, must-revalidate');
    // Shorter CDN cache for HTML to ensure freshness
    newHeaders.set('CDN-Cache-Control', 'public, max-age=1800');
    // Add ETag for HTML files too
    newHeaders.set('ETag', `"html-${Date.now()}"`);
  }
  
  // Add additional performance headers
  newHeaders.set('Vary', 'Accept-Encoding');
  
  // Create a new response with the modified headers
  return new Response(responseBody, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}

// Function to determine if a path is for a static asset
function isStaticAssetPath(path: string): boolean {
  const staticExtensions = [
    '.js',
    '.css',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot',
    '.ico',
    '.webp',
    '.mp4',
    '.mp3',
    '.wav',
    '.ogg',
    '.pdf',
    '.docx',
    '.xlsx',
    '.pptx',
  ];
  return staticExtensions.some(extension => path.endsWith(extension));
}

// Flag to track if this is the first execution after deployment
let isFirstExecution = true;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Automatically purge cache on first execution after deployment
    if (isFirstExecution) {
      isFirstExecution = false;
      // Don't await this to avoid blocking the response
      purgeCache(env).catch(error => {
        console.error('Auto cache purge failed:', error);
      });
      console.log('Automatic cache purge triggered on first execution');
    }
    
    // Special endpoint to manually purge cache
    if (url.pathname === '/admin/purge-cache') {
      return purgeCache(env);
    }

    // If this is a static asset, let Cloudflare handle it directly
    // The worker should only run for HTML routes and SPA fallback
    if (isStaticAssetPath(path)) {
      // This shouldn't happen with run_worker_first = false, but just in case
      return env.ASSETS.fetch(request);
    }

    try {
      // For known routes, try to serve the specific HTML file
      const knownRoutes = ['/', '/about', '/contact', '/products'];
      if (knownRoutes.includes(path)) {
        const htmlPath = path === '/' ? '/index.html' : `${path}.html`;
        try {
          const htmlRequest = new Request(new URL(htmlPath, url.origin), request);
          const htmlResponse = await env.ASSETS.fetch(htmlRequest);
          if (htmlResponse.status === 200) {
            const response = await addCacheHeaders(htmlResponse, 'html');
            
            // Add cf-cache-status header
            const headers = new Headers(response.headers);
            headers.set('cf-cache-status', 'DYNAMIC');
            
            return new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: headers
            });
          }
        } catch (e) {
          console.error(`HTML fetch failed for ${htmlPath}:`, e);
        }
      }

      // SPA fallback - serve index.html for any unmatched routes
      const fallbackResponse = await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
      const response = await addCacheHeaders(fallbackResponse, 'html');
      
      // Add cf-cache-status header
      const headers = new Headers(response.headers);
      headers.set('cf-cache-status', 'DYNAMIC');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
      });
    } catch (e) {
      console.error('Worker error:', e);
      return new Response('Server Error', { status: 500 });
    }
  }
};
