import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from './components/SmoothScroll';

// Import our custom premium components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Distribution from './components/Distribution';
import Businesses from './components/Businesses';
import Leadership from './components/Leadership';
import IndiaMap from './components/IndiaMap';
// import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import our 4 newly created category pages
import LaminationFilms from './pages/LaminationFilms';
import WaterBasedAdhesives from './pages/WaterBasedAdhesives';
import HotMeltSolutions from './pages/HotMeltSolutions';
import IndustrialInks from './pages/IndustrialInks';

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

export default function App() {
  const { lenis } = useLenis();
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  
  const navigate = useNavigate();
  const location = useLocation();

  // Derive selectedCategoryId from location path
  let selectedCategoryId: string | null = null;
  if (location.pathname === '/lamination') selectedCategoryId = 'lamination';
  else if (location.pathname === '/adhesives') selectedCategoryId = 'adhesives';
  else if (location.pathname === '/hotmelt') selectedCategoryId = 'hotmelt';
  else if (location.pathname === '/industrial-ink') selectedCategoryId = 'industrial-ink';

  console.log("App Render - Path:", location.pathname, "Selected ID:", selectedCategoryId);

  const setSelectedCategoryId = (id: string | null) => {
    console.log("setSelectedCategoryId invoked with:", id);
    if (id) {
      navigate('/' + id);
    } else {
      navigate('/');
    }
  };

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

  // Scroll to top immediately when a category page is opened/closed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [selectedCategoryId]);

  // 3. Active highlighted section tracking using standard IntersectionObserver
  useEffect(() => {
    if (selectedCategoryId) return; // Do not observe when on a dedicated page

    const sections = ['hero', 'about', 'categories', 'distribution', 'businesses', 'leadership', 'network', 'contact'];
    
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
  }, [isLoading, selectedCategoryId]);

  // Handle smooth scroll targets
  const handleScrollTo = (sectionId: string) => {
    setSelectedCategoryId(null);
    
    // We wait for the DOM to render the home sections before scrolling
    setTimeout(() => {
      if (lenis) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { offset: -76, duration: 1.2 });
        } else {
          lenis.scrollTo(0, { duration: 1.2 });
        }
      } else {
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
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    }, 120);
  };

  return (
    <div className="relative min-h-screen bg-white select-none cursor-glow">
      {/* PREMIUM INDUSTRIAL LOADING INTRO OVERLAY */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[radial-gradient(circle_at_center,_var(--color-brand-navy)_0%,_#0a1f40_100%)] flex flex-col justify-center items-center p-6 text-white text-center"
            id="global-preloader"
          >
            <div className="relative z-10 max-w-4xl flex flex-col items-center">
              {/* Company banner with staggered slide-up mask animation */}
              <h1 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] text-white mb-6 uppercase text-center select-none leading-none flex flex-wrap justify-center">
                {"BAJAJ INTERNATIONAL".split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block overflow-hidden py-1 px-2">
                    <motion.span
                      initial={{ y: "120%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1.0,
                        ease: [0.16, 1, 0.3, 1], // premium custom cubic-bezier (easeOutExpo)
                        delay: wordIndex * 0.15
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Loader progress strip bar */}
              <div className="w-48 sm:w-64 md:w-80 h-[3px] bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                  className="h-full bg-brand-orange shadow-[0_0_10px_rgba(245,163,0,0.8)]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SITE LAYOUT FLOW */}
      <div className="flex flex-col min-h-screen">
        {/* 1. Header Navbar navigation bar */}
        {!isLoading && (
          <Navbar 
            onScrollTo={handleScrollTo} 
            activeSection={selectedCategoryId ? '' : activeSection} 
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
        )}

        {/* 2. Structured Section Modules as requested */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={
                <motion.div
                  key="home-sections"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero onScrollTo={handleScrollTo} />
                  <About />
                  <Categories onSelectCategory={setSelectedCategoryId} />
                  <Distribution />
                  <Businesses />
                  <Leadership />
                  <IndiaMap />
                  {/* <Gallery /> */}
                </motion.div>
              } />
              
              <Route path="/lamination" element={
                <motion.div
                  key="lamination"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <LaminationFilms 
                    onBack={() => setSelectedCategoryId(null)} 
                    onScrollTo={handleScrollTo} 
                  />
                </motion.div>
              } />

              <Route path="/adhesives" element={
                <motion.div
                  key="adhesives"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <WaterBasedAdhesives 
                    onBack={() => setSelectedCategoryId(null)} 
                    onScrollTo={handleScrollTo} 
                  />
                </motion.div>
              } />

              <Route path="/hotmelt" element={
                <motion.div
                  key="hotmelt"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <HotMeltSolutions 
                    onBack={() => setSelectedCategoryId(null)} 
                    onScrollTo={handleScrollTo} 
                  />
                </motion.div>
              } />

              <Route path="/industrial-ink" element={
                <motion.div
                  key="industrial-ink"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <IndustrialInks 
                    onBack={() => setSelectedCategoryId(null)} 
                    onScrollTo={handleScrollTo} 
                  />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* 3. Inquiry Form & Footer contact details */}
        <Footer onScrollTo={handleScrollTo} onSelectCategory={(id) => setSelectedCategoryId(id)} />
      </div>
      <ScrollToTop />
    </div>
  );
}
