import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';
import { contactInfo } from '@/config/links';
import { buildWhatsAppUrl } from '@/config/links';
import { useT } from '@/i18n';

const Layout = () => {
  const t = useT();

  return (
    <StrictMode>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton whatsappUrl={buildWhatsAppUrl(t('brand.whatsappMessage'))} />
      </div>
    </StrictMode>
  );
};

export default Layout;
