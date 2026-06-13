import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
  selectedCategoryId: string | null;
  setSelectedCategoryId: (categoryId: string | null) => void;
}

const categoryItems = [
  { id: 'lamination', label: 'Lamination Films' },
  { id: 'adhesives', label: 'Water-Based Adhesives' },
  { id: 'hotmelt', label: 'Hot Melt Solutions' },
  { id: 'industrial-ink', label: 'Industrial Inks' }
];

export default function Navbar({ onScrollTo, activeSection, selectedCategoryId, setSelectedCategoryId }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

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
          <div className="flex items-center justify-between h-16">
            {/* Logo area */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => onScrollTo('hero')}
              id="navbar-logo"
            >
              <img 
                src="/images/logo.png" 
                alt="Bajaj International Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" 
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = (selectedCategoryId && link.id === 'categories') || (!selectedCategoryId && activeSection === link.id);
                
                if (link.id === 'categories') {
                  return (
                    <div
                      key={link.id}
                      className="relative py-2"
                      onMouseEnter={() => setIsDropdownHovered(true)}
                      onMouseLeave={() => setIsDropdownHovered(false)}
                    >
                      <button
                        onClick={() => onScrollTo('categories')}
                        className={`relative px-3.5 py-1 font-sans font-medium text-sm transition-colors duration-300 cursor-pointer flex items-center gap-1 ${
                          isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-navy'
                        }`}
                        id={`navlink-${link.id}`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                        {isActive && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-orange"
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {isDropdownHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white border border-gray-100 shadow-2xl py-2 z-50 text-left"
                          >
                            {categoryItems.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => {
                                  setSelectedCategoryId(item.id);
                                  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                                  setIsDropdownHovered(false);
                                }}
                                className="block w-full text-left px-5 py-3 font-sans font-semibold text-xs text-gray-700 hover:bg-slate-50 hover:text-brand-orange transition-colors cursor-pointer"
                              >
                                {item.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

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
                  const isActive = (selectedCategoryId && link.id === 'categories') || (!selectedCategoryId && activeSection === link.id);
                  
                  if (link.id === 'categories') {
                    return (
                      <div key={link.id} className="space-y-1">
                        <button
                          onClick={() => setIsMobileSubMenuOpen(!isMobileSubMenuOpen)}
                          className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg font-sans font-medium text-base transition-all duration-200 ${
                            isActive
                              ? 'bg-amber-50 text-brand-orange border-l-4 border-brand-orange pl-3'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-navy pl-4'
                          }`}
                          id={`mobile-navlink-${link.id}`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSubMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isMobileSubMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1 overflow-hidden"
                            >
                              <button
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileSubMenuOpen(false);
                                  onScrollTo('categories');
                                }}
                                className="block w-full text-left px-4 py-2 text-xs font-semibold text-gray-500 hover:text-brand-navy transition-colors cursor-pointer"
                              >
                                View All Categories
                              </button>
                              {categoryItems.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileSubMenuOpen(false);
                                    setSelectedCategoryId(item.id);
                                    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                                  }}
                                  className={`block w-full text-left px-4 py-2.5 rounded-md font-sans text-sm font-medium transition-colors cursor-pointer ${
                                    selectedCategoryId === item.id 
                                      ? 'text-brand-orange bg-amber-50/50' 
                                      : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50'
                                  }`}
                                >
                                  {item.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

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
