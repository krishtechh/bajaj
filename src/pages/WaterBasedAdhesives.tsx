import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';

interface WaterBasedAdhesivesProps {
  onBack: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function WaterBasedAdhesives({ onBack, onScrollTo }: WaterBasedAdhesivesProps) {
  const [activeTab, setActiveTab] = useState<'lamination' | 'side-pasting' | 'converting' | 'psa'>('lamination');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const tabs = [
    { id: 'lamination', label: 'Lamination' },
    { id: 'side-pasting', label: 'Side Pasting' },
    { id: 'converting', label: 'Paper Converting' },
    { id: 'psa', label: 'PSA' }
  ] as const;

  const products = [
    {
      name: "Lamination Adhesive",
      type: "High-Solid Wet Lamination Film Bonding",
      category: "lamination",
      image: "/images/products/lamination-adhesive.png",
      specs: { chemicalBase: "Acrylic Copolymer Emulsion", solidContent: "48% - 52%", viscosity: "150 - 250 cPs", ph: "7.0 - 8.5", appearance: "Milky White Liquid" },
      description: "A high-performance bonding solution specially formulated for laminating films, foils, paper, and flexible packaging materials. Designed to provide strong adhesion, excellent durability, and smooth lamination performance, it ensures reliable bonding while enhancing the strength and appearance of laminated products across printing and packaging industries.",
      applications: ["Flexible Packaging", "Film & Foil Lamination", "Printed Packaging Materials", "Food Packaging", "Paper Lamination", "Industrial Packaging", "Multi-Layer Packaging Structures"]
    },
    {
      name: "Side Pasting Adhesive",
      type: "Fast Setting Carton Joint Bonding",
      category: "side-pasting",
      image: "/images/products/side-pasting-adhesive.png",
      specs: { chemicalBase: "Synthetic Resin Emulsion", solidContent: "52% - 55%", viscosity: "3500 - 4500 cPs", ph: "4.5 - 6.0", appearance: "Pale Yellow/White paste" },
      description: "A premium-grade adhesive formulated for strong and reliable bonding in side pasting and carton sealing applications. It offers smooth application, fast setting, and excellent adhesion performance for efficient packaging production.",
      applications: ["Folding Cartons", "Corrugated Boxes", "Printed Packaging", "Carton Side Pasting", "Paper Packaging Products", "Packaging Industry"]
    },
    {
      name: "Paper Converting Adhesive",
      type: "High-Machinability Tube/Bag Formulation",
      category: "converting",
      image: "/images/products/paper-converting-adhesive.png",
      specs: { chemicalBase: "Modified Starch & PVA Blend", solidContent: "38% - 42%", viscosity: "1800 - 2400 cPs", ph: "6.0 - 7.5", appearance: "White liquid" },
      description: "A high-performance bonding solution specially formulated for paper processing and converting applications. Designed to provide strong adhesion, smooth machinability, and efficient production performance, it is widely used in the manufacturing of paper-based packaging and printed materials requiring reliable bonding and clean finishing.",
      applications: ["Paper Bags", "Folding Cartons", "Corrugated Boxes", "Book Binding", "Labels & Stickers", "Paper Packaging Products", "Printing & Converting Industry"]
    },
    {
      name: "PSA Adhesive",
      type: "Pressure Sensitive Tackifier",
      category: "psa",
      image: "/images/products/psa-adhesive.png",
      specs: { chemicalBase: "Acrylic Ester Copolymer", solidContent: "53% - 56%", viscosity: "100 - 300 cPs", peelAdhesion: "Excellent (>12 N/inch)", appearance: "Translucent White" },
      description: "PSA (Pressure Sensitive Adhesive) is a specialized adhesive that forms an instant bond when light pressure is applied, without the need for heat, water, or solvents. Known for its excellent tack, flexibility, and reliable adhesion performance, it is widely used in labeling, tape manufacturing, and self-adhesive packaging applications.",
      applications: ["Self-Adhesive Labels", "Adhesive Tapes", "Stickers & Decals", "Protective Films", "Packaging Applications", "Medical & Hygiene Products", "Industrial Bonding Applications"]
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-16 text-gray-900 grid-overlay">
      
      {/* Decorative top strip */}
      <div className="absolute top-[76px] left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-brand-navy z-20" />
      
      {/* Soft teal/green ambient backdrop */}
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium font-mono text-gray-500">
            <button 
              onClick={onBack}
              className="hover:text-teal-500 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-gray-400">CATEGORIES</span>
            <span>/</span>
            <span className="text-brand-navy font-bold">WATER-BASED ADHESIVES</span>
          </nav>

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-navy hover:text-teal-500 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="text-left max-w-3xl mb-16">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5.5xl text-brand-navy uppercase tracking-tight leading-none mb-6">
            Water-Based <span className="text-teal-500">Adhesives</span>
          </h1>
          <p className="font-sans font-light text-gray-600 text-lg sm:text-xl leading-relaxed">
            Formulated using purified water carrier bases, our eco-friendly, zero-VOC emulsions provide instant grab, high solid counts, and stable shear resistance for high-speed industrial lines.
          </p>
        </div>

        {/* CATEGORY INTERACTIVE TAB MENU */}
        <div className="border-b border-gray-200 mb-12 flex space-x-1 overflow-x-auto pb-px scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                }}
                className={`relative px-6 py-4 font-sans font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-teal-600' : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeAdhesiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* SUB-PRODUCTS DISPLAY */}
        <div className="mb-24 max-w-5xl mx-auto">
          
          {/* Main Content: Products list */}
          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12 text-left"
              >
                {filteredProducts.map((product, pIdx) => (
                  <motion.div 
                    key={product.name} 
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: pIdx * 0.05, ease: "easeOut" }}
                    className="rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] hover:border-teal-300 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Top colored indicator strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500/0 group-hover:bg-teal-500 transition-all duration-300 z-20" />

                    {/* Glowing radial ambient background inside the card */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/[0.03] rounded-full blur-[80px] pointer-events-none group-hover:bg-teal-500/[0.12] transition-all duration-500" />

                    {/* Product Image Banner */}
                    <div className="relative h-52 sm:h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-4 right-5 z-20 font-mono text-5xl font-black text-white/20 drop-shadow-lg">
                        0{pIdx + 1}
                      </span>
                    </div>

                    <div className="p-8 sm:p-10 relative z-10">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4 group-hover:text-teal-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-sans font-light text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Technical specifications grid */}
                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Technical Parameters
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div 
                              key={key} 
                              className="flex justify-between border-b border-gray-150 pb-1.5 last:border-b-0 last:pb-0 hover:bg-teal-50/30 px-1.5 rounded transition-colors duration-200"
                            >
                              <span className="font-sans text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="font-sans text-xs font-semibold text-brand-navy">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications list */}
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Target Operations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span 
                              key={app} 
                              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-700 hover:border-teal-350 hover:bg-teal-50/50 hover:text-teal-600 transition-all duration-300"
                            >
                              <Check className="w-3.5 h-3.5 text-teal-500 mr-1.5 flex-shrink-0" />
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
