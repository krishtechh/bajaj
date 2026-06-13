import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { HelpCircle, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { statsData } from '../data';

interface CounterProps {
  value: number;
  suffix: string;
}

function AnimatedCounter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // larger step for higher numbers
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy block tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  // Structural layers representing a high-performance lamination film stack
  const engineeringLayers = [
    {
      id: 1,
      title: "Active UV Guard Layer",
      desc: "Top-tier polymeric barrier that filters 99.8% of atmospheric ultraviolet rays, preventing pigment fading.",
      color: "border-brand-orange bg-amber-500/10",
      accent: "text-brand-orange"
    },
    {
      id: 2,
      title: "Ultra-Clear BOPP/PET Film Base",
      desc: "High-tensile, mechanically stretched core film offering extreme puncture resistance and dimensional stability.",
      color: "border-gray-300 bg-gray-100",
      accent: "text-gray-600"
    },
    {
      id: 3,
      title: "Co-Extruded Primer Bonding Anchor",
      desc: "Advanced molecular layer enhancing absolute adhesion grip between surface ink sets and polymer base.",
      color: "border-blue-300 bg-blue-500/10",
      accent: "text-blue-500"
    },
    {
      id: 4,
      title: "Premium Copolymer Thermal Adhesive",
      desc: "Heavy-duty hot melt adhesive formulation that melts uniformly at 105°C onto printed materials, guaranteeing zero fiber-tear or peeling.",
      color: "border-brand-navy bg-brand-navy/10",
      accent: "text-brand-navy"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute left-[10%] top-1/3 w-72 h-72 bg-gray-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-orange/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN - CONTENT & STATS COUNTERS */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
                ABOUT US
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-8 tracking-tight">
                We are Bajaj International
              </h2>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-gray-600 font-sans font-light leading-relaxed text-base sm:text-lg mb-12"
            >
              <p>
                Since our inception under the visionary foresight of the Bajaj Family, we have dedicated ourselves to crafting the chemical bonds, lamination media, and specialty adhesives that fuse modern industrial products together.
              </p>
              <p>
                We serve as the silent backbone of India's robust manufacturing sector, providing fully custom-formulated polymers. Whether it is ensuring a luxury cosmetics case retains its high-gloss barrier layer, sealing commercial shipping cases at astronomical conveyor speeds, or engineering high-performance adhesives for automotive headliners, our chemistry delivers unmatched longevity.
              </p>
              <p>
                With continuous state-of-the-art testing centers, dedicated regional warehouse supply lines, and a comprehensive pan-India service network of 500+ distribution points, we bridge the gap between material research and real-world industrial throughput.
              </p>
            </motion.div>

            {/* STATS MATRIX */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-100 py-8"
              id="about-counters"
            >
              {statsData.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Micro label */}
                  <span className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                  {/* Dynamic counter */}
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - INTERACTIVE LAYERED 3D FILM STACK */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-lg p-6 bg-slate-50 rounded-3xl border border-gray-200 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-brand-navy">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-brand-navy">Interactive Product Stack</span>
                </div>
                <span className="font-mono text-[11px] text-gray-400">Hover layers to analyze composition</span>
              </div>

              {/* Stacked isometric layered visualizer */}
              <div className="relative flex flex-col space-y-4 py-6" id="layered-visualizer">
                {engineeringLayers.map((layer, index) => {
                  const isActive = activeLayer === index;
                  return (
                    <motion.div
                      key={layer.id}
                      onMouseEnter={() => setActiveLayer(index)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                        isActive 
                          ? `${layer.color} shadow-lg scale-[1.03] -translate-y-1`
                          : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm'
                      }`}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: 1000
                      }}
                      whileHover={{ z: 20 }}
                    >
                      {/* Connection bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${
                        layer.id === 1 ? 'bg-brand-orange' : 
                        layer.id === 2 ? 'bg-zinc-400' : 
                        layer.id === 3 ? 'bg-blue-400' : 'bg-brand-navy'
                      }`} />

                      <div className="pl-3 flex justify-between items-start">
                        <div>
                          <h4 className={`font-heading font-bold text-sm leading-tight transition-colors duration-300 ${
                            isActive ? layer.accent : 'text-brand-navy'
                          }`}>
                            {layer.title}
                          </h4>
                          
                          {/* Expanded detail */}
                          <p className={`font-sans text-xs leading-relaxed mt-1.5 transition-all duration-300 ${
                            isActive ? 'text-gray-700 block' : 'text-gray-400 line-clamp-1'
                          }`}>
                            {layer.desc}
                          </p>
                        </div>

                        {/* Hover indicator icon */}
                        <div className="text-gray-300">
                          {isActive ? (
                            <ShieldCheck className={`w-5 h-5 ${layer.accent}`} />
                          ) : (
                            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-brand-orange transition-colors" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dynamic bottom telemetry sheet */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-gray-100 text-left">
                <span className="font-mono text-[10px] text-gray-400 block uppercase mb-1">Testing Validation</span>
                <p className="font-sans text-xs text-brand-navy font-semibold">
                  {activeLayer !== null 
                    ? `Analyzing: ${engineeringLayers[activeLayer].title}`
                    : "Hover any layer above to read detailed analytical polymer specs."
                  }
                </p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
                  <motion.div 
                    animate={{ width: activeLayer !== null ? `${(activeLayer + 1) * 25}%` : "0%" }}
                    className="h-full bg-brand-orange rounded-full"
                    transition={{ type: 'spring' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
