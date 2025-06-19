/**
 * Cloudflare Worker script for serving a static site
 */

export interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // Clone the request to ensure it can be used multiple times
      const url = new URL(request.url);
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
