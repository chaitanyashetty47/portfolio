import React from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SmoothScrollLink = ({ href, children, className }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><SmoothScrollLink href="#projects" className="hover:text-orange-500">Projects</SmoothScrollLink></li>
        <li><SmoothScrollLink href="#services" className="hover:text-orange-500">Services</SmoothScrollLink></li>
        <li><SmoothScrollLink href="#contact" className="hover:text-orange-500">Contact</SmoothScrollLink></li>
      </ul>
    </nav>
  );
}