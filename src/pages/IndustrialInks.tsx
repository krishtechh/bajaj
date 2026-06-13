import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Send, Shield, CheckCircle } from 'lucide-react';

interface IndustrialInksProps {
  onBack: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function IndustrialInks({ onBack, onScrollTo }: IndustrialInksProps) {
  // Custom RFQ state
  const [selectedProduct, setSelectedProduct] = useState('Water Based Ink');
  const [rfqProcess, setRfqProcess] = useState('Flexography / Gravure');
  const [rfqColorMatch, setRfqColorMatch] = useState('PANTONE Coated');
  const [rfqQuantity, setRfqQuantity] = useState('500 Kg');
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

  const products = [
    {
      name: "Water Based Ink",
      type: "Eco-Friendly Flexo & Gravure Packaging Ink",
      image: "/images/products/water-based-ink.png",
      specs: { solventBase: "Water / Glycol", viscosity: "25 - 45 seconds (Zahn Cup #2)", dryingMechanism: "Evaporation & Absorption", phRange: "8.2 - 9.0", rubResistance: "Excellent (>200 rubs)" },
      description: "Water Based Ink is an eco-friendly printing ink formulated using water as the primary solvent, offering excellent print quality, smooth flow, and reliable color performance. Widely used in packaging and printing industries, it provides low odor, fast drying, and efficient printing performance across various paper and packaging substrates.",
      applications: ["Flexible Packaging", "Paper Printing", "Corrugated Boxes", "Labels & Stickers", "Paper Bags", "Food Packaging", "Printing Industry"]
    },
    {
      name: "Offset Ink",
      type: "High-Resolution Lithographic Sheetfed Ink",
      image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=800",
      specs: { solventBase: "Vegetable Oil / Resin Emulsion", viscosity: "Paste structure", dryingMechanism: "Oxidative Polymerization", tackRange: "9 - 12 (Tackmeter @ 32°C)", glossRating: "High gloss (>60%)" },
      description: "Offset Ink is a high-quality printing ink specially formulated for offset printing applications, delivering sharp image reproduction, excellent color consistency, and smooth printing performance. It is widely used for commercial printing and packaging applications requiring high-resolution and professional print results.",
      applications: ["Commercial Printing", "Brochures & Catalogs", "Magazines & Books", "Packaging Materials", "Labels & Stickers", "Promotional Materials", "Newspaper Printing"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-16 text-gray-900 grid-overlay">
      
      {/* Decorative top strip */}
      <div className="absolute top-[76px] left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-400 to-brand-navy z-20" />
      
      {/* Indigo/violet ambient backdrop */}
      <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />

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

        {/* SUB-PRODUCTS DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Main Content: Products list */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-12 text-left">
              {products.map((product, pIdx) => (
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
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-black/40 backdrop-blur-md text-indigo-400 uppercase rounded-md border border-indigo-500/30">
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
                        Pigment Parameters
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
                        Substrate Compatibility
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span 
                            key={app} 
                            className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-700 hover:border-indigo-300 transition-colors"
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
            </div>
          </div>

          {/* Sidebar: Chemistry RFQ Desk */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden text-left">
              {/* Overlay grid */}
              <div className="absolute inset-0 grid-overlay-dark opacity-[0.03] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-bold block mb-2">
                  COLOR REGISTRY
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2.5xl leading-tight mb-4">
                  Request Ink Spec RFQ
                </h3>
                <p className="font-sans font-light text-xs text-blue-100/70 leading-relaxed mb-6">
                  Select your printing press process, color matching indices (PANTONE/RAL), and estimated consumption.
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
                      <CheckCircle className="w-12 h-12 text-indigo-400 mx-auto mb-3 animate-bounce" />
                      <h4 className="font-heading font-bold text-lg text-white mb-2">Ink Spec Sent</h4>
                      <p className="font-sans font-light text-xs text-blue-100/60 leading-relaxed">
                        Color specialists notified. Pigment dispersion testing scheduled. Sample shipment details mapped.
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
                        <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Select Ink Class *</label>
                        <select
                          value={selectedProduct}
                          onChange={(e) => {
                            setSelectedProduct(e.target.value);
                            if (e.target.value === 'Water Based Ink') {
                              setRfqProcess('Flexography / Gravure');
                            } else {
                              setRfqProcess('Sheetfed Offset / Litho');
                            }
                          }}
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
                        >
                          {products.map(p => <option key={p.name} value={p.name} className="bg-brand-navy">{p.name}</option>)}
                        </select>
                      </div>

                      {/* Printing Process & Color Inputs */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                          <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Press Process *</label>
                          <input
                            type="text"
                            required
                            value={rfqProcess}
                            onChange={(e) => setRfqProcess(e.target.value)}
                            className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-heading font-bold text-[10px] text-blue-200/80 uppercase mb-1.5">Color Index *</label>
                          <input
                            type="text"
                            required
                            value={rfqColorMatch}
                            onChange={(e) => setRfqColorMatch(e.target.value)}
                            className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
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
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
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
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Business Email *"
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="Company/Enterprise Name *"
                          className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 focus:border-indigo-400 text-white text-xs outline-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-sans font-extrabold text-xs tracking-wider uppercase transition-colors duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            <span>Routing parameters...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Request Ink Spec Sheet</span>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-500 flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Quality Density Consistency & Press Safety
              </h4>
              <p className="font-sans font-light text-sm text-gray-400 max-w-xl">
                Our offset and water-based ink lines undergo strict density spectro-photometer measurements and VOC level checks to ensure compliance with modern packaging print safety guidelines.
              </p>
            </div>
          </div>
          <button
            onClick={() => onScrollTo('contact')}
            className="px-6 py-3 rounded-xl bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
          >
            Inquire Bulk Logistics
          </button>
        </div>

      </div>
    </div>
  );
}
