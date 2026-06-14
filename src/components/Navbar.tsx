import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
  selectedCategoryId: string | null;
  setSelectedCategoryId: (categoryId: string | null) => void;
}

export default function Navbar({ onScrollTo, activeSection, selectedCategoryId, setSelectedCategoryId }: NavbarProps) {
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
    { id: 'about', label: 'About', type: 'section' },
    { id: 'distribution', label: 'Distribution', type: 'section' },
    { id: 'businesses', label: 'Industries', type: 'section' },
    { id: 'network', label: 'Network', type: 'section' },
    { id: 'adhesives', label: 'Water-Based Adhesives', type: 'category' },
    { id: 'hotmelt', label: 'Hot Melt Solutions', type: 'category' },
    { id: 'industrial-ink', label: 'Industrial Inks', type: 'category' },
    { id: 'lamination', label: 'Lamination Films', type: 'category' }
  ];

  return (
    <>
      <motion.nav
        id="app-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-3.5 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200/50' 
            : 'bg-white/95 backdrop-blur-md'
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
              <img 
                src="/images/logo.png" 
                alt="Bajaj International Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link, index) => {
                const isFirstCategory = link.type === 'category' && index > 0 && navLinks[index - 1].type !== 'category';

                return (
                  <React.Fragment key={link.id}>
                    {isFirstCategory && (
                      <div className="flex items-center mx-2 xl:mx-4">
                        <div className="h-5 w-[1px] bg-gray-300/80 rounded-full" />
                      </div>
                    )}
                    
                    {link.type === 'category' ? (
                      <button
                        onClick={() => {
                          setSelectedCategoryId(link.id);
                          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                        }}
                        className={`relative px-2 xl:px-3 py-2 font-sans text-[10px] xl:text-xs uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                          selectedCategoryId === link.id ? 'text-brand-orange font-bold' : 'text-slate-500 hover:text-brand-navy font-semibold'
                        }`}
                      >
                        {link.label}
                        {selectedCategoryId === link.id && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-orange"
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedCategoryId(null);
                          onScrollTo(link.id);
                        }}
                        className={`relative px-2 xl:px-3 py-2 font-sans text-sm transition-colors duration-300 cursor-pointer ${
                          !selectedCategoryId && activeSection === link.id ? 'text-brand-navy font-bold' : 'text-gray-700 hover:text-brand-orange font-medium'
                        }`}
                        id={`navlink-${link.id}`}
                      >
                        {link.label}
                        {!selectedCategoryId && activeSection === link.id && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-navy"
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          />
                        )}
                      </button>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-brand-navy hover:bg-gray-100 focus:outline-none transition-colors cursor-pointer"
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
              className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-hidden"
              id="mobile-drawer"
            >
              <div className="px-4 pt-4 pb-6 space-y-1 sm:px-6">
                {navLinks.map((link, index) => {
                  const isFirstCategory = link.type === 'category' && index > 0 && navLinks[index - 1].type !== 'category';

                  return (
                    <React.Fragment key={link.id}>
                      {isFirstCategory && (
                        <div className="py-2 px-4">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Products</div>
                        </div>
                      )}

                      {link.type === 'category' ? (
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setSelectedCategoryId(link.id);
                            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                          }}
                          className={`block w-full text-left px-4 py-3 font-sans text-xs uppercase tracking-wider transition-all duration-200 ${
                            selectedCategoryId === link.id
                              ? 'bg-amber-50 text-brand-orange font-bold border-l-4 border-brand-orange pl-3'
                              : 'text-slate-500 hover:bg-gray-50 hover:text-brand-navy font-semibold pl-4'
                          }`}
                          id={`mobile-navlink-${link.id}`}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setSelectedCategoryId(null);
                            onScrollTo(link.id);
                          }}
                          className={`block w-full text-left px-4 py-3 font-sans font-medium text-base transition-all duration-200 ${
                            !selectedCategoryId && activeSection === link.id
                              ? 'bg-slate-50 text-brand-navy font-bold border-l-4 border-brand-navy pl-3'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-orange pl-4'
                          }`}
                          id={`mobile-navlink-${link.id}`}
                        >
                          {link.label}
                        </button>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
}
