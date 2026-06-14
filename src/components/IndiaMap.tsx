import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function IndiaMap() {
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    // Centered around Europe/Middle East/Asia to show global footprint beautifully
    const map = L.map('global-map', {
      center: [25.0, 45.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 12,
      scrollWheelZoom: false, // disable scrolling zoom so it doesn't get in the way of page scroll
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    mapInstanceRef.current = map;

    // Coordinates representing countries and states where Bajaj operates
    const locations = [
      { name: 'Mumbai, India (HQ & Polymers)', lat: 19.0760, lng: 72.8777, type: 'hq', desc: 'Central Polymer Logistics Hub & Corporate Headquarters' },
      { name: 'Pune, India (R&D Center)', lat: 18.5204, lng: 73.8567, type: 'rd', desc: 'State-of-the-art Polymer Chemistry & Adhesive Formulation Labs' },
      { name: 'New Delhi, India (North Hub)', lat: 28.6139, lng: 77.2090, type: 'branch', desc: 'Regional Sales Office & Northern Dispatch Hub' },
      { name: 'Chennai, India (South Hub)', lat: 13.0827, lng: 80.2707, type: 'branch', desc: 'Specialty Coatings Unit & Deepwater Port Distribution Center' },
      { name: 'Kolkata, India (East Hub)', lat: 22.5726, lng: 88.3639, type: 'branch', desc: 'Eastern Regional Sales Center & Lamination Film Facility' },
      { name: 'Dubai, UAE (Middle East Division)', lat: 25.2048, lng: 55.2708, type: 'global', desc: 'Middle East Distribution Hub & Trade Alliances Division' },
      { name: 'Frankfurt, Germany (European Branch)', lat: 50.1109, lng: 8.6821, type: 'global', desc: 'European Sales, Compliance, & High-Performance Film Distribution' },
      { name: 'Nairobi, Kenya (Africa Logistics)', lat: -1.2921, lng: 36.8219, type: 'global', desc: 'African East-Coast Distribution & Lamination Sales Hub' },
      { name: 'Singapore (APAC Logistics Hub)', lat: 1.3521, lng: 103.8198, type: 'global', desc: 'Southeast Asian Corporate Headquarters & Telemetry Center' },
      { name: 'Hanoi, Vietnam (APAC Division)', lat: 21.0285, lng: 105.8542, type: 'global', desc: 'Asia-Pacific Regional Supply Network & Packaging Film Center' },
    ];

    const createMarkerIcon = (type: string) => {
      const colorClass = type === 'hq' ? 'bg-[#123B7A]' : 'bg-[#F5A300]';
      const pulseColor = type === 'hq' ? 'rgba(18, 59, 122, 0.4)' : 'rgba(245, 163, 0, 0.4)';
      return L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div class="marker-pin-wrapper">
            <div class="marker-pulse" style="background-color: ${pulseColor};"></div>
            <div class="marker-dot ${colorClass}"></div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
    };

    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: createMarkerIcon(loc.type)
      }).addTo(map);

      marker.bindPopup(`
        <div class="p-2 text-slate-900 max-w-[200px]">
          <div class="flex items-center space-x-2 mb-1">
            <span class="w-2.5 h-2.5 rounded-full ${loc.type === 'hq' ? 'bg-[#123B7A]' : 'bg-[#F5A300]'}"></span>
            <h4 class="font-heading font-extrabold text-[13px] text-slate-900 leading-tight">
              ${loc.name}
            </h4>
          </div>
          <p class="font-sans text-[11px] text-slate-600 leading-normal">${loc.desc}</p>
        </div>
      `);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      id="network" 
      className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[350px] h-[350px] bg-brand-navy/[0.04] rounded-full blur-[100px] pointer-events-none" />
      {/* Technical grid lines in brand navy color */}
      <div className="absolute inset-0 grid-overlay-navy pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title structure */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading font-bold text-xs tracking-wider uppercase text-brand-orange mb-3 block">
            GLOBAL PRESENCE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-4 tracking-tight">
            Our Global Footprint
          </h2>
          <p className="font-sans font-light text-slate-600 text-base sm:text-lg">
            Meticulously linking manufacturing units, R&D labs, state warehouses, and international distribution hubs across global markets.
          </p>
        </div>

        {/* 1. Centered Global Stats Number Boxes at the top */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12" id="global-stats-grid">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Global Presence</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">20+ Countries</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Active International Reach</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Authorized Hubs</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">500+ Dealers</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Retail & Logistics points</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Corporate Units</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">1000+ Clients</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Across Industrial Sectors</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 text-center bg-gradient-to-br from-brand-orange/5 to-transparent shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Fleet Operations</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-orange block">24/7 Hours</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Uninterrupted Global Dispatch</span>
          </div>
        </div>

        {/* 2. Interactive Map Container */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden relative border border-gray-200 shadow-xl bg-white">
          <div id="global-map" className="w-full h-full z-10" />
          
          {/* Subtle overlay border for premium styling */}
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-3xl z-20" />
        </div>

      </div>
    </section>
  );
}
