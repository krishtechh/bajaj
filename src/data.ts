import { Shield, Target, Award, Users, Settings, Zap, MapPin } from 'lucide-react';
import vacmetLogo from '../assets/Vacmet Logo png.png';
import siegwerkLogo from '../assets/Siegwerk_Group_logo.svg';
import pidiliteLogo from '../assets/Pidilite_logo.svg.png';
import puneetImage from '../assets/puneet.jpeg';
import harishImage from '../assets/harish.jpeg';

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
  { label: "Years of Excellence", value: 15, suffix: "+" },
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
    id: "Pidilite",
    name: "Pidilite",
    logo: pidiliteLogo,
    description: "Pidilite is one of India’s leading manufacturers of adhesives, sealants, construction chemicals, and art materials, trusted by millions across households and industries worldwide. With iconic brands like Fevicol, Dr. Fixit, Fevikwik, and M-Seal, Pidilite has established a strong global presence by delivering innovative and sustainable solutions across more than 100 countries.",
  },
  {
    id: "Siegwerk",
    name: "Siegwerk",
    logo: siegwerkLogo,
    description: "Siegwerk is one of the leading global providers of printing inks and coatings for packaging applications and labels. As a family-owned company in its seventh generation, we rely on almost 200 years of expertise and knowledge in printing today.",
  },
  {
    id: "Vacmet India Limited",
    name: "Vacmet India Limited",
    logo: vacmetLogo,
    description: "Vacmet India Limited is one of the world's leading producers of flexible packaging films and metalized paper & board headquartered in India. Catering to customers in more than 70 countries, Vacmet today is one of the most trusted partners for some of the world’s largest packaging manufacturers and FMCG brands in their journey towards sustainable packaging.",
  },
];

export const industriesData: Industry[] = [
  {
    id: "paper-packaging",
    title: "Paper Packaging & Converting Industry",
    description: "Supplying high-performance water-based adhesives, hot melts, and premium lamination films for carton manufacturing, paper bags, and advanced paper converting operations.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
    accent: "from-amber-500 to-orange-600"
  },
  {
    id: "printing-publishing",
    title: "Printing & Publishing Industry",
    description: "Specialized thermal and wet lamination films, overprint varnishes, and industrial inks offering outstanding scuff resistance and vibrant clarity for books, magazines, and commercial prints.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    accent: "from-blue-600 to-indigo-800"
  },
  {
    id: "hologram-tapes-label",
    title: "Hologram, Tapes & Label Industry",
    description: "Providing specialized acrylic emulsions, hot melt pressure-sensitive adhesives (PSA), and premium base films for security holograms, industrial adhesive tapes, and product labelling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    accent: "from-purple-500 to-indigo-700"
  },
  {
    id: "corrugation-allied",
    title: "Corrugation and Allied Industries",
    description: "High-strength, quick-tack starch additives, water-based adhesives, and robust reinforcing materials engineered for high-speed automatic corrugating lines and heavy-duty shipping containers.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800",
    accent: "from-orange-600 to-amber-700"
  }
];

export const leadersData: Leader[] = [
  {
    id: "leader-1",
    name: "Puneet Bajaj",
    designation: "Founder, Bajaj International",
    image: puneetImage,
    quote: "Success has never been measured solely by business growth, but by the trust earned along the way.",
    bio: "Through his leadership and commitment to excellence, he has cultivated a company that stands for quality, reliability, and long-term partnerships, making Bajaj International a trusted name in the industry."
  },
  {
    id: "leader-2",
    name: "Harish Kukreja",
    designation: "Co-Founder, Bajaj International",
    image: harishImage,
    quote: "Dedication to excellence and operational precision plays a key role in delivering the reliability and consistency that customers trust.",
    bio: "Harish Kukreja oversees the operational backbone of Bajaj International, ensuring smooth execution, efficient processes, and dependable service."
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
