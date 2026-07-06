import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center min-h-[44px] focus-visible:outline-none"
            aria-label="Talvium AI Home"
          >
            <Logo size={32} />
            <span className="font-heading font-bold text-prussian text-xl ml-2">Talvium AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-denim hover:text-royal font-sans font-medium text-sm transition-colors py-2 px-1 min-h-[44px] inline-flex items-center relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="tel:+919825720836"
                className="hidden xl:flex items-center gap-2 text-denim hover:text-royal font-sans text-sm transition-colors"
              >
                <Phone size={16} />
                <span>+91 98257 20836</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="font-heading font-bold text-sm tracking-wide text-white bg-gradient-to-r from-royal to-blue-600 hover:from-blue-600 hover:to-blue-700 py-2.5 px-6 rounded-lg transition-all duration-300 min-h-[44px] inline-flex items-center justify-center select-none shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center text-prussian hover:text-royal focus:outline-none rounded-lg min-w-[44px] min-h-[44px] bg-gray-50 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-prussian/60 backdrop-blur-lg lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-full max-w-md bg-white h-full shadow-2xl p-8 flex flex-col justify-between transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <Logo size={32} />
                <span className="font-heading font-bold text-prussian text-xl ml-2">Talvium AI</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-prussian hover:text-royal p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-denim hover:text-royal font-sans font-medium text-xl block py-4 min-h-[44px] flex items-center border-b border-gray-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="tel:+919825720836"
                  className="flex items-center gap-3 text-denim hover:text-royal font-sans font-medium text-xl py-4 border-b border-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>+91 98257 20836</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="w-full font-heading font-bold text-base tracking-wide text-white bg-gradient-to-r from-royal to-blue-600 hover:from-blue-600 hover:to-blue-700 py-4 px-6 rounded-lg transition-all duration-300 min-h-[52px] flex items-center justify-center select-none text-center shadow-lg hover:shadow-xl"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
