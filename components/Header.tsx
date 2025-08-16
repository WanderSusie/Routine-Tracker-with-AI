import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-accent">
            <a href="#">{PERSONAL_INFO.name}</a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;