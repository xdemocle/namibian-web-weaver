import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  return (
    <StrictMode>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton
          phoneNumber='+264812345678'
          message="Hello LizWise! I'm interested in your products and would like more information."
        />
      </div>
    </StrictMode>
  );
};

export default Layout;
