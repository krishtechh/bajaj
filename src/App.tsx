import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, HelpCircle, Shield, Award, Landmark } from 'lucide-react';

// Import our custom premium components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Distribution from './components/Distribution';
import Businesses from './components/Businesses';
import Leadership from './components/Leadership';
import IndiaMap from './components/IndiaMap';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // 1. Simulate premium custom loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // 1.8 seconds loader
    return () => clearTimeout(timer);
  }, []);

  // 2. High-performance mouse glow tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3. Active highlighted section tracking using standard IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'categories', 'distribution', 'businesses', 'leadership', 'network', 'gallery', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // focused center viewport trigger
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isLoading]);

  // Handle smooth scroll targets
  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset by navbar height (approx 80px)
      const offset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white select-none cursor-glow">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* PREMIUM INDUSTRIAL LOADING INTRO */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-center items-center p-6 text-white text-center"
            id="global-preloader"
          >
            {/* Glowing background circles inside preloader */}
            <div className="absolute w-80 h-80 bg-brand-orange/15 rounded-full blur-[80px]" />
            <div className="absolute w-[400px] h-[400px] bg-brand-navy/20 rounded-full blur-[120px] bottom-12" />

            <div className="relative z-10 max-w-sm flex flex-col items-center">
              {/* Spinner icon */}
              <div className="mb-8 relative w-20 h-20 flex items-center justify-center">
                {/* Rotating outermost line */}
                <span className="absolute inset-0 border-t-2 border-brand-orange rounded-full animate-spin duration-3000" />
                {/* Core globe outline representation */}
                <svg className="w-10 h-10 text-white animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="rgba(255,255,255,0.4)" />
                  <ellipse cx="12" cy="12" rx="4" ry="10" stroke="rgba(255,255,255,0.4)" />
                </svg>
              </div>

              {/* Company banner */}
              <h1 className="font-heading font-extrabold text-2xl tracking-tight text-white mb-2 leading-none uppercase">
                BAJAJ <span className="font-mono text-[13px] font-medium tracking-widest text-brand-grey block mt-1">INTERNATIONAL</span>
              </h1>
              <p className="font-sans font-light text-xs text-gray-500 max-w-[200px] leading-relaxed mb-6">
                Bonding Polymers & Industrial Lamination Media
              </p>

              {/* Loader progress strip bar */}
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-brand-orange"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* MAIN SITE LAYOUT FLOW */
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* 1. Header Navbar navigation bar */}
            <Navbar onScrollTo={handleScrollTo} activeSection={activeSection} />

            {/* 2. Structured Section Modules as requested */}
            <main className="flex-1">
              <Hero onScrollTo={handleScrollTo} />
              <About />
              <Categories />
              <Distribution />
              <Businesses />
              <Leadership />
              <IndiaMap />
              <Gallery />
            </main>

            {/* 3. Inquiry Form & Footer contact details */}
            <Footer onScrollTo={handleScrollTo} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
