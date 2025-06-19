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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Special endpoint to purge cache (protect this with a secret in production)
    if (url.pathname === '/admin/purge-cache') {
      return purgeCache(env);
    }
    try {
      // Path is already extracted from the URL above
      const path = url.pathname;

      // First, try to serve the exact asset as requested
      // This handles static files like CSS, JS, images, etc.
      try {
        const assetResponse = await env.ASSETS.fetch(request.clone());
        if (assetResponse.status === 200) {
          return assetResponse;
        }
      } catch (e) {
        // If asset fetch fails, continue to the next strategy
        console.error('Asset fetch failed:', e);
      }

      // For known routes, try to serve the specific HTML file
      const knownRoutes = ['/', '/about', '/contact', '/products'];
      if (knownRoutes.includes(path)) {
        const htmlPath = path === '/' ? '/index.html' : `${path}.html`;
        try {
          const htmlRequest = new Request(new URL(htmlPath, url.origin), request);
          const htmlResponse = await env.ASSETS.fetch(htmlRequest);
          if (htmlResponse.status === 200) {
            return htmlResponse;
          }
        } catch (e) {
          console.error(`HTML fetch failed for ${htmlPath}:`, e);
        }
      }

      // If we get here, serve index.html as a fallback for SPA routing
      return await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
    } catch (e) {
      console.error('Worker error:', e);
      return new Response('Server Error', { status: 500 });
    }
  }
};
