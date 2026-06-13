import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ZoomIn, Eye, X, Quote, Calendar, Award } from 'lucide-react';
import { galleryData, GalleryItem } from '../data';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = ["All", "Manufacturing", "Lamination", "Research", "Packaging"];

  // Filter images based on tab search
  const filteredImages = activeTab === "All"
    ? galleryData
    : galleryData.filter(item => item.category === activeTab);

  // High-fidelity industrial client testimonials to list within gallery strips
  const testimonials = [
    {
      id: "t-1",
      quote: "Bajaj lamination films completely solved our spine-cracking issues on high-volume catalog printing, guaranteeing pristine luxury textbook outputs.",
      author: "Director of Quality Control",
      company: "Thomson Print & Press India"
    },
    {
      id: "t-2",
      quote: "Their hotmelt solutions bind fast at extreme high-speed cartoning lanes. We saw zero downtime across our dairy packaging lines since switching.",
      author: "Head of Manufacturing Operations",
      company: "National Dairy & Food Group"
    },
    {
      id: "t-3",
      quote: "Environmental audits are zero-pain now. Bajaj's solvent-free adhesives helped us score top ranks in corporate green building certifications.",
      author: "Sustainability Lead",
      company: "EcoPack Containers Corp"
    }
  ];

  return (
    <section 
      id="gallery" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Visual ambient graphics overlay */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-slate-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Paragraph title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
            Inside bajaj international
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-4 tracking-tight">
            Inside Our Operations & Media Block
          </h2>
          <p className="font-sans font-light text-gray-600 text-base sm:text-lg">
            Glance through our high-speed BOPP lines, pristine chemical labs, climate-regulated shipping warehouses, and automated polymer mixing.
          </p>
        </div>

        {/* Tab Buttons to filter sections */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold border tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-brand-navy border-brand-navy text-white shadow-md'
                  : 'bg-slate-50 border-gray-200 text-gray-600 hover:bg-slate-100 hover:text-brand-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Bento grid of images */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-bento-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-150 aspect-[4/3] bg-gray-100"
              >
                {/* Dark Hover overlay mask */}
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center select-none" />
                
                {/* Main illustration representation */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Expanded metadata hovering cards */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider text-brand-orange bg-black/40 backdrop-blur-sm uppercase mb-1.5 inline-block">
                    {item.category} REGISTRY
                  </span>
                  <h4 className="font-heading font-bold text-sm text-white block">
                    {item.title}
                  </h4>
                </div>

                {/* Hover trigger lens icon */}
                <button
                  onClick={() => setSelectedImage(item)}
                  aria-label="Open larger image modal"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 w-11 h-11 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg transition-all transform duration-300 scale-75 group-hover:scale-100 hover:bg-brand-orange/95 cursor-pointer"
                  id={`gallery-zoom-${item.id}`}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* TESTIMONIALS SLIDING OVERLAY SECTION */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={test.id} 
                className="p-6 rounded-2xl bg-slate-50 border border-gray-100 text-left flex flex-col justify-between"
                id={`testimonial-${test.id}`}
              >
                <div className="mb-6">
                  <div className="text-brand-orange mb-3">
                    <Quote className="w-6 h-6 fill-brand-orange/25 stroke-brand-orange" />
                  </div>
                  <p className="font-sans font-light text-gray-600 text-sm sm:text-base leading-relaxed italic">
                    “{test.quote}”
                  </p>
                </div>
                <div className="border-t border-gray-200/60 pt-4 flex items-center justify-between">
                  <div>
                    <h5 className="font-heading font-extrabold text-[13px] text-brand-navy">
                      {test.author}
                    </h5>
                    <p className="font-sans text-[11px] text-gray-400 font-medium">{test.company}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-amber-50 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Lightbox Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" id="gallery-lightbox">
              {/* Overlay clickable close background */}
              <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900 overflow-hidden shadow-2xl z-10 rounded-2xl max-w-4xl w-full"
              >
                {/* Modal close */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-brand-orange flex items-center justify-center transition-colors cursor-pointer"
                  id="close-lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Magnified Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Top category pill tag */}
                  <div className="absolute bottom-6 left-6 z-20 text-left pointer-events-none drop-shadow">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider bg-brand-orange text-white uppercase rounded mb-2 inline-block">
                      {selectedImage.category} UNIT
                    </span>
                    <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
                      {selectedImage.title}
                    </h3>
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
