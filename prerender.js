// prerender.js - Script to generate static HTML files for each route
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define your routes
const routes = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/not-found'
];

// Function to create directories and copy index.html
async function generateStaticPages() {
  const distDir = path.resolve(__dirname, 'dist');
  const indexPath = path.join(distDir, 'index.html');
  
  // Check if dist directory and index.html exist
  if (!fs.existsSync(distDir) || !fs.existsSync(indexPath)) {
    console.error('Error: dist directory or index.html not found. Run build first.');
    process.exit(1);
  }
  
  // Read the built index.html
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  
  // Create directories for each route and copy index.html
  for (const route of routes) {
    if (route === '/') continue; // Skip root path
    
    const routePath = route === '/not-found' ? '/404' : route;
    const routeDir = path.join(distDir, routePath.substring(1));
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Write index.html to the route directory
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
    console.log(`Created static HTML for route: ${route}`);
  }
  
  // Create 404.html at the root level
  if (!routes.includes('/not-found')) {
    fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
    console.log('Created 404.html');
  }
  
  console.log('Static site generation completed successfully!');
}

// Run the function
generateStaticPages().catch(err => {
  console.error('Error generating static pages:', err);
  process.exit(1);
});
