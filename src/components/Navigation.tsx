'use client';

import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('_hello');

  const navItems: NavItem[] = [
    { label: '_hello', href: '#', active: true },
    { label: '_sobre-mim', href: '#sobre' },
    { label: '_projetos', href: '#projetos' },
    { label: '_contato', href: '#contato' },
  ];

  return (
    <nav className="flex items-center w-full bg-transparent border-b border-light-gray/20 h-16">
      <div className="flex items-center h-full">
        <div className="nav-section h-full flex items-center justify-center px-6 border-r border-light-gray/20" style={{ minWidth: '250px' }}>
          <span className="nav-typography" style={{ color: '#8896B0' }}>Matteus Fernandes</span>
        </div>
        
        {navItems.slice(0, 3).map((item) => (
          <div key={item.label} className={`nav-section h-full flex items-center justify-center px-6 border-r border-light-gray/20 ${
            activeItem === item.label ? 'border-b-5' : ''
          }`} style={activeItem === item.label ? { borderBottomColor: '#F4B460' } : {}}>
            <a
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              className={`nav-typography transition-colors duration-200 ${
                activeItem === item.label 
                  ? 'text-white' 
                  : 'hover:text-white'
              }`}
              style={activeItem === item.label ? {} : { color: '#8896B0' }}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center h-full">
        <div className={`nav-section h-full flex items-center justify-center px-6 border-l border-light-gray/20 ${
          activeItem === navItems[3].label ? 'border-b-5' : ''
        }`} style={activeItem === navItems[3].label ? { borderBottomColor: '#F4B460' } : {}}>
          <a
            href={navItems[3].href}
            onClick={() => setActiveItem(navItems[3].label)}
            className={`nav-typography transition-colors duration-200 ${
              activeItem === navItems[3].label 
                ? 'text-white' 
                : 'hover:text-white'
            }`}
            style={activeItem === navItems[3].label ? {} : { color: '#8896B0' }}
          >
            {navItems[3].label}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
