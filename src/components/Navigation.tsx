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
              <Link
                key={item.label}
                href={item.href}
                scroll={false}
                className={`nav-section h-full flex items-center justify-center px-6 border-r border-light-gray/20 transition-all duration-300 ${
                  isActive ? 'border-b-5' : ''
                } hover:bg-white/5`}
                style={{
                  ...(isActive ? { borderBottomColor: '#F4B460' } : {})
                }}
              >
                <span
                  className={`nav-typography transition-colors duration-200 ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                  style={isActive ? {} : { color: '#8896B0' }}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
      </div>

      <div className="flex-1"></div>

      <div className="flex items-center h-full">
        <a
          href={navItems[3].href}
          className={`nav-section h-full flex items-center justify-center px-6 border-l border-light-gray/20 animate-fade-in-up hover:bg-white/5 transition-all duration-300`}
          style={{ animationDelay: '600ms' }}
        >
          <span
            className={`nav-typography transition-colors duration-200 hover:text-white`}
            style={{ color: '#8896B0' }}
          >
            {navItems[3].label}
          </span>
        </a>
      </div>
    </nav>

    {/* Mobile Navigation */}
    <nav className="md:hidden w-full bg-transparent border-b border-light-gray/20 relative">
      {/* Mobile Header */}
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-3">
          <span className="nav-typography text-light-gray">
            Matteus Fernandes
          </span>
          {/* Current page indicator */}
          <div className="flex items-center space-x-1">
            <span className="text-light-gray text-xs">/</span>
            <span 
              className="text-xs font-mono px-2 py-1 rounded"
              style={{ 
                backgroundColor: '#F4B460', 
                color: '#1a1a1a' 
              }}
            >
              {pathname === '/' ? 'home' : 
               pathname === '/sobre-mim' ? 'sobre-mim' :
               pathname === '/projetos' ? 'projetos' : 'página'}
            </span>
          </div>
        </div>
        
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
              <div key={item.label} className="border-b border-light-gray/10 last:border-b-0 relative">
                {/* Active indicator - left border */}
                {isActive && (
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-r-sm"
                    style={{ backgroundColor: '#F4B460' }}
                  ></div>
                )}
                
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className={`block py-4 px-6 nav-typography transition-all duration-200 relative ${
                      isActive 
                        ? 'text-white bg-white/10 border-l-transparent' 
                        : 'text-light-gray hover:text-white hover:bg-white/5'
                    }`}
                    style={{
                      paddingLeft: isActive ? '1.75rem' : '1.5rem'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-sm">
                        ●
                      </span>
                    )}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-4 px-6 nav-typography transition-all duration-200 relative ${
                      isActive 
                        ? 'text-white bg-white/10 border-l-transparent' 
                        : 'text-light-gray hover:text-white hover:bg-white/5'
                    }`}
                    style={{
                      paddingLeft: isActive ? '1.75rem' : '1.5rem'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {item.label}
                    {isActive && (
                      <span 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm"
                        style={{ color: '#F4B460' }}
                      >
                        ●
                      </span>
                    )}
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
