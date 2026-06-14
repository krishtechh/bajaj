import { Check, Eye } from 'lucide-react';
import { categoriesData } from '../data';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface CategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section
      id="categories"
      className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden"
    >
      {/* Background Orange Graphics - Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Background Orange Graphics - Big Circles (Alternating left, right, left) */}
      <div className="absolute top-[0%] left-[5%] w-[400px] h-[400px] bg-brand-orange rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_rgba(234,88,12,0.6)] opacity-95" />
      <div className="absolute top-[50%] right-[5%] w-[400px] h-[400px] bg-brand-orange rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_rgba(234,88,12,0.6)] opacity-95" />
      <div className="absolute top-[100%] left-[5%] w-[400px] h-[400px] bg-brand-orange rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_rgba(234,88,12,0.6)] opacity-95" />

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
        </div>

        {/* Categories scroll stack integration */}
        <ScrollStack useWindowScroll={true} className="mt-8">
          {categoriesData.map((category, idx) => {
            const isOrangeCard = idx % 2 === 1;
            return (
              <ScrollStackItem
                key={category.id}
                itemClassName={
                  isOrangeCard
                    ? 'bg-gradient-to-br from-[#F5A300] to-[#c47c00] text-slate-950 border border-white/20 shadow-[0_20px_50px_rgba(245,163,0,0.25)]'
                    : 'bg-gradient-to-br from-[#123B7A] to-[#081e3f] text-white border border-white/10 shadow-[0_20px_50px_rgba(18,59,122,0.25)]'
                }
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full h-full">
                  {/* Left Column: Text Content and Button */}
                  <div className="flex-1 text-left flex flex-col justify-between h-full py-2">
                    <div>
                      {/* Product Formulation Tag */}
                      {/* <span className={`font-mono text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-3 block ${
                        isOrangeCard ? 'text-slate-950 font-extrabold' : 'text-brand-orange'
                      }`}>
                        Formulation Group 0{idx + 1}
                      </span> */}
                      {/* Title */}
                      <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl lg:text-3.5xl mb-4 tracking-tight leading-tight ${
                        isOrangeCard ? 'text-slate-950' : 'text-white'
                      }`}>
                        {category.title}
                      </h3>
                      {/* Description */}
                      <p className={`font-sans font-light text-sm sm:text-base leading-relaxed mb-6 ${
                        isOrangeCard ? 'text-slate-900/90' : 'text-blue-100/80'
                      }`}>
                        {category.description}
                      </p>

                      {/* Bullet features preview */}
                      <ul className={`mb-8 space-y-2.5 text-xs sm:text-sm font-sans font-light border-t pt-4 ${
                        isOrangeCard ? 'border-black/10' : 'border-white/10'
                      }`}>
                        {category.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2.5">
                            <Check className={`w-4 h-4 flex-shrink-0 ${
                              isOrangeCard ? 'text-slate-950' : 'text-brand-orange'
                            }`} />
                            <span className={isOrangeCard ? 'text-slate-900' : 'text-blue-50'}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action button */}
                    <div className="mt-4">
                      <button
                        onClick={() => {
                          console.log("Categories ScrollStack - Explore clicked:", category.id);
                          onSelectCategory(category.id);
                        }}
                        className={`inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md ${
                          isOrangeCard
                            ? 'bg-slate-950 hover:bg-slate-800 text-white border border-slate-950/10'
                            : 'bg-brand-orange hover:bg-[#e09500] text-white border border-brand-orange/10'
                        }`}
                      >
                        <Eye className="w-4.5 h-4.5" />
                        <span>Explore Specifications</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="w-full md:w-[45%] h-52 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden relative shadow-lg flex-shrink-0">
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

      </div>
    </section>
  );
}

