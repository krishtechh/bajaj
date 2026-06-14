import { motion } from 'motion/react';
import { ArrowDown, Layers, Award, Zap, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Stagger wrapper settings for nice scroll entrance
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-white overflow-hidden grid-overlay"
    >
      {/* Background radial gradient and blur circles for futuristic atmosphere */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-brand-navy/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Decorative vertical lines representing industrial guidelines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-gray-100 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-gray-100 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE TEXT & HERO CONTENT */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline pill */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-50 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase mb-6 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>ESTD 2011 • Global Industrial Standards</span>
            </motion.div>

            {/* Main Display Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-[72px] leading-[0.95] text-brand-navy tracking-tighter mb-6 uppercase"
            >
              Industrial <br />
              <span className="text-brand-orange">Excellence</span> <br />
              <span>Across India</span>
            </motion.h1>

            {/* Subheading text */}
            <motion.p 
              variants={itemVariants}
              className="font-sans font-light text-gray-500 text-lg leading-relaxed max-w-lg mb-10"
            >
              Premium lamination films, adhesives, inks and hot melt solutions powering India's leading publishing, packaging, automotive and manufacturing giants.
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={() => onScrollTo('categories')}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-bold rounded-xl shadow-xl shadow-orange-100 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
                id="hero-cta-explore"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => onScrollTo('distribution')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy font-bold text-brand-navy rounded-xl hover:bg-brand-navy hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                id="hero-cta-distributor"
              >
                <span>Become a Distributor</span>
              </button>
            </motion.div>

            {/* Mini industrial highlights */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8"
            >
              <div className="flex items-start space-x-2">
                <Layers className="w-5 h-5 text-brand-orange mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-brand-navy">ISO 9001:2015</h4>
                  <p className="font-sans text-xs text-gray-500">Certified Quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Award className="w-5 h-5 text-brand-orange mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-brand-navy">Eco-Safe</h4>
                  <p className="font-sans text-xs text-gray-500">Green Polymers</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-brand-orange mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-brand-navy">R&D Laboratories</h4>
                  <p className="font-sans text-xs text-gray-500">Custom Formulations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FLOATING ABSTRACT 3D MODEL & CARDS */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[450px] sm:h-[500px] w-full mt-12 lg:mt-0">
            {/* Animated Glow Backdrop */}
            <div className="absolute w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[80px]" />

            {/* Core rotating abstract structural rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-brand-orange/40 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-gray-200 flex items-center justify-center relative"
              >
                <div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full bg-brand-navy/5 flex items-center justify-center border-2 border-brand-navy/10 relative">
                  {/* Floating abstract particles using layout grid helper */}
                  <span className="absolute top-2 left-6 w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                  <span className="absolute bottom-5 right-4 w-2 h-2 bg-brand-navy rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Inner layered product representation */}
            <motion.div
              className="absolute z-10 w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden flex flex-col justify-center items-center p-6 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-brand-orange mb-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Premium film/laminate rolls icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-sm text-brand-navy">Engineered Laminates</h4>
              <p className="font-sans text-[11px] text-gray-400 mt-1">Multi-barrier Protection</p>
              <div className="mt-3 text-xs font-mono font-medium text-brand-orange px-2.5 py-0.5 rounded-full bg-amber-50 border border-brand-orange/10">
                ACTIVE COAT
              </div>
            </motion.div>

            {/* Floating Statistics Card 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 sm:left-12 z-20 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-white"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-brand-orange">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-base block text-brand-navy leading-none">500+</span>
                <span className="font-sans text-[11px] text-gray-500 font-medium">Dealers Pan-India</span>
              </div>
            </motion.div>

            {/* Floating Statistics Card 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-8 right-4 sm:right-12 z-20 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 border border-white"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-brand-navy">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Truck logo representation */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-base block text-brand-navy leading-none">1000+</span>
                <span className="font-sans text-[11px] text-gray-500 font-medium">Corporate Clients</span>
              </div>
            </motion.div>

            {/* Floating Statistics Card 3 (Bottom Left - Extra detailed) */}
            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-2 sm:left-4 z-20 glass-panel px-3 py-2.5 rounded-xl shadow-lg border border-white flex items-center space-x-2"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-sans text-xs font-semibold text-brand-navy">24/7 Logistics Active</span>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer group" onClick={() => onScrollTo('about')}>
          <span className="font-sans text-xs font-medium text-gray-400 tracking-wider mb-2 group-hover:text-brand-orange transition-colors">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1 cursor-pointer"
          >
            <div className="w-1.5 h-3 bg-brand-orange rounded-full" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
