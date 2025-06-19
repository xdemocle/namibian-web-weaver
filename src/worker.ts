/**
 * Cloudflare Worker script for serving a static site
 */

interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Get the URL from the request
    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // If the path is / or doesn't have a file extension, serve index.html
      if (path === '/' || !path.includes('.')) {
        // For SPA routing, serve the appropriate HTML file if it exists
        // or fall back to index.html
        const routes = ['/', '/about', '/contact', '/products'];
        
        if (routes.includes(path)) {
          // Try to serve the specific HTML file for the route
          const routePath = path === '/' ? '/index.html' : `${path}.html`;
          return await env.ASSETS.fetch(new Request(url.origin + routePath, request));
        } else {
          // Serve index.html for client-side routing
          return await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
        }
      }

      // Otherwise, try to serve the requested asset
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If an error occurs, serve index.html for client-side routing
      return await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));
    }
  }
};
