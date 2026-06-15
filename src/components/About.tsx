import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { HelpCircle, Layers, ShieldCheck, ChevronRight, Award, Settings, Users } from 'lucide-react';
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

  // Key features representing why clients choose Bajaj International
  const chooseUsItems = [
    {
      id: 1,
      title: "One-Stop Solution",
      desc: "One-Stop Solution for Industrial Adhesives, Films and Printing Inks under one roof.",
      color: "border-brand-orange bg-amber-500/10",
      accent: "text-brand-orange",
      icon: Layers
    },
    {
      id: 2,
      title: "Wide Portfolio of Trusted Brands",
      desc: "Instant access to a wide range of industry-leading, global manufacturing partners.",
      color: "border-blue-200 bg-blue-500/10",
      accent: "text-blue-600",
      icon: Award
    },
    {
      id: 3,
      title: "Assured & Reliable Supply Chain",
      desc: "Dependable regional logistics networks ensuring prompt, scheduled daily deliveries.",
      color: "border-emerald-200 bg-emerald-500/10",
      accent: "text-emerald-600",
      icon: ShieldCheck
    },
    {
      id: 4,
      title: "Competent Technical Support",
      desc: "Direct access to expert technicians and specialists to optimize your daily production.",
      color: "border-indigo-200 bg-indigo-500/10",
      accent: "text-indigo-600",
      icon: Settings
    },
    {
      id: 5,
      title: "Customer-Centric Approach",
      desc: "Tailored commercial and technical solutions aligned with your unique business goals.",
      color: "border-rose-200 bg-rose-500/10",
      accent: "text-rose-600",
      icon: Users
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
          <div className="lg:col-span-6 flex flex-col text-left">
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
                About Bajaj International
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
                At <strong>Bajaj International</strong>, we believe that sourcing of <strong>Industrial Packaging Adhesive, Films and Allied Products</strong> should be simple, reliable, and efficient.
              </p>
              <p>
                As a trusted Supply Partner, we bring a comprehensive range of products under one roof, enabling businesses to source everything they need from a single, dependable destination. We do not just supply Adhesives, Films and Inks, but we provide robust <strong>Packaging solutions</strong> with assured quality, competitive pricing, and timely delivery.
              </p>
              <p>
                With <strong>2 decades</strong> of successful distribution experience behind us, we partner with leading manufacturers to bridge the gap between world-class, proven products and the businesses that rely on them for their everyday production.
              </p>
              <p>
                Whether you are a Printer, Converter, Quick Commerce, or a Paper Bag manufacturer, Bajaj International is the final stop to provide you the right products, technical support, and solutions to help your business.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-orange-50 border border-orange-100 text-brand-navy font-heading font-bold text-sm sm:text-base">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 mr-px"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                  </span>
                  <span>Bajaj International – Your Trusted Partner</span>
                </div>
              </div>
            </motion.div>

            {/* STATS MATRIX */}
            {/* <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-100 py-8"
              id="about-counters"
            >
              {statsData.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                 
                  <span className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                 
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* RIGHT COLUMN - WHY CHOOSE US */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-lg p-6 bg-slate-50 rounded-3xl border border-gray-200 shadow-sm relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-left">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-orange">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-extrabold text-base text-brand-navy">Why Choose Us?</span>
                </div>
              </div>

              {/* Stacked interactive choose us items */}
              <div className="relative flex flex-col space-y-4 py-2" id="why-choose-us-stack">
                {chooseUsItems.map((item, index) => {
                  const isActive = activeLayer === index;
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setActiveLayer(index)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative cursor-pointer rounded-xl border p-4 transition-all duration-300 text-left ${isActive
                          ? `${item.color} shadow-lg scale-[1.03] -translate-y-1`
                          : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm'
                        }`}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: 1000
                      }}
                      whileHover={{ z: 20 }}
                    >
                      {/* Connection bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${item.id === 1 ? 'bg-brand-orange' :
                          item.id === 2 ? 'bg-blue-500' :
                            item.id === 3 ? 'bg-emerald-500' :
                              item.id === 4 ? 'bg-indigo-600' : 'bg-rose-500'
                        }`} />

                      <div className="pl-3 flex justify-between items-start">
                        <div className="flex items-start space-x-3 pr-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 ${isActive ? 'bg-white/80' : 'bg-slate-50'
                            }`}>
                            <IconComponent className={`w-4 h-4 ${isActive ? item.accent : 'text-gray-500'}`} />
                          </div>
                          <div>
                            <h4 className={`font-heading font-bold text-sm leading-tight transition-colors duration-300 ${isActive ? item.accent : 'text-brand-navy'
                              }`}>
                              {item.title}
                            </h4>

                            {/* Expanded detail */}
                            <p className={`font-sans text-xs leading-relaxed mt-1.5 transition-all duration-300 ${isActive ? 'text-gray-700 block' : 'text-gray-400 line-clamp-1'
                              }`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Hover indicator icon */}
                        <div className="text-gray-300 flex-shrink-0 self-center">
                          {isActive ? (
                            <ShieldCheck className={`w-5 h-5 ${item.accent}`} />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
