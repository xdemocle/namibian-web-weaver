import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Journey from './pages/Journey';
// import MrCrackers from './pages/MrCrackers';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

/**
 * Nav entries. `path` is the English (unprefixed) path; the Header adds the
 * locale prefix and looks the label up in the dictionary via `labelKey`.
 */
export const navLinks = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.journey', path: '/journey' },
  // Mr Millet Crackers page disabled but route kept intact
  // { labelKey: 'nav.products', path: '/products' },
  { labelKey: 'nav.products', path: '/products' },
  { labelKey: 'nav.contact', path: '/contact' },
];

// Define routes for vite-react-ssg.
// English lives at the root, Afrikaans under the /af prefix. The pages are the
// same components: they read the locale from the current path.
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'journey',
        element: <Journey />,
      },
      // {
      //   path: 'mr-crackers',
      //   element: <MrCrackers />,
      // },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'af',
        element: <Index />,
      },
      {
        path: 'af/about',
        element: <About />,
      },
      {
        path: 'af/journey',
        element: <Journey />,
      },
      {
        path: 'af/contact',
        element: <Contact />,
      },
      {
        path: 'af/products',
        element: <Products />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
