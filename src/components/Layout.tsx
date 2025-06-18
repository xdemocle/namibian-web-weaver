
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  // Other SEO props
}

const Layout = ({ 
  children, 
  title = 'LizWise Investment CC', 
  description = 'Locally made. Naturally nourishing. Proudly Namibian. We specialize in mahangu (pearl millet) pasta, rich pasta sauces, and creamy mozzarella—crafted with care, tradition, and innovation.' 
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Other meta tags */}
      </Helmet>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton 
        phoneNumber="+264812345678" 
        message="Hello LizWise! I'm interested in your products and would like more information." 
      />
    </div>
  );
};

export default Layout;
