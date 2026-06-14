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
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div>
            <AnimatedHeading
              text={"Industrial Excellence\nAcross India"}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 uppercase tracking-tight"
            />

            <FadeIn delay={800} duration={1000} className="text-base md:text-lg text-gray-200 mb-6 max-w-xl font-light">
              Premium lamination films, adhesives, inks and hot melt solutions powering India's leading publishing, packaging, automotive and manufacturing giants.
            </FadeIn>

            <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
              <button onClick={() => onScrollTo && onScrollTo('contact')} className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-500 hover:shadow-[0_0_15px_rgba(245,163,0,0.5)] transition-all">
                Partner with Us
              </button>
              <button onClick={() => onScrollTo && onScrollTo('categories')} className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-navy transition-all">
                Explore Products
              </button>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000} className="liquid-glass border border-white/20 px-6 py-3 rounded-xl inline-block">
              <span className="text-sm md:text-base lg:text-lg font-bold text-brand-orange tracking-widest uppercase">
                ESTD 2011 • Global Industrial Standards
              </span>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
