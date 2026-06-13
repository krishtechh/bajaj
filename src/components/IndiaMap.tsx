import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, MapPin, TrendingUp, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { networkStatesData, NetworkState } from '../data';

export default function IndiaMap() {
  const [selectedState, setSelectedState] = useState<NetworkState>(networkStatesData[0]);
  const [hoveredState, setHoveredState] = useState<NetworkState | null>(null);

  // Auto cyclic activation of nodes to simulate live updates on the dashboard if nothing is hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoveredState) {
        setSelectedState((prev) => {
          const currentIndex = networkStatesData.findIndex((s) => s.id === prev.id);
          const nextIndex = (currentIndex + 1) % networkStatesData.length;
          return networkStatesData[nextIndex];
        });
      }
    }, 4500); // cycle every 4.5s
    return () => clearInterval(interval);
  }, [hoveredState]);

  return (
    <section 
      id="network" 
      className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Premium Dashboard glowing circles */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[350px] h-[350px] bg-brand-navy/40 rounded-full blur-[100px] pointer-events-none" />
      {/* Tech grid overlay */}
      <div className="absolute inset-0 grid-overlay-dark opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title structure */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
              ENTERPRISE REACH
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-white mb-4 tracking-tight">
              Nationwide Distribution Network
            </h2>
            <p className="font-sans font-light text-gray-400 text-base sm:text-lg">
              Explore our highly automated storage hubs and logistics centers strategically linked across individual active states.
            </p>
          </div>

          {/* Quick global stats indicator */}
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md self-end">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-normal" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-300">Live Logistics Synchronization</span>
          </div>
        </div>

        {/* Dynamic Dual columns Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="network-dashboard-view">
          
          {/* LEFT: TEXT CONTROLS & LIVE STATE SPECIFICATIONS */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* 1. Global Stat Tiles Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">State Coverage</span>
                <span className="font-heading font-extrabold text-2xl text-brand-orange block">20+ States</span>
                <span className="font-sans text-[11px] text-gray-500">Active Supply Wings</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Dealers</span>
                <span className="font-heading font-extrabold text-2xl text-white block">500+ Hubs</span>
                <span className="font-sans text-[11px] text-gray-500">Retail & Logistics points</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-left">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Corporate Clients</span>
                <span className="font-heading font-extrabold text-2xl text-white block">1000+ Units</span>
                <span className="font-sans text-[11px] text-gray-500">Across Packaging, Auto</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-left bg-gradient-to-br from-brand-orange/5 to-transparent">
                <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-1">Fleet Speed</span>
                <span className="font-heading font-extrabold text-2xl text-brand-orange block">24/7 Hours</span>
                <span className="font-sans text-[11px] text-gray-500">Uninterrupted Dispatch</span>
              </div>
            </div>

            {/* 2. Interactive Live Specification Card */}
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 text-left relative overflow-hidden shadow-2xl">
              {/* Decorative top corner line */}
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-brand-orange" />
              
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  <h4 className="font-heading font-extrabold text-lg tracking-tight text-white">
                    {selectedState.name}
                  </h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-md font-mono text-[10px] bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
                  {selectedState.id} REGION
                </span>
              </div>

              {/* Dynamic telemetry specs */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-gray-400 font-light">Authorized Dealers</span>
                  <span className="font-heading font-bold text-sm text-white">{selectedState.dealers} Distributors</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-gray-400 font-light">Active Industrial Clients</span>
                  <span className="font-heading font-bold text-sm text-white">{selectedState.clients} Factories</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-gray-400 font-light">Supply Volume Growth</span>
                  <div className="flex items-center space-x-1 text-green-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="font-mono text-xs font-bold leading-none">{selectedState.salesGrowth} YoY</span>
                  </div>
                </div>

                {/* Micro logistics route tag */}
                <div className="mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Truck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-white leading-none">Automated Telemetry</span>
                    <span className="font-sans text-[10px] text-gray-400">Real-time GPS dispatch active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick list of States for easy click trigger if on mobile */}
            <div className="flex flex-wrap gap-2 pt-2 xl:pt-4" id="network-chip-links">
              {networkStatesData.slice(0, 6).map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium border transition-all duration-300 cursor-pointer ${
                    selectedState.id === st.id 
                      ? 'bg-brand-orange border-brand-orange text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: THE INTERACTIVE DIGITAL VECTOR GRAPHIC INDIA NETWORK MAP */}
          <div className="lg:col-span-8 flex justify-center items-center relative min-h-[400px] sm:min-h-[500px] bg-white/[0.01] rounded-[2.5rem] p-4 border border-white/5">
            
            {/* Visual tech crosshairs */}
            <div className="absolute top-6 left-6 font-mono text-[9px] text-gray-500 select-none">GRID REF: BJI_IN_900</div>
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-gray-500 select-none">SYS_READY_V2.5</div>

            {/* Simulated connection line drawings behind nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Plot connections from central Maharashtra city node to regional centers */}
              <motion.path
                d="M 26,55 Q 28,40 30,25" // MH to Delhi
                fill="none" 
                stroke="#F5A300" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 26,55 Q 22,50 19,46" // MH to Gujarat
                fill="none" 
                stroke="#F5A300" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 26,55 Q 30,65 34,82" // MH to Tamil Nadu
                fill="none" 
                stroke="#F5A300" 
                strokeWidth="0.5" 
                strokeDasharray="2,2"
                animate={{ strokeDashoffset: [0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M 30,25 Q 40,35 58,42" // Delhi to West Bengal
                fill="none" 
                stroke="#123B7A" 
                strokeWidth="0.5" 
                strokeDasharray="4,4"
              />
            </svg>

            {/* India Outline Representation Canvas */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] z-10" id="india-interactive-map">
              {/* Simplistic Abstract Geographic Styling Box */}
              <div className="absolute inset-0 border border-white/5 rounded-3xl overflow-hidden bg-slate-900/30 backdrop-blur-sm shadow-inner">
                {/* Simulated land mass abstract grids */}
                <div className="w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* India interactive capital nodes mapped dynamically */}
              {networkStatesData.map((st) => {
                const isActive = selectedState.id === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedState(st)}
                    onMouseEnter={() => {
                      setHoveredState(st);
                      setSelectedState(st);
                    }}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{ left: `${st.x}%`, top: `${st.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer group"
                    id={`map-node-${st.id}`}
                  >
                    {/* Ring highlight scale pulse */}
                    {isActive ? (
                      <span className="absolute -inset-4 rounded-full bg-brand-orange/20 animate-ping z-0 pointer-events-none" />
                    ) : (
                      <span className="absolute -inset-2 rounded-full bg-white/5 group-hover:bg-brand-orange/10 transition-colors z-0 pointer-events-none" />
                    )}

                    {/* Glowing core dot indicator */}
                    <div className={`relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-orange border-white shadow-lg shadow-brand-orange/50 scale-125' 
                        : 'bg-slate-800 border-brand-orange/60 group-hover:bg-brand-orange group-hover:border-white'
                    }`}>
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>

                    {/* Compact floating state label badge on hover or active */}
                    <div className={`absolute left-1/2 -translate-x-1/2 -bottom-7 pr-3 transition-all duration-300 z-20 pointer-events-none bg-slate-900 text-white border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap shadow-md ${
                      isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 text-gray-300'
                    }`}>
                      {st.name} ({st.dealers} D)
                    </div>
                  </button>
                );
              })}
              
              {/* Map instructions subtitle indicator */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none drop-shadow">
                <span className="px-2 py-1 bg-black/40 border border-white/15 rounded-md font-mono text-[10px] tracking-widest uppercase text-brand-orange">
                  Interactive Dashboard
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
