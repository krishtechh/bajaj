import { motion } from 'motion/react';
import { ArrowDownRight, Gem, Info, Box } from 'lucide-react';
import { industriesData } from '../data';

export default function Businesses() {
  return (
    <section 
      id="businesses" 
      className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Visual background decorations resembling polymer bonds */}
      <div className="absolute top-1/4 left-[8%] w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-[0.4] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
            MARKET APPLICATIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-4 tracking-tight">
            Industries We Serve
          </h2>
          <p className="font-sans font-light text-gray-600 text-base sm:text-lg">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-500 bg-white ${
                  isSpanned 
                    ? 'col-span-1 md:col-span-2' 
                    : 'col-span-1'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                whileHover={{ y: -6 }}
              >
                {/* Visual Glassmorphic Border Highlight */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-orange/30 rounded-3xl duration-500 pointer-events-none z-20" />

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
                    <div className="absolute top-4 right-4 z-20 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest bg-black/45 backdrop-blur-md text-amber-400 uppercase rounded border border-amber-400/20">
                      SECURED FORMULA
                    </div>

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
                <div className="px-6 pb-6 pt-2 text-left">
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
                </div>

                {/* Subtly animated decorative chemical line at bottom edge */}
                <div className="w-full h-1 bg-gray-100 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-brand-orange duration-500" />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
