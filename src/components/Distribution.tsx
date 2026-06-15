import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { MapPin, Warehouse, Users, ArrowUpRight, Award, Waypoints } from 'lucide-react';
import { distributorsData } from '../data';

export default function Distribution() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section
      id="distribution"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Visual background lines showing connection networks */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute top-[40%] right-[15%] w-72 h-72 bg-gray-50 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">

        {/* Title center-headed as requested */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
            SUPPLY NETWORKS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-4 tracking-tight">
            Authorized Distribution Channels
          </h2>
          <p className="font-sans font-light text-gray-600 text-base sm:text-lg">
            Our strategic enterprise-level partners supplying rapid, climate-regulated shipping logistics and complete inventory pipelines.
          </p>
        </div>

        {/* Alternating Channels Layout Grid */}
        <div ref={containerRef} className="flex flex-col space-y-16 lg:space-y-24 relative" id="distributions-track">

          {/* Timeline Background Line */}
          <div className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 pointer-events-none z-0" />
          
          {/* Timeline Scroll Progress Line */}
          <motion.div 
            className="absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-brand-navy to-brand-orange shadow-[0_0_12px_rgba(249,115,22,0.8)] pointer-events-none z-0 origin-top"
            style={{ scaleY: scrollYProgress }}
          />


          {distributorsData.map((distributor, idx) => {
            const isLogoLeft = idx % 2 === 0;
            // Alternating animation entry: 
            // idx 0, 2 (Apex, Vanguard) slide in from left to right (x: -120 to 0)
            // idx 1 (Sterling) slides in from right to left (x: 120 to 0)
            return (
              <motion.div
                key={distributor.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: "-120px" }}
                transition={{ duration: 0.85, type: "spring", stiffness: 50, damping: 15 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-[2rem] border border-gray-100 relative ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                  }`}
              >


                {/* Left Placement: Logo / Visual Image */}
                <div className={`col-span-1 lg:col-span-5 ${isLogoLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-md border border-gray-150">
                    {/* Glowing Accent Ring */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-orange/40 transition-colors duration-500 rounded-2xl z-20 pointer-events-none" />

                    {/* Company Logo Image */}
                    <div className="w-full h-64 bg-white flex items-center justify-center p-8">
                      <img
                        src={distributor.logo}
                        alt={distributor.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Regional overlay ribbon */}
                    {/* <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-brand-navy border border-white/10 text-white rounded-lg flex items-center space-x-1.5 shadow-md">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span className="font-heading font-bold text-xs tracking-wide">{distributor.region}</span>
                    </div> */}
                  </div>
                </div>

                {/* Right Placement: Content Block */}
                <div className={`col-span-1 lg:col-span-7 flex flex-col items-start ${isLogoLeft ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Strategic Partner Indicator */}
                  {/* <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-gray-200 text-xs text-slate-500 font-mono mb-4">
                    <Award className="w-4 h-4 text-brand-orange" />
                    <span>AUTHORIZED PREMIER HUB {idx + 1}</span>
                  </div> */}

                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4 tracking-tight">
                    {distributor.name}
                  </h3>

                  <p className="font-sans font-light text-gray-600 text-base leading-relaxed mb-6">
                    {distributor.description}
                  </p>

                  {/* Operational statistics nested grid */}
                  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 pt-6 border-t border-gray-100" id={`dist-stats-${distributor.id}`}>
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-brand-orange flex-shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs text-brand-navy block leading-tight">Dealers Connected</span>
                        <span className="font-sans text-[11px] text-gray-500">{distributor.stats.dealers}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-brand-navy flex-shrink-0">
                        <Warehouse className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs text-brand-navy block leading-tight">Storage Facility</span>
                        <span className="font-sans text-[11px] text-gray-500">{distributor.stats.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                        <Waypoints className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-xs text-brand-navy block leading-tight">Regional Outreach</span>
                        <span className="font-sans text-[11px] text-gray-500">{distributor.stats.coverage}</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Connect now CTA button */}
                  {/* <button
                    onClick={() => {
                      const contactEl = document.getElementById('contact');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-orange hover:shadow-lg hover:shadow-amber-500/10 text-white font-sans font-semibold text-sm transition-all duration-300 group cursor-pointer"
                    id={`connect-distributor-${distributor.id}`}
                  >
                    <span>Connect Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button> */}

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
