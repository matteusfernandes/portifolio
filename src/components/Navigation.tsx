'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const Navigation = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: '_hello', href: '/' },
    { label: '_sobre-mim', href: '/sobre-mim' },
    { label: '_projetos', href: '/projetos' },
    { label: '_contato', href: '#contato' },
  ];

  return (
    <nav className="flex items-center w-full bg-transparent border-b border-light-gray/20 h-16">
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
  );
};

export default Navigation;
