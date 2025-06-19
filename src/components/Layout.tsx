import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';
import { contactInfo } from '@/config/links';

const Layout = () => {
  return (
    <StrictMode>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton whatsappUrl={contactInfo.whatsapp.url} />
      </div>
    </StrictMode>
  );
};

export default Layout;
