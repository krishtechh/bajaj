import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function IndiaMap() {
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    // Centered around Middle East/India to show connections well
    const map = L.map('global-map', {
      center: [20.0, 65.0],
      zoom: 3.5,
      minZoom: 2,
      maxZoom: 12,
      scrollWheelZoom: false, // disable scrolling zoom so it doesn't get in the way of page scroll
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    mapInstanceRef.current = map;

    const delhiCoords: [number, number] = [28.6139, 77.2090];

    const locations = [
      // HQ & Hubs
      { name: 'Mumbai, India', lat: 19.0760, lng: 72.8777, type: 'hq', desc: 'Central Headquarters' },
      { name: 'New Delhi, India', lat: 28.6139, lng: 77.2090, type: 'hq', desc: 'Central Dispatch Hub' },
      
      // Global
      { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, type: 'global', desc: 'Middle East Division' },
      { name: 'Nairobi, Africa', lat: -1.2921, lng: 36.8219, type: 'global', desc: 'Africa Logistics Hub' },
      
      // All States (Major hubs to represent all states of India)
      { name: 'Pune, Maharashtra', lat: 18.5204, lng: 73.8567, type: 'branch', desc: 'R&D Center' },
      { name: 'Chennai, Tamil Nadu', lat: 13.0827, lng: 80.2707, type: 'branch', desc: 'South Hub' },
      { name: 'Kolkata, West Bengal', lat: 22.5726, lng: 88.3639, type: 'branch', desc: 'East Hub' },
      { name: 'Ahmedabad, Gujarat', lat: 23.0225, lng: 72.5714, type: 'branch', desc: 'West Hub' },
      { name: 'Lucknow, Uttar Pradesh', lat: 26.8467, lng: 80.9462, type: 'branch', desc: 'North Hub' },
      { name: 'Bengaluru, Karnataka', lat: 12.9716, lng: 77.5946, type: 'branch', desc: 'Tech & Supply Center' },
      { name: 'Hyderabad, Telangana', lat: 17.3850, lng: 78.4867, type: 'branch', desc: 'Logistics Center' },
      { name: 'Chandigarh, Punjab/Haryana', lat: 30.7333, lng: 76.7794, type: 'branch', desc: 'Northern Supply' },
      { name: 'Jaipur, Rajasthan', lat: 26.9124, lng: 75.7873, type: 'branch', desc: 'Western Supply' },
      { name: 'Bhopal, Madhya Pradesh', lat: 23.2599, lng: 77.4126, type: 'branch', desc: 'Central Hub' },
      { name: 'Trivandrum, Kerala', lat: 8.5241, lng: 76.9366, type: 'branch', desc: 'Southern Hub' },
      { name: 'Guwahati, Assam', lat: 26.1445, lng: 91.7362, type: 'branch', desc: 'North-East Hub' },
      { name: 'Patna, Bihar', lat: 25.5941, lng: 85.1376, type: 'branch', desc: 'East Inland Hub' },
    ];

    const createMarkerIcon = (type: string) => {
      const colorClass = type === 'hq' ? 'bg-[#123B7A]' : 'bg-[#F5A300]';
      const pulseColor = type === 'hq' ? 'rgba(18, 59, 122, 0.4)' : 'rgba(245, 163, 0, 0.4)';
      const size = type === 'hq' ? [20, 20] : [14, 14];
      const anchor = type === 'hq' ? [10, 10] : [7, 7];
      
      return L.divIcon({
        className: 'custom-div-icon',
        html: `
          <div class="marker-pin-wrapper" style="width: 100%; height: 100%;">
            <div class="marker-pulse" style="background-color: ${pulseColor};"></div>
            <div class="marker-dot ${colorClass}" style="width: 100%; height: 100%;"></div>
          </div>
        `,
        iconSize: size as L.PointTuple,
        iconAnchor: anchor as L.PointTuple
      });
    };

    locations.forEach((loc) => {
      // Draw Marker
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

      // Draw Connecting Line from Delhi if it's not Delhi itself
      if (loc.name !== 'New Delhi, India') {
        const isGlobal = loc.type === 'global';
        L.polyline([delhiCoords, [loc.lat, loc.lng]], {
          color: isGlobal ? '#123B7A' : '#F5A300',
          weight: isGlobal ? 2 : 1.5,
          opacity: 0.4,
          dashArray: isGlobal ? '4, 4' : '2, 4',
        }).addTo(map);
      }
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
            GLOBAL CONNECTIVITY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4.5xl leading-tight text-brand-navy mb-4 tracking-tight">
            Our Centralized Footprint
          </h2>
          <p className="font-sans font-light text-slate-600 text-base sm:text-lg">
            A unified network spanning all 28 states of India and extending our reach directly to the Middle East and Africa from our Delhi Central Hub.
          </p>
        </div>

        {/* 1. Centered Global Stats Number Boxes at the top */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12" id="global-stats-grid">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Global Presence</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">3 Continents</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Asia, Middle East & Africa</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">National Reach</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">All 28 States</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Pan-India Connectivity</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Central Hub</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy block">New Delhi</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Direct Routing to All Hubs</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-orange/5 to-transparent shadow-sm">
            <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest block mb-2 font-bold">Logistics Strength</span>
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-orange block">500+ Dealers</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 block">Active Distributorships</span>
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
