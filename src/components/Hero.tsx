import React, { useRef, useEffect } from 'react';
import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function Hero({ onScrollTo }: { onScrollTo?: (id: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(err => {
        console.log("Autoplay was prevented:", err);
      });
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen bg-black overflow-hidden flex flex-col font-sans">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-55 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-end items-center px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
          <FadeIn delay={200} duration={800} className="mb-6 block">
            <div className="flex flex-col items-center">
              {/* <span className="text-[10px] sm:text-xs font-mono tracking-[0.4em] text-yellow-400/80 uppercase mb-2">
                Est. 2011
              </span> */}
              <div className="flex items-center justify-center space-x-4">
                <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-yellow-400" />
                <span className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-yellow-400 uppercase drop-shadow-[0_2px_8px_rgba(250,204,21,0.3)]">
                  Bajaj International
                </span>
                <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <div className="w-20 h-[2px] bg-yellow-400 mt-2.5 rounded-full opacity-60" />
            </div>
          </FadeIn>

          <AnimatedHeading
            text={"Industrial Excellence\nAcross India"}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 uppercase tracking-tight text-center flex flex-col items-center"
          />

          <FadeIn delay={800} duration={1000} className="text-base md:text-lg text-gray-200 mb-8 max-w-xl font-light mx-auto text-center">
            Premium lamination films, adhesives, inks and hot melt solutions powering India's leading publishing, packaging, automotive and manufacturing giants.
          </FadeIn>

          <FadeIn delay={1200} duration={1000} className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onScrollTo && onScrollTo('contact')} className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-500 hover:shadow-[0_0_15px_rgba(245,163,0,0.5)] transition-all cursor-pointer">
              Partner with Us
            </button>
            <button onClick={() => onScrollTo && onScrollTo('categories')} className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-navy transition-all cursor-pointer">
              Explore Products
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
