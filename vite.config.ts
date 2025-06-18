import react from "@vitejs/plugin-react-swc";
import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Define the routes for SSG
const routes = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/not-found'
];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'LizWise Investment CC',
          description: 'Locally made. Naturally nourishing. Proudly Namibian. We specialize in mahangu (pearl millet) pasta, rich pasta sauces, and creamy mozzarella—crafted with care, tradition, and innovation.',
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/*',
          dest: ''
        }
      ]
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Generate static HTML for each route
    outDir: 'dist',
    emptyOutDir: true,
    // Improve performance with these settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generate static HTML for each route
    ssrManifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});