'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: '_hello', href: '/' },
    { label: '_sobre-mim', href: '/sobre-mim' },
    { label: '_projetos', href: '/projetos' },
    { label: '_contato', href: '#contato' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center w-full bg-transparent border-b border-light-gray/20 h-16">
        <div className="flex items-center h-full">
          <div
            className="nav-section h-full flex items-center justify-center px-6 border-r border-light-gray/20"
            style={{ minWidth: '280px' }}
          >
            <span className="nav-typography" style={{ color: '#8896B0' }}>
              Matteus Fernandes
            </span>
          </div>

          {navItems.slice(0, 3).map((item) => {
            // Define ativo para rotas reais
            const isActive = (item.href === '/' && pathname === '/') ||
              (item.href === '/sobre-mim' && pathname.startsWith('/sobre-mim')) ||
              (item.href === '/projetos' && pathname.startsWith('/projetos'));
            return (
              <div
                key={item.label}
                className={`nav-section h-full flex items-center justify-center px-6 border-r border-light-gray/20 transition-all duration-300 ${
                  isActive ? 'border-b-5' : ''
                }`}
                style={{
                  ...(isActive ? { borderBottomColor: '#F4B460' } : {})
                }}
              >
                <Link
                  href={item.href}
                className={`nav-typography transition-colors duration-200 ${
                  isActive ? 'text-white' : 'hover:text-white'
                }`}
                style={isActive ? {} : { color: '#8896B0' }}
                scroll={false}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex-1"></div>

      <div className="flex items-center h-full">
        <div
          className={`nav-section h-full flex items-center justify-center px-6 border-l border-light-gray/20 animate-fade-in-up`}
          style={{ animationDelay: '600ms' }}
        >
          <a
            href={navItems[3].href}
            className={`nav-typography transition-colors duration-200 hover:text-white`}
            style={{ color: '#8896B0' }}
          >
            {navItems[3].label}
          </a>
        </div>
      </div>
    </nav>

    {/* Mobile Navigation */}
    <nav className="md:hidden w-full bg-transparent border-b border-light-gray/20 relative">
      {/* Mobile Header */}
      <div className="flex items-center justify-between h-16 px-4">
        <span className="nav-typography text-light-gray">
          Matteus Fernandes
        </span>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-light-gray transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-light-gray transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-light-gray transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-gradient-main border-b border-light-gray/20 transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      } z-50`}>
        <div className="py-2">
          {navItems.map((item) => {
            const isActive = (item.href === '/' && pathname === '/') ||
              (item.href === '/sobre-mim' && pathname.startsWith('/sobre-mim')) ||
              (item.href === '/projetos' && pathname.startsWith('/projetos'));
            
            return (
              <div key={item.label} className="border-b border-light-gray/10 last:border-b-0">
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className={`block py-4 px-6 nav-typography transition-colors duration-200 ${
                      isActive ? 'text-white bg-white/5' : 'text-light-gray hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 px-6 nav-typography transition-colors duration-200 ${
                      isActive ? 'text-white bg-white/5' : 'text-light-gray hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  </>
  );
};

export default Navigation;
