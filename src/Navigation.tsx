import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SmoothScrollLink = ({ href, children, className, onClick }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-orange-500"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
        <li>
          <SmoothScrollLink 
            href="#projects" 
            className="hover:text-orange-500 transition-colors"
          >
            Projects
          </SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink 
            href="#services" 
            className="hover:text-orange-500 transition-colors"
          >
            Services
          </SmoothScrollLink>
        </li>
        <li>
          <SmoothScrollLink 
            href="#contact" 
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </SmoothScrollLink>
        </li>
      </ul>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full right-0 w-48 mt-2 py-2 bg-gray-900 rounded-lg shadow-xl md:hidden">
          <ul className="space-y-2">
            <li>
              <SmoothScrollLink 
                href="#projects" 
                className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition-colors"
                onClick={closeMenu}
              >
                Projects
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink 
                href="#services" 
                className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition-colors"
                onClick={closeMenu}
              >
                Services
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink 
                href="#contact" 
                className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-500 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}