// Basic test for worker functionality
// This can be used to test the worker locally

const worker = require('./worker').default;

// Mock environment
const env = {
  ASSETS: {
    fetch: async (request) => {
      const url = new URL(request.url);
      console.log(`Mock ASSETS.fetch called with: ${url.pathname}`);
      
      // Simulate successful responses for HTML files
      if (url.pathname.endsWith('.html')) {
        return new Response('HTML Content', { status: 200 });
      }
      
      // Simulate successful responses for assets
      if (url.pathname.includes('/assets/')) {
        return new Response('Asset Content', { status: 200 });
      }
      
      // Simulate 404 for anything else
      return new Response('Not Found', { status: 404 });
    }
  }
};

// Test the worker with different paths
async function runTests() {
  const tests = [
    '/',
    '/about',
    '/contact',
    '/products',
    '/assets/style.css',
    '/unknown-path'
  ];
  
  for (const path of tests) {
    const request = new Request(`https://lizwise.online${path}`);
    console.log(`\nTesting path: ${path}`);
    
    try {
      const response = await worker.fetch(request, env);
      console.log(`Status: ${response.status}`);
    } catch (error) {
      console.error(`Error with ${path}:`, error);
    }
  }
}

runTests().catch(console.error);
