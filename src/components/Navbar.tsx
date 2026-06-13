import { useState, useEffect } from 'react';
import { Menu, X, Landmark, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'categories', label: 'Categories' },
    { id: 'distribution', label: 'Distribution' },
    { id: 'businesses', label: 'Industries' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'network', label: 'Network' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        id="app-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3 border-b border-gray-100' 
            : 'bg-white/80 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo area */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => onScrollTo('hero')}
              id="navbar-logo"
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-brand-navy rounded-lg shadow-md group-hover:bg-brand-orange transition-colors duration-300">
                <div className="w-5 h-5 border-2 border-brand-orange rotate-45 transition-transform duration-500 group-hover:rotate-90 group-hover:border-white"></div>
                {/* Small indicator */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full border-2 border-white animate-ping" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-brand-navy group-hover:text-brand-orange transition-colors duration-300 uppercase leading-none">
                  BAJAJ
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-grey font-sans uppercase mt-0.5">
                  International
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => onScrollTo(link.id)}
                    className={`relative px-3.5 py-2 font-sans font-medium text-sm transition-colors duration-300 cursor-pointer ${
                      isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-navy'
                    }`}
                    id={`navlink-${link.id}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-orange"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => onScrollTo('contact')}
                id="cta-navbar-contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-orange hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer text-center"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-brand-navy hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
              id="mobile-drawer"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onScrollTo(link.id);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-sans font-medium text-base transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-50 text-brand-orange border-l-4 border-brand-orange pl-3'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-brand-navy pl-4'
                      }`}
                      id={`mobile-navlink-${link.id}`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <div className="pt-4 px-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onScrollTo('contact');
                    }}
                    className="flex w-full items-center justify-center px-4 py-3 rounded-xl bg-brand-navy text-white text-base font-semibold hover:bg-brand-orange transition-colors shadow-sm"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
