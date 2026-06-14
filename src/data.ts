import { Shield, Target, Award, Users, Settings, Zap, MapPin } from 'lucide-react';
import vacmetLogo from '../assets/Vacmet Logo png.png';
import siegwerkLogo from '../assets/Siegwerk_Group_logo.svg';
import pidiliteLogo from '../assets/Pidilite_logo.svg.png';

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Distributor {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  accent: string;
}

export interface Leader {
  id: string;
  name: string;
  designation: string;
  image: string;
  quote: string;
  bio: string;
}

export interface NetworkState {
  id: string;
  name: string;
  dealers: number;
  clients: number;
  salesGrowth: string;
  x: number; // percentage coordinate on SVG map
  y: number; // percentage coordinate on SVG map
  active: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const statsData: Stat[] = [
  { label: "Authorized Dealers", value: 500, suffix: "+" },
  { label: "Active States", value: 20, suffix: "+" },
  { label: "Years of Excellence", value: 20, suffix: "+" },
  { label: "Industrial Clients", value: 1000, suffix: "+" }
];

export const categoriesData: Category[] = [
  {
    id: "lamination",
    title: "Lamination Films",
    description: "Premium high-barrier and thermal lamination films designed for luxury packaging, books, flexible containers, and heavy-duty industrial printing safeguards.",
    image: "/images/products/bopp-film-glossy.png",
    features: ["BOPP & PET options", "Ultra-high gloss & deep matte", "Excellent thermal bond strength"]
  },
  {
    id: "adhesives",
    title: "Water-Based Adhesives",
    description: "Eco-friendly, high-solid adhesives custom-engineered for heavy packaging, cardboard laminations, woodworking, paper processing, and precision labeling.",
    image: "/images/products/lamination-adhesive.png",
    features: ["Zero VOC emission", "Fast drying speed", "Exceptional grab and shear"]
  },
  {
    id: "hotmelt",
    title: "Hot Melt Solutions",
    description: "State-of-the-art thermoplastic adhesives providing rapid-setting bonds for automated cartoning, booklet gluing, spine binding, case sealing, and product assemblies.",
    image: "/images/products/book-binding-melt.png",
    features: ["Superior thermal stability", "Extrusion and nozzle grades", "Bonding of non-porous surfaces"]
  },
  {
    id: "industrial-ink",
    title: "Industrial Ink & Coatings",
    description: "Advanced printing inks formulated for continuous inkjet printers, flexible packaging, rotogravure, flexography, and UV-curable industrial product marking.",
    image: "/images/products/water-based-ink.png",
    features: ["High rub and solvent resistance", "Vibrant pigmentation", "Fast curing on high-speed lines"]
  }
];

export const distributorsData: Distributor[] = [
  {
    id: "Vacmet India Limited",
    name: "Vacmet India Limited",
    logo: vacmetLogo,
    description: "Vacmet India Limited is one of the world's leading producers of flexible packaging films and metalized paper & board headquartered in India. Catering to customers in more than 70 countries, Vacmet today is one of the most trusted partners for some of the world’s largest packaging manufacturers and FMCG brands in their journey towards sustainable packaging.",
  },
  {
    id: "Siegwerk",
    name: "Siegwerk",
    logo: siegwerkLogo,
    description: "Siegwerk is one of the leading global providers of printing inks and coatings for packaging applications and labels. As a family-owned company in its seventh generation, we rely on almost 200 years of expertise and knowledge in printing today.",
  },
  {
    id: "Pidilite",
    name: "Pidilite",
    logo: pidiliteLogo,
    description: "Pidilite is one of India’s leading manufacturers of adhesives, sealants, construction chemicals, and art materials, trusted by millions across households and industries worldwide. With iconic brands like Fevicol, Dr. Fixit, Fevikwik, and M-Seal, Pidilite has established a strong global presence by delivering innovative and sustainable solutions across more than 100 countries.",
  }
];

export const industriesData: Industry[] = [
  {
    id: "packaging",
    title: "Packaging & Corrugation",
    description: "Supplying top-grade BOPP/PET lamination films and quick-grab adhesives for premium cartons, luxury cosmetics, and durable shipping containers.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "printing",
    title: "Printing & Publishing",
    description: "Specialized thermal films and high-fidelity industrial inks providing superior protection, scuff resistance, and vibrant clarity for magazines and books.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    accent: "from-blue-600 to-indigo-800"
  },
  {
    id: "furniture",
    title: "Woodworking & Furniture",
    description: "Industrial water-based D3/D4 PVA adhesives and heavy duty hot melts ensuring seamless membrane pressing, post-forming, and high-strength plywood bonds.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    accent: "from-zinc-500 to-zinc-700"
  },
  {
    id: "textile",
    title: "Textile & Apparel",
    description: "Durable hotmelt adhesives for seamless apparel design, elastic ribbons, embroidery stabilization, and specialty pigment binders for industrial printing.",
    image: "https://images.unsplash.com/photo-1558191053-c03db2757e3d?auto=format&fit=crop&q=80&w=800",
    accent: "from-teal-500 to-emerald-700"
  },
  {
    id: "automotive",
    title: "Automotive Assembly",
    description: "High-performance hot melt solutions for interiors, roof linings, door trims, and acoustic insulation bonding adhering to the strictest thermal thresholds.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800",
    accent: "from-slate-600 to-slate-900"
  },
  {
    id: "construction",
    title: "Construction Materials",
    description: "PVA emulsion coatings and heavy-bonding adhesives optimized for concrete admixture formulation, plasterboards, acoustic panels, and wood flooring.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    accent: "from-orange-500 to-red-700"
  },
  {
    id: "fmcg",
    title: "FMCG Labelling & Box Sealing",
    description: "Ultra-fast drying label adhesives and food-safe cartoning hot melts designed to keep up with hyper-speed automation production lines.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=800",
    accent: "from-orange-600 to-amber-700"
  },
  {
    id: "electronics",
    title: "Consumer Electronics",
    description: "Non-conductive flame retardant hot melts and coatings protecting internal circuit boards, wire routing, and micro-speakers from vibrational strain.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    accent: "from-cyan-600 to-brand-navy"
  }
];

export const leadersData: Leader[] = [
  {
    id: "leader-1",
    name: "Shri. Surendra Bajaj",
    designation: "Founder & Executive Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    quote: "Engineering bonds that last goes beyond chemical formulas; it requires building unshakeable trust with our partners and continuous technical foresight.",
    bio: "With over three decades of pioneering leadership in industrial polymer chemistry, Shri. Surendra Bajaj founded Bajaj International with the core ideal of making India self-reliant in advanced lamination films and bonding technologies."
  },
  {
    id: "leader-2",
    name: "Dr. Vikram Aditya Bajaj",
    designation: "Managing Director & CEO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    quote: "By aligning robotic automation, eco-safe polymers, and hyper-local supply chains, we are driving Bajaj International into a digital-first industrial future.",
    bio: "Dr. Vikram Bajaj holds a PhD in Materials Science from Imperial College London. He oversees global technology acquisitions, our state-of-the-art research centers in Pune, and our green energy transition across corporate operations."
  },
  {
    id: "leader-3",
    name: "Ananya Bajaj Mehta",
    designation: "Chief of Distribution & Global Alliances",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    quote: "Our distribution channel isn't just a transport system; it is a live network of technology ambassadors solving manufacturer pain points on the ground daily.",
    bio: "Ananya holds an MBA from Cornell University. She has successfully scaled the Bajaj authorized dealer count to over 500, setting up dedicated real-time telemetry logistics hubs and state-level storage modules across India."
  }
];

// Interactive map configuration with approximated SVG coordinates for high-fidelity interactive map
export const networkStatesData: NetworkState[] = [
  { id: "MH", name: "Maharashtra", dealers: 124, clients: 280, salesGrowth: "+18%", x: 26, y: 55, active: true },
  { id: "GJ", name: "Gujarat", dealers: 96, clients: 210, salesGrowth: "+22%", x: 19, y: 46, active: true },
  { id: "DL", name: "Delhi NCR", dealers: 78, clients: 160, salesGrowth: "+15%", x: 30, y: 25, active: true },
  { id: "UP", name: "Uttar Pradesh", dealers: 68, clients: 120, salesGrowth: "+12%", x: 39, y: 28, active: true },
  { id: "TN", name: "Tamil Nadu", dealers: 62, clients: 145, salesGrowth: "+19%", x: 34, y: 82, active: true },
  { id: "KA", name: "Karnataka", dealers: 58, clients: 110, salesGrowth: "+14%", x: 29, y: 72, active: true },
  { id: "PB", name: "Punjab", dealers: 42, clients: 75, salesGrowth: "+9%", x: 27, y: 18, active: true },
  { id: "HR", name: "Haryana", dealers: 48, clients: 95, salesGrowth: "+13%", x: 28, y: 23, active: true },
  { id: "RJ", name: "Rajasthan", dealers: 55, clients: 90, salesGrowth: "+11%", x: 22, y: 33, active: true },
  { id: "MP", name: "Madhya Pradesh", dealers: 41, clients: 80, salesGrowth: "+10%", x: 34, y: 46, active: true },
  { id: "WB", name: "West Bengal", dealers: 38, clients: 70, salesGrowth: "+8%", x: 58, y: 42, active: true },
  { id: "AP", name: "Andhra Pradesh", dealers: 45, clients: 85, salesGrowth: "+16%", x: 37, y: 66, active: true },
  { id: "TS", name: "Telangana", dealers: 49, clients: 105, salesGrowth: "+20%", x: 34, y: 60, active: true },
  { id: "KL", name: "Kerala", dealers: 32, clients: 50, salesGrowth: "+7%", x: 29, y: 85, active: true }
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Robotic Polymer Mixing Unit",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "gal-2",
    title: "BOPP High-Speed Slitting Lines",
    category: "Lamination",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "gal-3",
    title: "Pristine Analytical Lab Testing",
    category: "Research",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "gal-4",
    title: "Bulk Hotmelt Packaging Lines",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "gal-5",
    title: "Regional Distribution Facility",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "gal-6",
    title: "High-Opacity Solvent Inks Review",
    category: "Quality Control",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=500"
  }
];
