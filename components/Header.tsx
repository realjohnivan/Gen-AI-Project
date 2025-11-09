import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const Logo: React.FC = () => (
  <NavLink to="/" className="text-2xl font-bold text-[#160578] transition-colors hover:text-[#ff8600] font-serif">
    Credtics<span className="text-[#ff8600]">.</span>
  </NavLink>
);

const NavLinks: React.FC<{ className?: string, isMobile?: boolean }> = ({ className, isMobile = false }) => {
  const linkStyle = isMobile
    ? "block px-4 py-3 rounded-md text-base font-medium transition-colors"
    : "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  
  const activeLinkStyle = "text-[#ff8600] bg-[#ff8600]/10";
  const inactiveLinkStyle = "text-gray-600 hover:bg-gray-100 hover:text-[#160578]";

  return (
    <nav className={className}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
      >
        About Us
      </NavLink>
      <NavLink
        to="/faq"
        className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
      >
        FAQ
      </NavLink>
    </nav>
  );
};


export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="hidden md:block">
            <Button>Request a Demo</Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#160578] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#ff8600]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <NavLinks isMobile className="flex flex-col space-y-1" />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-5">
            <Button className="w-full text-base py-3">Request a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
};