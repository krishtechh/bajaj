import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from './SmoothScroll';

export const ScrollToTop: React.FC = () => {
  const { lenis } = useLenis();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-brand-navy border border-white/10 text-white shadow-2xl transition-all duration-300 transform group hover:scale-110 active:scale-95 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Glow aura outline */}
      <div className="absolute inset-0 rounded-full border border-brand-orange/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(245,163,0,0.4)] pointer-events-none" />

      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center">
        <ArrowUp className="w-5.5 h-5.5 text-brand-orange group-hover:-translate-y-1 transition-transform duration-300" />
      </div>
    </button>
  );
};

export default ScrollToTop;
