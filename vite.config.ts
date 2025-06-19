import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { siteMetadata } from './src/lib/seo-metadata';
import { VitePluginRadar } from 'vite-plugin-radar';

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
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-RT207G9WPN',
        consentDefaults: {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          wait_for_update: 500,
        },
      },
      // Google Tag Manager tag injection
      gtm: {
        id: 'G-RT207G9WPN',
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
