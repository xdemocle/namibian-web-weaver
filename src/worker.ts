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

    // This worker only runs when Cloudflare can't find a static file
    // So we serve index.html for SPA routing
    try {
      const fallbackResponse = await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
      
      // Since Transform Rules will handle cache headers, just return the response
      // The Transform Rules will add proper cache-control headers
      return fallbackResponse;
    } catch (e) {
      console.error('Worker error:', e);
      return new Response('Server Error', { status: 500 });
    }
  }
};
