import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/routes';
import { LOCALES, localePath, rememberLocale, stripLocale, useLocale, useT } from '@/i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = useT();
  const locale = useLocale();

  const isActivePath = (path: string) => location.pathname === localePath(path, locale);
  // Path of the current page without the locale prefix, used by the switcher.
  const currentPath = stripLocale(location.pathname);

  return (
    <header className='bg-white shadow-lg relative z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link to={localePath('/', locale)} className='flex items-center space-x-3'>
            <div className='w-16 h-16 flex items-center justify-center'>
              <img src='/android-chrome-64x64.png' alt='LizWise Logo' className='w-full h-full object-contain' />
            </div>
            <div>
              <span className='block text-xl font-bold text-gray-800'>LizWise</span>
              <p className='text-sm text-gray-600'>Investment CC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={localePath(link.path, locale)}
                className={`font-medium transition-colors duration-200 ${
                  isActivePath(link.path)
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            {/* Language switcher */}
            <div className='flex items-center gap-1 border-l border-gray-200 pl-6' aria-label={t('nav.language')}>
              {LOCALES.map(code => (
                <Link
                  key={code}
                  to={localePath(currentPath, code)}
                  onClick={() => rememberLocale(code)}
                  aria-current={code === locale ? 'true' : undefined}
                  className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                    code === locale ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
            className='lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t'>
            <nav className='flex flex-col space-y-4'>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={localePath(link.path, locale)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActivePath(link.path) ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <div className='flex items-center gap-2 pt-2 border-t border-gray-100'>
                {LOCALES.map(code => (
                  <Link
                    key={code}
                    to={localePath(currentPath, code)}
                    onClick={() => {
                      rememberLocale(code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                      code === locale ? 'bg-red-600 text-white' : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    {code.toUpperCase()}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
