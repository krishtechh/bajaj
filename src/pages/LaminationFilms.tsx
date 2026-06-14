import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Compass } from 'lucide-react';

interface LaminationFilmsProps {
  onBack: () => void;
  onScrollTo: (sectionId: string) => void;
}

export default function LaminationFilms({ onBack, onScrollTo }: LaminationFilmsProps) {
  const [activeTab, setActiveTab] = useState<'bopp' | 'pvc' | 'thermal' | 'polyester'>('bopp');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const tabs = [
    { id: 'bopp', label: 'BOPP Films' },
    { id: 'pvc', label: 'PVC Films' },
    { id: 'thermal', label: 'Thermal Lamination' },
    { id: 'polyester', label: 'Polyester & Special' }
  ] as const;

  const boppProducts = [
    {
      name: "BOPP Film (10 Mic)",
      fullName: "BOPP (Biaxially Oriented Polypropylene) Film 10 Mic",
      type: "High Gloss Lamination Film",
      image: "/images/products/bopp-film-glossy.png",
      specs: { thickness: "10 Microns", clarity: "Excellent (>94%)", treatment: "Corona treated (both sides)", gloss: "High gloss (>90 GU)" },
      description: "A high-clarity lamination film designed to provide excellent gloss, surface protection, and enhanced visual appeal to printed and packaging materials. Widely used in the printing and packaging industry, it offers superior transparency, durability, and moisture resistance for high-quality finishing applications.",
      applications: ["Flexible Packaging", "Brochures & Catalogs", "Printed Cartons", "Labels & Stickers", "Shopping Bags"]
    },
    {
      name: "Matte BOPP Film (12 Mic)",
      fullName: "Matte BOPP (Biaxially Oriented Polypropylene) Film 12 Mic",
      type: "Premium Matte Lamination Film",
      image: "/images/products/bopp-matte-film.png",
      specs: { thickness: "12 Microns", clarity: "Translucent Matte", treatment: "One side corona, one side matte", gloss: "Ultra Low (<5 GU)" },
      description: "A high-performance lamination film designed to deliver a premium matte finish with enhanced surface protection and durability. It is extensively used in printing and packaging applications to improve product presentation while providing resistance against moisture, scratches, and wear. Available in various roll sizes and widths as per customer requirements.",
      applications: ["Luxury Packaging", "Cosmetic Boxes", "Premium Brochures", "Book Covers", "High-End Printed Materials"]
    }
  ];

  const pvcProducts = [
    {
      name: "PVC Film (7 Mic)",
      fullName: "PVC Film (Polyvinyl Chloride Film) 7 Mic",
      type: "Flexible Protective Wrapping Film",
      image: "/images/products/pvc-film.png",
      specs: { thickness: "7 Microns", flexibility: "High elasticity", dustResistance: "Static protective", clarity: "Clear finish" },
      description: "A versatile and durable plastic film known for its flexibility, smooth finish, and excellent protective properties. Engineered for reliable performance, it offers resistance against moisture, dust, and external damage, making it suitable for a wide range of packaging and industrial applications. Its adaptability and cost-effectiveness make it widely preferred across printing, wrapping, and manufacturing industries.",
      applications: ["Protective Wrapping", "Industrial Packaging", "Retail Packaging", "Decorative Covering", "Stationery Products", "Promotional Materials"]
    }
  ];

  const thermalProducts = [
    {
      name: "Thermal Gloss Film (20 Mic)",
      fullName: "Thermal Gloss Film 20 Mic",
      type: "Heat-Activated Gloss Lamination Film",
      image: "/images/products/thermal-gloss.png",
      specs: { thickness: "20 Microns (12mic film + 8mic EVA glue)", activationTemp: "90°C - 110°C", bondStrength: "Superior adhesion", clarity: "95%" },
      description: "A premium lamination film specially designed for thermal lamination processes, offering a high-gloss finish with superior print enhancement and strong adhesion. Unlike standard BOPP and PVC films, thermal gloss film comes with a heat-activated coating that enables direct lamination without the need for additional adhesive, ensuring faster processing and a smoother finish. It is widely used for high-quality printed materials and premium packaging applications requiring enhanced brightness, clarity, and professional appearance.",
      applications: ["Posters & Flyers", "High-Gloss Printed Sheets", "Premium Packaging", "Magazine Covers", "Posters and Promotional Materials"]
    },
    {
      name: "Thermal Matte Film (20 Mic)",
      fullName: "Thermal Matte Film 20 Mic",
      type: "Heat-Activated Matte Lamination Film",
      image: "/images/products/thermal-matte.png",
      specs: { thickness: "20 Microns (12mic film + 8mic EVA glue)", activationTemp: "95°C - 115°C", bondStrength: "Premium adhesion", glare: "Reduced reflectivity" },
      description: "A premium thermal lamination film designed to deliver a smooth, non-reflective matte finish with enhanced surface protection and durability. Featuring a heat-activated coating, it enables efficient lamination without additional adhesive while providing a sophisticated appearance, reduced glare, and excellent resistance against scratches and wear. It is widely used for premium printed materials and luxury packaging applications.",
      applications: ["Luxury Printed Materials", "Cosmetic Packaging", "Premium Catalogs", "Corporate Presentation Covers", "Matte Finished Cartons"]
    }
  ];

  const polyesterProducts = [
    {
      name: "Metalized Polyester Film (MPICUV)",
      fullName: "Metalized Polyester Film (MPICUV)",
      type: "High-Barrier Metallic Film",
      image: "/images/products/metalized-polyester.png",
      specs: { substrate: "Biaxially Oriented Polyester (BOPET)", coating: "Vacuum deposited Aluminum", barrierProp: "High oxygen & moisture barrier", surfaceEnergy: ">=44 dyne/cm" },
      description: "A high-performance polyester film featuring a metallic coated surface that provides excellent barrier protection, enhanced durability, and premium visual appeal. Known for its reflective finish, superior strength, and resistance to moisture and external elements, it is widely used in decorative, packaging, and specialized printing applications requiring a high-quality metallic appearance.",
      applications: ["Metallic Decorative Packaging", "Gift Wrapping Materials", "Reflective Labels", "Premium Cartons", "Industrial Decorative Applications"]
    },
    {
      name: "Golden Polyester Film",
      fullName: "Golden Polyester Film",
      type: "Luxury Gold Decorative Film",
      image: "/images/products/golden-polyester.png",
      specs: { substrate: "BOPET (Polyester)", finish: "Mirror Golden", dustResistance: "Excellent", thickness: "12-15 Microns typical" },
      description: "A premium decorative film designed to provide an attractive metallic gold finish with enhanced durability and surface protection. Widely used in printing and packaging applications, it adds a luxurious appearance to products while offering resistance against moisture, dust, and external wear. Its reflective golden surface makes it ideal for high-end branding and decorative packaging solutions.",
      applications: ["Luxury Gift Packaging", "Premium Branding Materials", "Decorative Product Boxes", "High-End Labels & Stickers"]
    },
    {
      name: "Pillar of Light Polyester Film",
      fullName: "Pillar of Light Polyester Film",
      type: "Specialty Holographic/Reflective Film",
      image: "/images/products/holographic-film.png",
      specs: { substrate: "BOPET", effect: "Dynamic linear light deflection", finishing: "Holographic lamination", visualImpact: "Very High" },
      description: "A specialty decorative film designed to create a distinctive reflective light effect that enhances the visual appeal of printed and packaging materials. Known for its premium finish, durability, and eye-catching appearance, it is widely used in decorative lamination and high-end packaging applications to provide a unique and attractive presentation.",
      applications: ["Holographic Packaging", "Decorative Lamination", "Promotional Packaging", "Eye-Catching Product Labels"]
    }
  ];

  const getActiveProducts = () => {
    switch (activeTab) {
      case 'bopp': return boppProducts;
      case 'pvc': return pvcProducts;
      case 'thermal': return thermalProducts;
      case 'polyester': return polyesterProducts;
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 pt-24 pb-16 text-gray-900 grid-overlay">
      
      {/* Decorative top strip */}
      <div className="absolute top-[76px] left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-navy z-20" />
      
      {/* Immersive ambient backdrop circle */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-brand-navy/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BREADCRUMBS & BACK BUTTON */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium font-mono text-gray-500">
            <button 
              onClick={onBack}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-gray-400">CATEGORIES</span>
            <span>/</span>
            <span className="text-brand-navy font-bold">LAMINATION FILMS</span>
          </nav>

          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="text-left max-w-3xl mb-16">
          <span className="px-3 py-1.5 rounded-md bg-amber-50 border border-brand-orange/20 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase mb-4 inline-block">
            Industrial Media Category
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5.5xl text-brand-navy uppercase tracking-tight leading-none mb-6">
            Lamination <span className="text-brand-orange">Films</span>
          </h1>
          <p className="font-sans font-light text-gray-600 text-lg sm:text-xl leading-relaxed">
            Engineered high-clarity Biaxially Oriented Polypropylene (BOPP), Polyvinyl Chloride (PVC), and specialized Polyester (BOPET) media designed for superior print protection, barrier defense, and premium finishes.
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
                  isActive ? 'text-brand-orange' : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
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
                {getActiveProducts().map((product, pIdx) => (
                  <motion.div 
                    key={product.name} 
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: pIdx * 0.05, ease: "easeOut" }}
                    className="rounded-3xl bg-white border border-slate-150 shadow-sm hover:shadow-[0_20px_50px_rgba(245,163,0,0.1)] hover:border-brand-orange/40 transition-all duration-500 relative overflow-hidden group"
                  >
                    {/* Top colored indicator strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange/0 group-hover:bg-brand-orange transition-all duration-300 z-20" />

                    {/* Glowing radial ambient background inside the card */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/[0.03] rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-orange/[0.12] transition-all duration-500" />

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
                      <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-black/40 backdrop-blur-md text-brand-orange uppercase rounded-md border border-brand-orange/30">
                        {product.type}
                      </span>
                    </div>

                    <div className="p-8 sm:p-10 relative z-10">
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4 group-hover:text-brand-orange transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="font-sans font-light text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Technical specifications grid */}
                      <div className="mb-6">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
                          Technical Specifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                          {Object.entries(product.specs).map(([key, value]) => (
                            <div 
                              key={key} 
                              className="flex justify-between border-b border-gray-150 pb-1.5 last:border-b-0 last:pb-0 hover:bg-amber-50/30 px-1.5 rounded transition-colors duration-200"
                            >
                              <span className="font-sans text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="font-sans text-xs font-semibold text-brand-navy">{String(value)}</span>
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
                              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-gray-700 hover:border-brand-orange/40 hover:bg-amber-50/50 hover:text-brand-orange transition-all duration-300"
                            >
                              <Check className="w-3.5 h-3.5 text-brand-orange mr-1.5 flex-shrink-0" />
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
