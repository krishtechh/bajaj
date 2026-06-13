import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Send, Shield, CheckCircle } from 'lucide-react';

interface HotMeltSolutionsProps {
  onBack: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function HotMeltSolutions({ onBack, onScrollTo }: HotMeltSolutionsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'packaging' | 'binding' | 'hmpsa'>('all');
  
  // Custom RFQ state
  const [selectedProduct, setSelectedProduct] = useState('Book Binding Adhesive');
  const [rfqViscosity, setRfqViscosity] = useState('1500 cPs');
  const [rfqTemp, setRfqTemp] = useState('160°C - 180°C');
  const [rfqQuantity, setRfqQuantity] = useState('1000 Kg');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const handleRFQSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setContactName('');
      setContactEmail('');
      setContactCompany('');
    }, 1500);
  };

  const tabs = [
    { id: 'all', label: 'All Hot Melts' },
    { id: 'binding', label: 'Book Binding' },
    { id: 'packaging', label: 'Packaging & Cartons' },
    { id: 'hmpsa', label: 'HMPSA (Pressure Sensitive)' }
  ] as const;

  const products = [
    {
      name: "Book Binding Adhesive",
      type: "Thermoplastic Spine & Side Gluing Polymer",
      category: "binding",
      image: "/images/products/book-binding-melt.png",
      specs: { basePolymer: "EVA (Ethylene Vinyl Acetate)", softeningPoint: "85°C - 95°C", viscosity: "4500 - 6000 cPs @ 160°C", openTime: "Medium (5 - 8 seconds)", applicationTemp: "150°C - 170°C" },
      description: "A premium-grade adhesive formulated to deliver strong bonding, excellent flexibility, and durable binding performance for books, notebooks, magazines, and other printed publications.",
      applications: ["Book Binding", "Notebook Manufacturing", "Magazine Binding", "Brochures & Catalogs", "Printing & Publishing Industry"]
    },
    {
      name: "Paper Converting Adhesive",
      type: "High Tack Rapid Joint Adhesive",
      category: "packaging",
      image: "/images/products/paper-converting-melt.png",
      specs: { basePolymer: "EVA / Synthetic Resin", softeningPoint: "100°C - 105°C", viscosity: "1200 - 1800 cPs @ 170°C", openTime: "Short (3 - 5 seconds)", applicationTemp: "160°C - 180°C" },
      description: "A premium-grade adhesive developed for efficient bonding in paper processing and converting applications, offering strong adhesion, smooth machinability, and reliable production performance.",
      applications: ["Paper Bags", "Folding Cartons", "Corrugated Boxes", "Labels & Stickers", "Paper Packaging Products", "Printing & Converting Industry"]
    },
    {
      name: "End of Line Adhesive",
      type: "Ultra-Fast Setting Case Sealing Adhesive",
      category: "packaging",
      image: "/images/products/end-of-line-melt.png",
      specs: { basePolymer: "Metallocene Polyolefin (mPO)", softeningPoint: "105°C - 115°C", viscosity: "1000 - 1400 cPs @ 160°C", openTime: "Very Short (1.5 - 3 seconds)", applicationTemp: "150°C - 180°C" },
      description: "A high-performance adhesive designed for final-stage packaging and sealing applications, delivering fast setting, strong bonding, and reliable performance in high-speed production lines.",
      applications: ["Carton Sealing", "Packaging Lines", "Corrugated Box Bonding", "Case & Tray Sealing", "Industrial Packaging", "FMCG Packaging Applications"]
    },
    {
      name: "HMPSA Adhesive",
      type: "Hot Melt Pressure Sensitive Adhesion",
      category: "hmpsa",
      image: "/images/products/hmpsa-melt.png",
      specs: { basePolymer: "SBC (Styrenic Block Copolymer)", softeningPoint: "90°C - 100°C", viscosity: "2500 - 3500 cPs @ 150°C", tack: "Very High Loop Tack", applicationTemp: "140°C - 160°C" },
      description: "HMPSA (Hot Melt Pressure Sensitive Adhesive) is a high-performance adhesive formulated to provide instant tack, strong bonding, and excellent flexibility for pressure-sensitive applications. Applied in molten form, it delivers reliable adhesion without the need for solvents or water, making it ideal for high-speed industrial and packaging operations.",
      applications: ["Self-Adhesive Labels", "Adhesive Tapes", "Hygiene Products", "Protective Films", "Packaging Applications", "Stickers & Decals", "Industrial Bonding Applications"]
    }
  ];

  const filteredProducts = products.filter(p => activeTab === 'all' || p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-16 text-gray-900 grid-overlay">
      
      {/* Decorative top strip */}
      <div className="absolute top-[76px] left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-brand-navy z-20" />
      
      {/* Warm orange/amber glow backdrop */}
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium font-mono text-gray-500">
            <button 
              onClick={onBack}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-gray-400">CATEGORIES</span>
            <span>/</span>
            <span className="text-brand-navy font-bold">HOT MELT SOLUTIONS</span>
          </nav>

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-navy hover:text-orange-500 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="text-left max-w-3xl mb-16">
          <span className="px-3 py-1.5 rounded-md bg-orange-50 border border-orange-200 text-orange-600 text-xs font-mono font-bold tracking-wider uppercase mb-4 inline-block">
            Thermoplastic Technology
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5.5xl text-brand-navy uppercase tracking-tight leading-none mb-6">
            Hot Melt <span className="text-orange-500">Solutions</span>
          </h1>
          <p className="font-sans font-light text-gray-600 text-lg sm:text-xl leading-relaxed">
            High-performance thermoplastic formulas engineered for rapid setting, outstanding heat stability, and solid bonding on both porous and non-porous automated production substrates.
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
                  if (tab.id !== 'all') {
                    const matched = products.find(p => p.category === tab.id);
                    if (matched) setSelectedProduct(matched.name);
                  }
                }}
                className={`relative px-6 py-4 font-sans font-bold text-sm sm:text-base whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-orange-600' : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeHotMeltTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* SUB-PRODUCTS DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Main Content: Products list */}
          <div className="lg:col-span-8 space-y-12">
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
                    className="rounded-3xl bg-white border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
                  >
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
                      <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-black/40 backdrop-blur-md text-orange-400 uppercase rounded-md border border-orange-500/30">
                        {product.type}
                      </span>
                    </div>

                    <div className="p-8 sm:p-10 relative z-10">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4">
                        {product.name}
                      </h3>
                      <p className="font-sans font-light text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Technical specifications grid */}
                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Thermal Parameters
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-gray-150 pb-1.5 last:border-b-0 last:pb-0">
                              <span className="font-sans text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="font-sans text-xs font-semibold text-brand-navy">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications list */}
                      <div>
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Standard Applications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app) => (
                            <span 
                              key={app} 
                              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-700 hover:border-orange-300 transition-colors"
                            >
                              <Check className="w-3.5 h-3.5 text-orange-500 mr-1.5 flex-shrink-0" />
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

          {/* Sidebar: Chemistry RFQ Desk */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden text-left">
              {/* Overlay grid */}
              <div className="absolute inset-0 grid-overlay-dark opacity-[0.03] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-[50px] pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold block mb-2">
                  THERMAL REGISTRY
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2.5xl leading-tight mb-4">
                  Request Hot Melt RFQ
                </h3>
                <p className="font-sans font-light text-xs text-blue-100/70 leading-relaxed mb-6">
                  Select your thermal polymer base, target viscosity, and operating ranges. Our Pune chemical registries will route test samples.
                </p>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-8 text-center"
                      key="rfq-success"
                    >
                      <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-3 animate-bounce" />
                      <h4 className="font-heading font-bold text-lg text-white mb-2">Thermal Spec Saved</h4>
                      <p className="font-sans font-light text-xs text-blue-100/60 leading-relaxed">
                        Parameters routed. Viscosity loop tests scheduled. Thermoplastic sample dispatch slot confirmed.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleRFQSubmit} 
                      className="space-y-4"
                      key="rfq-form"
                    >
                      {/* Product Selector */}
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Select Polymer Compound *</label>
                        <select
                          value={selectedProduct}
                          onChange={(e) => {
                            setSelectedProduct(e.target.value);
                            const found = products.find(p => p.name === e.target.value);
                            if (found && found.specs.viscosity) {
                              setRfqViscosity(found.specs.viscosity);
                            }
                            if (found && found.specs.applicationTemp) {
                              setRfqTemp(found.specs.applicationTemp);
                            }
                          }}
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                        >
                          {products.map(p => <option key={p.name} value={p.name} className="bg-brand-navy">{p.name}</option>)}
                        </select>
                      </div>

                      {/* Viscosity/Solid Content Inputs */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                          <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Target Viscosity *</label>
                          <input
                            type="text"
                            required
                            value={rfqViscosity}
                            onChange={(e) => setRfqViscosity(e.target.value)}
                            className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Oper. Temp (°C) *</label>
                          <input
                            type="text"
                            required
                            value={rfqTemp}
                            onChange={(e) => setRfqTemp(e.target.value)}
                            className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Quantity Input */}
                      <div className="flex flex-col">
                        <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Required Volume (Kg) *</label>
                        <input
                          type="text"
                          required
                          value={rfqQuantity}
                          onChange={(e) => setRfqQuantity(e.target.value)}
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <hr className="border-white/10 my-1" />

                      {/* Contact fields */}
                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your Name *"
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Business Email *"
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="Company/Enterprise Name *"
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-orange-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-sans font-extrabold text-xs tracking-wider uppercase transition-colors duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            <span>Routing parameters...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Request Hot Melt Sample</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACCENT BOX FOR BRAND TRUST */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Thermal Performance & Viscosity Control
              </h4>
              <p className="font-sans font-light text-sm text-gray-400 max-w-xl">
                Our hot melts are formulated with premium raw materials to ensure no charring, no nozzle clogging, and outstanding pot-life stability across high-speed packaging equipment.
              </p>
            </div>
          </div>
          <button
            onClick={() => onScrollTo('contact')}
            className="px-6 py-3 rounded-xl bg-orange-500 text-white text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
          >
            Inquire Bulk Logistics
          </button>
        </div>

      </div>
    </div>
  );
}
