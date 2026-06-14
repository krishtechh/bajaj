import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Sparkles, Play, Pause } from 'lucide-react';
import { leadersData } from '../data';

export default function Leadership() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        handleNext();
      }, 7000); // 7 seconds slide intervals
    } else if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPlaying, currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? leadersData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === leadersData.length - 1 ? 0 : prev + 1));
  };

  // Select current leader info
  const leader = leadersData[currentSlide];

  return (
    <section 
      id="leadership" 
      className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Huge faded background display text based on current active leader */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <motion.span 
          key={leader.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="font-heading font-black text-[120px] md:text-[230px] lg:text-[280px] uppercase text-white leading-none whitespace-nowrap"
        >
          {currentSlide === 0 ? "FOUNDER" : currentSlide === 1 ? "INNOVATE" : "ALLIANCES"}
        </motion.span>
      </div>

      {/* Futuristic floating abstract lines and nodes */}
      <div className="absolute top-[10%] left-12 w-48 h-48 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-12 w-64 h-64 bg-brand-navy/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-dark opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
              OUR STEWARDS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-white mb-4 tracking-tight">
              Leadership & Vision
            </h2>
            <p className="font-sans font-light text-gray-400 text-base sm:text-lg">
              Empowering global industrial ecosystems through strategic chemistry, sustainable practices, and uncompromised partner alignment.
            </p>
          </div>

          {/* Autoplay & Slider controllers as seen in executive galleries */}
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full p-1.5 border border-white/10 self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white/70 hover:text-white cursor-pointer"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              id="leader-toggle-play"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="h-6 w-[1.5px] bg-white/10" />
            
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white cursor-pointer"
              aria-label="Previous leader"
              id="leader-btn-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-white cursor-pointer"
              aria-label="Next leader"
              id="leader-btn-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Sliders Track */}
        <div className="relative min-h-[450px] lg:min-h-[500px]" id="leaders-slide-viewer">
          <AnimatePresence mode="wait">
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              
              {/* Leader portrait photo left with creative visual masking mask and glows */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
                  {/* Decorative orange layer framing that emerges on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  
                  {/* Glowing background halo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 pointer-events-none" />
                  
                  {/* Large Portrait */}
                  <motion.img
                    initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
                    animate={{ scale: 1, filter: 'grayscale(0%)' }}
                    transition={{ duration: 0.8 }}
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Operational details card inside portrait */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                    {/* <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-orange bg-amber-500/10 px-2 py-0.5 rounded border border-brand-orange/20 inline-block mb-1.5 backdrop-blur-sm">
                      MEMBER EXECUTIVE BOARD
                    </span> */}
                    <h4 className="font-heading font-extrabold text-lg text-white">
                      {leader.name}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Leader vision description texts right with cinematic staggered reveal */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Large animated quotation icon resembling the brand spirit */}
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 border border-brand-orange/20">
                  <Quote className="w-7 h-7 fill-brand-orange" />
                </div>

                {/* Animated Quote */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-heading font-medium italic text-xl sm:text-2xl lg:text-3xl text-gray-100 leading-snug mb-8 tracking-wide drop-shadow-sm border-l-4 border-brand-orange pl-4 sm:pl-6"
                >
                  “{leader.quote}”
                </motion.p>

                {/* Director's Name & Designation subtitle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="font-sans font-semibold text-brand-orange text-sm tracking-widest uppercase mt-1">
                    {leader.designation}
                  </p>
                </motion.div>

                {/* Core operational biography paragraph */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-sans font-light text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl"
                >
                  {leader.bio}
                </motion.p>

                {/* Interactive slide indicator list at the bottom of the Vision Block */}
                <div className="flex items-center space-x-3 mt-10">
                  {leadersData.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setCurrentSlide(dotIdx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIdx === currentSlide 
                          ? 'w-8 bg-brand-orange' 
                          : 'w-2.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
