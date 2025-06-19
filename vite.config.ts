import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePluginRadar } from 'vite-plugin-radar';
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
    ViteImageOptimizer({
      // Image optimization settings
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 90,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
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
