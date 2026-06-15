import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Globe } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export default function Footer({ onScrollTo, onSelectCategory }: FooterProps) {
  return (
    <footer 
      id="contact" 
      className="bg-slate-900 text-gray-300 relative overflow-hidden pt-24 pb-8"
    >
      {/* Visual top animated gradient divider strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-navy" />
      
      {/* Faded giant ambient lettering at the bottom of page */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] w-full text-center overflow-hidden">
        <span className="font-heading font-black text-[80px] sm:text-[180px] lg:text-[230px] tracking-wider uppercase text-white block leading-none">
          BAJAJ
        </span>
      </div>

      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-[5%] w-80 h-80 bg-brand-navy/65 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* UPPER PORTION: INTEGRATED INDUSTRIAL INFO & ADDRESS PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-start">
          
          {/* LEFT COLUMN: BRAND VISION & INTRO */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
                BAJAJ INTERNATIONAL
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 tracking-tight leading-tight">
                Industrial Supply Partnerships
              </h2>
              <p className="font-sans font-light text-gray-400 text-base leading-relaxed mb-8">
                We are a trusted supply partner bringing a comprehensive portfolio of lamination films, adhesives, and industrial inks under one roof. We ensure reliable supply lines, technical support, and tailored solutions for printers, converters, and paper bag manufacturers across India.
              </p>

              {/* Social icons */}
              {/* <div className="flex items-center space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-all text-gray-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-all text-gray-400"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center transition-all text-gray-400"
                  aria-label="Corporate Website"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INFORMATION */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] text-left">
            <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
              CONTACT US
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-8 tracking-tight">
              Get in Touch with our Team
            </h3>

            {/* Direct channels */}
            <div className="space-y-8" id="footer-contact-channels">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Registered Headquarters</h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed mt-1 max-w-md">
                   C-189, near La Fortune Banquet Hall, Mayapuri Industrial Area Phase II, Mayapuri, New Delhi, Delhi, 110064
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Technical RFQ Desks</h4>
                  <a href="mailto:info@thebajajinternational.com" className="font-mono text-xs sm:text-sm text-gray-400  hover:underline block mt-1">
                    info@thebajajinternational.com
                  </a>
                  <a href="mailto:bajajinternational2007@gmail.com" className="font-mono text-xs sm:text-sm text-gray-400 hover:underline block">
                    bajajinternational2007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">Logistics Assistance Hotline</h4>
                  <p className="font-mono text-xs sm:text-sm text-gray-300 block mt-1">
                    +91 9891622338 , +91 9811258165
                  </p>
                  {/* <p className="font-sans text-[11px] text-gray-500 mt-0.5">Mon - Sat • 9 am to 6 pm IST</p> */}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MID PORTION: QUICK LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-16 mb-16 text-left">
          
          {/* Faded intro brand card */}
          <div className="md:col-span-6 flex flex-col justify-start items-start">
            <div className="font-display font-bold text-lg text-white tracking-[0.15em] mb-4 uppercase">
              BAJAJ INTERNATIONAL
            </div>
            <p className="font-sans font-light text-xs text-gray-500 leading-relaxed max-w-md">
              Securing national lamination, bulk polymer, and adhesive supply infrastructures since 2011. Certified partner of ISO, GMP, and Eco-safe polymer initiatives. Dedicated to reliability, quality, and long-term industrial partnerships.
            </p>
          </div>

          {/* Quick link sets */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Organization</h4>
            <button onClick={() => onScrollTo('about')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">About Vision</button>
            <button onClick={() => onScrollTo('leadership')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">The Board</button>
            <button onClick={() => onScrollTo('businesses')} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Businesses</button>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">Solutions Catalog</h4>
            <button onClick={() => { onSelectCategory?.('lamination'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Lamination Films</button>
            <button onClick={() => { onSelectCategory?.('adhesives'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Water-Based Adhesives</button>
            <button onClick={() => { onSelectCategory?.('hotmelt'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Hot Melt Solutions</button>
            <button onClick={() => { onSelectCategory?.('industrial-ink'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="text-gray-500 hover:text-brand-orange font-sans text-xs transition-colors cursor-pointer text-left">Industrial Inks</button>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-gray-600">
            © 2026 Bajaj International. All Rights Reserved. Designed for premium national distribution networks with ISO 9001 compliance markers.
          </p>

          {/* Scroll to Top of Page button */}
          <button
            onClick={() => onScrollTo('hero')}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-orange text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
            id="scroll-to-top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:duration-300 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
