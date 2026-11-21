import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import { applyBrowserLocale } from './i18n';
import './index.css';

// Configure vite-react-ssg with the simplest possible setup
export const createRoot = ViteReactSSG({ routes });

// Fallback for the locale redirect when the Worker is not in front of the
// site. The Worker does the same thing server-side from Accept-Language.
if (typeof window !== 'undefined') {
  applyBrowserLocale();
}
