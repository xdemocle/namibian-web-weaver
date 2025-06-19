import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// Configure vite-react-ssg with the simplest possible setup
export const createRoot = ViteReactSSG({ routes });
