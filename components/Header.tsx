import React, { useState } from 'react';
import { NavLink } from '../types';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks: NavLink[] = [
  { label: 'HOME', href: '#' },
  { label: 'CONTACT US', href: 'mailto:info@nwerectors.com' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="block hover:opacity-90 transition-opacity">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold tracking-wider hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@nwerectors.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700 hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@nwerectors.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-orange-500 text-white px-4 py-3 rounded-md font-bold text-base uppercase"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};