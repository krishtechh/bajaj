import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';

interface IndustrialInksProps {
  onBack: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function IndustrialInks({ onBack, onScrollTo }: IndustrialInksProps) {
  const [activeTab, setActiveTab] = useState<'water' | 'offset'>('water');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const tabs = [
    { id: 'water', label: 'Water Based Ink' },
    { id: 'offset', label: 'Offset Ink' }
  ] as const;

  const products = [
    {
      name: "Water Based Ink",
      type: "Eco-Friendly Flexo & Gravure Packaging Ink",
      category: "water",
      image: "/images/products/water-based-ink.png",
      specs: { solventBase: "Water / Glycol", viscosity: "25 - 45 seconds (Zahn Cup #2)", dryingMechanism: "Evaporation & Absorption", phRange: "8.2 - 9.0", rubResistance: "Excellent (>200 rubs)" },
      description: "Water Based Ink is an eco-friendly printing ink formulated using water as the primary solvent, offering excellent print quality, smooth flow, and reliable color performance. Widely used in packaging and printing industries, it provides low odor, fast drying, and efficient printing performance across various paper and packaging substrates.",
      applications: ["Flexible Packaging", "Paper Printing", "Corrugated Boxes", "Labels & Stickers", "Paper Bags", "Food Packaging", "Printing Industry"]
    },
    {
      name: "Offset Ink",
      type: "High-Resolution Lithographic Sheetfed Ink",
      category: "offset",
      image: "/images/products/offset-ink.png",
      specs: { solventBase: "Vegetable Oil / Resin Emulsion", viscosity: "Paste structure", dryingMechanism: "Oxidative Polymerization", tackRange: "9 - 12 (Tackmeter @ 32°C)", glossRating: "High gloss (>60%)" },
      description: "Offset Ink is a high-quality printing ink specially formulated for offset printing applications, delivering sharp image reproduction, excellent color consistency, and smooth printing performance. It is widely used for commercial printing and packaging applications requiring high-resolution and professional print results.",
      applications: ["Commercial Printing", "Brochures & Catalogs", "Magazines & Books", "Packaging Materials", "Labels & Stickers", "Promotional Materials", "Newspaper Printing"]
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-16 text-gray-900 grid-overlay">

      {/* Decorative top strip */}
      <div className="absolute top-[76px] left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-400 to-brand-navy z-20" />

      {/* Indigo/violet ambient backdrop */}
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium font-mono text-gray-500">
            <button
              onClick={onBack}
              className="hover:text-indigo-500 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-gray-400">CATEGORIES</span>
            <span>/</span>
            <span className="text-brand-navy font-bold">INDUSTRIAL INK & COATINGS</span>
          </nav>

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-navy hover:text-indigo-500 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="text-left max-w-3xl mb-16">
          <span className="px-3 py-1.5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-mono font-bold tracking-wider uppercase mb-4 inline-block">
            Advanced Color Formulation
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5.5xl text-brand-navy uppercase tracking-tight leading-none mb-6">
            Industrial <span className="text-indigo-500">Inks</span>
          </h1>
          <p className="font-sans font-light text-gray-600 text-lg sm:text-xl leading-relaxed">
            High-fidelity pigment systems formulated for outstanding color density, precise rub-resistance, and smooth flow behaviors on continuous automated press runs.
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
                className={`relative px-6 py-4 font-sans font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300 cursor-pointer ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-brand-navy'
                  }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeInkTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* SUB-PRODUCTS DISPLAY */}
        <div className="mb-24">

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
                    className="rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)] hover:border-indigo-300 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Top colored indicator strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500/0 group-hover:bg-indigo-500 transition-all duration-300 z-20" />

                    {/* Glowing radial ambient background inside the card */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/[0.03] rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/[0.12] transition-all duration-500" />

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
                      <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-black/40 backdrop-blur-md text-indigo-400 uppercase rounded-md border border-indigo-500/30">
                        {product.type}
                      </span>
                    </div>

                    <div className="p-8 sm:p-10 relative z-10 text-left">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-sans font-light text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Technical specifications grid */}
                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Pigment Parameters
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div 
                              key={key} 
                              className="flex justify-between border-b border-gray-150 pb-1.5 last:border-b-0 last:pb-0 hover:bg-indigo-50/20 px-1.5 rounded transition-colors duration-200"
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
                          Substrate Compatibility
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span 
                              key={app} 
                              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors duration-300"
                            >
                              <Check className="w-3.5 h-3.5 text-indigo-500 mr-1.5 flex-shrink-0" />
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
