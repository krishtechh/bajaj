import React from 'react';
import FadeIn from './FadeIn';
import AnimatedHeading from './AnimatedHeading';

export default function Hero({ onScrollTo }: { onScrollTo?: (id: string) => void }) {
  return (
    <section id="hero" className="relative w-full h-screen bg-black overflow-hidden flex flex-col font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 w-full">
        <div className="max-w-4xl">
          <FadeIn delay={200} duration={800} className="mb-3 block">
            <div className="flex items-center space-x-2 text-brand-orange">
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-[0.25em] uppercase">
                Bajaj International
              </span>
              <span className="w-16 h-[2px] bg-brand-orange/60" />
            </div>
          </FadeIn>

          <AnimatedHeading
            text={"Industrial Excellence\nAcross India"}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 uppercase tracking-tight"
          />

          <FadeIn delay={800} duration={1000} className="text-base md:text-lg text-gray-200 mb-6 max-w-xl font-light">
            Premium lamination films, adhesives, inks and hot melt solutions powering India's leading publishing, packaging, automotive and manufacturing giants.
          </FadeIn>

          <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
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
