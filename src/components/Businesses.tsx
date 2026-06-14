import { motion } from 'motion/react';
import { ArrowDownRight, Gem, Info, Box } from 'lucide-react';
import { industriesData } from '../data';

export default function Businesses() {
  const getInitialPosition = (index: number) => {
    const positions = [
      { x: -80, y: 0 },  // Left
      { x: 0, y: -80 },  // Top
      { x: 80, y: 0 },   // Right
      { x: 0, y: 80 }    // Bottom
    ];
    return positions[index % 4];
  };

  return (
    <section 
      id="businesses" 
      className="py-24 sm:py-32 bg-gradient-to-br from-brand-orange via-[#ea580c] to-[#c2410c] relative overflow-hidden"
    >
      {/* Background Blue Graphics - Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Background Blue Graphics - Big Circles */}
      <div className="absolute top-[0%] right-[10%] w-[400px] h-[400px] bg-brand-navy rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 shadow-2xl opacity-95" />
      <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] bg-brand-navy rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 shadow-2xl opacity-95" />
      <div className="absolute top-[100%] right-[10%] w-[400px] h-[400px] bg-brand-navy rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 shadow-2xl opacity-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-navy mb-3 block">
            MARKET APPLICATIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-white mb-4 tracking-tight">
            Industries We Serve
          </h2>
          <p className="font-sans font-light text-white/90 text-base sm:text-lg">
            Engineering tailored bonding formulations and high-clarity lamination sheets optimized for India’s high-throughput automated manufacturing rings.
          </p>
        </div>

        {/* Masonry / Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="industries-masonry">
          
          {industriesData.map((industry, index) => {
            // Let's create visual variety (asymmetry) by making the 1st (Packaging) and 5th (Automotive) cards span larger
            // This is exactly a Masonry-inspired layout with responsive structures!
            const isSpanned = index === 0 || index === 4;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, ...getInitialPosition(index) }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: (index % 4) * 0.15 }}
                className={`relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-navy/30 border border-gray-100 flex flex-col justify-between transition-shadow duration-300 bg-white ${
                  isSpanned 
                    ? 'col-span-1 md:col-span-2' 
                    : 'col-span-1'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                whileHover={{ y: -16, scale: 1.03, transition: { type: "tween", duration: 0.15, ease: "easeOut", delay: 0 } }}
              >
                {/* Visual Glassmorphic Border Highlight */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-navy/20 rounded-3xl duration-500 pointer-events-none z-20" />

                {/* Top/Visual Content */}
                <div>
                  {/* Dynamic background card color on hover based on index */}
                  <div className="relative h-60 overflow-hidden">
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent z-10" />
                    
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale brightness-[0.80] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left overlay badge indicating industrial level */}
                    {/* <div className="absolute top-4 right-4 z-20 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest bg-black/45 backdrop-blur-md text-amber-400 uppercase rounded border border-amber-400/20">
                      SECURED FORMULA
                    </div> */}

                    {/* Bottom floating title inside the image for immersive styling */}
                    <div className="absolute bottom-4 left-6 z-20 right-6 text-left">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight drop-shadow-sm">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body textual content */}
                  <div className="p-6 text-left">
                    <p className="font-sans font-light text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Hover/CTA button at card footer */}
                {/* <div className="px-6 pb-6 pt-2 text-left">
                  <button
                    onClick={() => {
                      const contactEl = document.getElementById('contact');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold tracking-wider text-brand-navy hover:text-brand-orange uppercase transition-colors group/btn cursor-pointer"
                    id={`industry-cta-${industry.id}`}
                  >
                    <span>Request Application RFQ</span>
                    <ArrowDownRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:translate-y-1 transition-transform" />
                  </button>
                </div> */}

                {/* Subtly animated decorative chemical line at bottom edge */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100 overflow-hidden z-20">
                  <div className="w-0 group-hover:w-full h-full bg-brand-navy transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
