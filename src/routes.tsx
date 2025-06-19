import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Index from './pages/Index';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Products from './pages/Products';

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
