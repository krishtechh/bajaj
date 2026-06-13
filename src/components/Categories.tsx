import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, X, Shield, Eye } from 'lucide-react';
import { categoriesData, Category } from '../data';

export default function Categories() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  
  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev === 0 ? categoriesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev === categoriesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="categories" 
      className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden"
    >
      {/* Decorative fluorescent circles representing backing polymers */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay-dark opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with circular navigators */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
              OUR CATALOGUE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-white mb-4 tracking-tight">
              Product Categories
            </h2>
            <p className="font-sans font-light text-blue-100/70 text-base sm:text-lg">
              Industrial-grade lamination and bonding formulations meticulously engineered for high-throughput automated manufacturing lines.
            </p>
          </div>

          {/* Previous/Next Navigator buttons as seen in high-end industrial websites */}
          <div className="flex items-center space-x-3 self-end">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-brand-orange hover:border-brand-orange flex items-center justify-center transition-all duration-300 cursor-pointer text-white"
              aria-label="Previous category"
              id="cat-btn-prev"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-brand-navy hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Next category"
              id="cat-btn-next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories sliding showcase cards (masonry/scroll track) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="categories-grid">
          {categoriesData.map((category, idx) => {
            const isHighlighted = idx === activeCardIndex;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative group bg-white/5 backdrop-blur-md rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isHighlighted 
                    ? 'border-brand-orange ring-1 ring-brand-orange/50 shadow-2xl shadow-brand-orange/10' 
                    : 'border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
                whileHover={{ 
                  rotateY: 2, 
                  rotateX: -2,
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Lamination Film Accent Border Top */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                  isHighlighted ? 'bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange' : 'bg-transparent'
                }`} />

                {/* Card Image viewport with zoom on hover */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80 z-10" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    id={`category-img-${category.id}`}
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-black/40 backdrop-blur-md text-brand-orange uppercase rounded-md border border-brand-orange/30">
                    Industrial Safe
                  </span>
                </div>

                {/* Card Details Content */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-sans font-light text-blue-100/75 text-sm leading-relaxed mb-6 h-20 line-clamp-4">
                    {category.description}
                  </p>

                  {/* Bullet features preview */}
                  <ul className="mb-6 space-y-2 text-xs font-sans text-blue-100/60 font-light border-t border-white/5 pt-4">
                    {category.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link details trigger */}
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-brand-orange hover:border-brand-orange text-white hover:text-white font-sans font-semibold text-sm transition-colors duration-300 cursor-pointer"
                    id={`view-details-${category.id}`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Specifications</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fully Interactive Specification Dialog / Modal */}
        <AnimatePresence>
          {selectedCategory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" id="category-modal">
              {/* Outer clicking closer */}
              <div className="absolute inset-0" onClick={() => setSelectedCategory(null)} />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white text-gray-900 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100"
              >
                {/* Modal close icon */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-brand-orange flex items-center justify-center transition-colors cursor-pointer"
                  id="close-category-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Banner image */}
                <div className="relative h-64 sm:h-72">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="px-3 py-1 text-[11px] font-mono font-bold tracking-wider bg-brand-navy text-white rounded-md uppercase mb-2 inline-block">
                      Technical Spec Sheet
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy leading-none">
                      {selectedCategory.title}
                    </h3>
                  </div>
                </div>

                {/* Body details content */}
                <div className="p-6 sm:p-8">
                  <p className="font-sans font-light text-gray-600 text-base leading-relaxed mb-6">
                    {selectedCategory.description}
                  </p>

                  <h4 className="font-heading font-extrabold text-sm text-brand-navy uppercase tracking-wider mb-4">
                    Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {selectedCategory.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-gray-100">
                        <Shield className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm font-medium text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        const contactEl = document.getElementById('contact');
                        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-navy hover:bg-brand-orange text-white font-semibold text-sm transition-colors cursor-pointer"
                      id="modal-request-quote"
                    >
                      Request Technical RFQ
                    </button>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Close Specifications
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
