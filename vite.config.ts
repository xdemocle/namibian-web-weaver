import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { siteMetadata } from './src/lib/seo-metadata';

// https://vitejs.dev/config/
export default {
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          language: siteMetadata.language,
        },
      },
    }),
  ],
  ssgOptions: {
    script: 'sync',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generate static HTML for each route
    ssrManifest: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
