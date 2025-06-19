import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Journey from './pages/Journey';
import MrCrackers from './pages/MrCrackers';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

export const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/journey', label: 'Our Journey' },
  { path: '/mr-crackers', label: 'Mr Crackers' },
  { path: '/products', label: 'Products' },
  { path: '/contact', label: 'Contact' },
];

// Define routes for vite-react-ssg
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
      {
        path: 'mr-crackers',
        element: <MrCrackers />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
